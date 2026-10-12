import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ELEMENT_QUESTIONS, ELEMENT_LABELS, ElementQuestion, Element } from './element-quiz.data';

const TOTAL_QUESTIONS = 25;
const ALL_ELEMENTS: readonly Element[] = ['air', 'fire', 'earth', 'space', 'water'];

@Component({
  selector: 'app-element-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './element-quiz.component.html',
  styleUrls: ['./element-quiz.component.scss'],
})
export class ElementQuizComponent implements OnInit {
  @Output() backToServices = new EventEmitter<void>();

  private readonly STORAGE_KEY = 'quiz_element';

  readonly questions: readonly ElementQuestion[] = ELEMENT_QUESTIONS;
  readonly labels = ELEMENT_LABELS;
  readonly answers: Record<number, Element> = {};

  language: 'en' | 'hi' = 'en';
  showResult = false;
  scores: Record<Element, number> = this.emptyScores();

  ngOnInit(): void {
    this.loadState();
  }

  get answeredCount(): number {
    return Object.keys(this.answers).length;
  }

  get progressPercent(): number {
    return Math.round((this.answeredCount / TOTAL_QUESTIONS) * 100);
  }

  get allAnswered(): boolean {
    return this.answeredCount === TOTAL_QUESTIONS;
  }

  get sortedElements(): { element: Element; score: number }[] {
    return ALL_ELEMENTS
      .map(e => ({ element: e, score: this.scores[e] }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  get dominantElement(): Element {
    return this.sortedElements[0]?.element ?? 'earth';
  }

  selectAnswer(questionId: number, element: Element): void {
    (this.answers as Record<number, Element>)[questionId] = element;
    this.saveState();
  }

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'hi' : 'en';
  }

  submitQuiz(): void {
    if (!this.allAnswered) return;

    const counts = this.emptyScores();
    for (const el of Object.values(this.answers)) {
      counts[el]++;
    }

    const newScores = this.emptyScores();
    for (const e of ALL_ELEMENTS) {
      newScores[e] = Math.round((counts[e] / TOTAL_QUESTIONS) * 100);
    }
    this.scores = newScores;
    this.showResult = true;
    this.saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  retakeQuiz(): void {
    for (const key of Object.keys(this.answers)) {
      delete (this.answers as Record<string, Element>)[key];
    }
    this.showResult = false;
    this.scores = this.emptyScores();
    this.clearState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.backToServices.emit();
  }

  getPieSlices(): { element: Element; startAngle: number; endAngle: number; color: string }[] {
    const slices: { element: Element; startAngle: number; endAngle: number; color: string }[] = [];
    let currentAngle = 0;

    for (const { element, score } of this.sortedElements) {
      if (score <= 0) continue;
      const sweep = (score / 100) * 360;
      slices.push({
        element,
        startAngle: currentAngle,
        endAngle: currentAngle + sweep,
        color: ELEMENT_LABELS[element].color,
      });
      currentAngle += sweep;
    }
    return slices;
  }

  getSlicePath(startAngle: number, endAngle: number): string {
    const cx = 150;
    const cy = 150;
    const r = 120;

    if (endAngle - startAngle >= 359.99) {
      return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`;
    }

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }

  getLabelPos(startAngle: number, endAngle: number): { x: number; y: number } {
    const cx = 150;
    const cy = 150;
    const r = 75;
    const midRad = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(midRad), y: cy + r * Math.sin(midRad) };
  }

  private saveState(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        answers: this.answers,
        scores: this.scores,
        showResult: this.showResult,
      }));
    } catch { /* storage unavailable */ }
  }

  private loadState(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw);
      if (state.answers) {
        for (const [key, val] of Object.entries(state.answers)) {
          (this.answers as Record<string, string>)[key] = val as string;
        }
      }
      if (state.showResult) {
        this.showResult = true;
        this.scores = state.scores ?? this.emptyScores();
      }
    } catch { /* corrupted or unavailable */ }
  }

  private clearState(): void {
    try { localStorage.removeItem(this.STORAGE_KEY); } catch { /* */ }
  }

  private emptyScores(): Record<Element, number> {
    return { air: 0, fire: 0, earth: 0, space: 0, water: 0 };
  }
}
