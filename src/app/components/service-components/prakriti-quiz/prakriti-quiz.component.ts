import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRAKRITI_QUESTIONS, PrakritiQuestion } from './prakriti-quiz.data';

interface GunaScores {
  readonly sattva: number;
  readonly rajas: number;
  readonly tamas: number;
}

const WEIGHT_PER_QUESTION = 4;
const TOTAL_QUESTIONS = 25;

@Component({
  selector: 'app-prakriti-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prakriti-quiz.component.html',
  styleUrls: ['./prakriti-quiz.component.scss'],
})
export class PrakritiQuizComponent implements OnInit {
  @Output() backToServices = new EventEmitter<void>();

  private readonly STORAGE_KEY = 'quiz_prakriti';

  readonly questions: readonly PrakritiQuestion[] = PRAKRITI_QUESTIONS;
  readonly answers: Record<number, 'sattva' | 'rajas' | 'tamas'> = {};

  language: 'en' | 'hi' = 'en';
  showResult = false;
  scores: GunaScores = { sattva: 0, rajas: 0, tamas: 0 };

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

  selectAnswer(questionId: number, guna: 'sattva' | 'rajas' | 'tamas'): void {
    (this.answers as Record<number, string>)[questionId] = guna;
    this.saveState();
  }

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'hi' : 'en';
  }

  submitQuiz(): void {
    if (!this.allAnswered) return;

    const counts = { sattva: 0, rajas: 0, tamas: 0 };
    for (const guna of Object.values(this.answers)) {
      counts[guna]++;
    }

    this.scores = {
      sattva: counts.sattva * WEIGHT_PER_QUESTION,
      rajas: counts.rajas * WEIGHT_PER_QUESTION,
      tamas: counts.tamas * WEIGHT_PER_QUESTION,
    };
    this.showResult = true;
    this.saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  retakeQuiz(): void {
    for (const key of Object.keys(this.answers)) {
      delete (this.answers as Record<string, string>)[key];
    }
    this.showResult = false;
    this.scores = { sattva: 0, rajas: 0, tamas: 0 };
    this.clearState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.backToServices.emit();
  }

  getPieSlicePath(startAngle: number, endAngle: number): string {
    const cx = 150;
    const cy = 150;
    const r = 120;

    if (endAngle - startAngle >= 360) {
      return [
        `M ${cx} ${cy - r}`,
        `A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r}`,
        `Z`,
      ].join(' ');
    }

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return [
      `M ${cx} ${cy}`,
      `L ${x1} ${y1}`,
      `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
      `Z`,
    ].join(' ');
  }

  getLabelPosition(startAngle: number, endAngle: number): { x: number; y: number } {
    const cx = 150;
    const cy = 150;
    const r = 75;
    const midAngle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(midAngle),
      y: cy + r * Math.sin(midAngle),
    };
  }

  getDominantGuna(): string {
    const { sattva, rajas, tamas } = this.scores;
    if (sattva >= rajas && sattva >= tamas) return 'Sattva (सत्व)';
    if (rajas >= sattva && rajas >= tamas) return 'Rajas (रजस)';
    return 'Tamas (तमस)';
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
        this.scores = state.scores ?? { sattva: 0, rajas: 0, tamas: 0 };
      }
    } catch { /* corrupted or unavailable */ }
  }

  private clearState(): void {
    try { localStorage.removeItem(this.STORAGE_KEY); } catch { /* */ }
  }

  getDominantDescription(): string {
    const { sattva, rajas, tamas } = this.scores;
    if (sattva >= rajas && sattva >= tamas) {
      return this.language === 'en'
        ? 'You are naturally inclined towards purity, wisdom, and harmony. You seek knowledge, practice self-discipline, and value inner peace over material gain.'
        : 'आप स्वाभाविक रूप से शुद्धता, ज्ञान और सामंजस्य की ओर झुके हुए हैं। आप ज्ञान की खोज, आत्म-अनुशासन और भौतिक लाभ से अधिक आंतरिक शांति को महत्व देते हैं।';
    }
    if (rajas >= sattva && rajas >= tamas) {
      return this.language === 'en'
        ? 'You are driven by ambition, passion, and desire for achievement. You thrive on activity, competition, and recognition.'
        : 'आप महत्वाकांक्षा, जुनून और उपलब्धि की इच्छा से प्रेरित हैं। आप गतिविधि, प्रतिस्पर्धा और मान्यता पर फलते-फूलते हैं।';
    }
    return this.language === 'en'
      ? 'You tend towards inertia, comfort-seeking, and avoidance. Developing awareness and building small positive habits can help shift your energy.'
      : 'आप जड़ता, आराम-तलाशी और बचाव की ओर झुके हैं। जागरूकता विकसित करना और छोटी सकारात्मक आदतें बनाना आपकी ऊर्जा को बदलने में मदद कर सकता है।';
  }
}
