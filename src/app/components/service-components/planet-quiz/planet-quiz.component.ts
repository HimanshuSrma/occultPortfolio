import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLANET_QUESTIONS, PLANET_LABELS, PlanetQuestion, Planet } from './planet-quiz.data';

const TOTAL_QUESTIONS = 12;
const ALL_PLANETS: readonly Planet[] = ['ketu', 'venus', 'sun', 'moon', 'mars', 'rahu', 'jupiter', 'saturn', 'mercury'];

@Component({
  selector: 'app-planet-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planet-quiz.component.html',
  styleUrls: ['./planet-quiz.component.scss'],
})
export class PlanetQuizComponent implements OnInit {
  @Output() backToServices = new EventEmitter<void>();

  private readonly STORAGE_KEY = 'quiz_planet';

  readonly questions: readonly PlanetQuestion[] = PLANET_QUESTIONS;
  readonly labels = PLANET_LABELS;
  readonly answers: Record<number, Planet> = {};

  language: 'en' | 'hi' = 'en';
  showResult = false;
  scores: Record<Planet, number> = this.emptyScores();

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

  get sortedPlanets(): { planet: Planet; score: number }[] {
    return ALL_PLANETS
      .map(p => ({ planet: p, score: this.scores[p] }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  get dominantPlanet(): Planet {
    return this.sortedPlanets[0]?.planet ?? 'sun';
  }

  selectAnswer(questionId: number, planet: Planet): void {
    (this.answers as Record<number, Planet>)[questionId] = planet;
    this.saveState();
  }

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'hi' : 'en';
  }

  submitQuiz(): void {
    if (!this.allAnswered) return;

    const counts = this.emptyScores();
    for (const planet of Object.values(this.answers)) {
      counts[planet]++;
    }

    const newScores = this.emptyScores();
    for (const p of ALL_PLANETS) {
      newScores[p] = Math.round((counts[p] / TOTAL_QUESTIONS) * 100);
    }
    this.scores = newScores;
    this.showResult = true;
    this.saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  retakeQuiz(): void {
    for (const key of Object.keys(this.answers)) {
      delete (this.answers as Record<string, Planet>)[key];
    }
    this.showResult = false;
    this.scores = this.emptyScores();
    this.clearState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.backToServices.emit();
  }

  getPieSlices(): { planet: Planet; startAngle: number; endAngle: number; color: string }[] {
    const slices: { planet: Planet; startAngle: number; endAngle: number; color: string }[] = [];
    let currentAngle = 0;

    for (const { planet, score } of this.sortedPlanets) {
      if (score <= 0) continue;
      const sweep = (score / 100) * 360;
      slices.push({
        planet,
        startAngle: currentAngle,
        endAngle: currentAngle + sweep,
        color: PLANET_LABELS[planet].color,
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

  private emptyScores(): Record<Planet, number> {
    return { ketu: 0, venus: 0, sun: 0, moon: 0, mars: 0, rahu: 0, jupiter: 0, saturn: 0, mercury: 0 };
  }
}
