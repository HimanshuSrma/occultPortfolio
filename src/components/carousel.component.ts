import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel">
      <div class="carousel-container">
        <div class="carousel-slides" [style.transform]="'translateX(-' + currentSlide * 100 + '%)'">
          <div class="carousel-slide" *ngFor="let slide of slides; let i = index">
            <div class="slide-background" [style.background-image]="'url(' + slide.backgroundImage + ')'"></div>
            <div class="slide-overlay"></div>
            <div class="container">
              <div class="slide-content">
                <div class="slide-icon">{{ slide.icon }}</div>
                <h1 class="slide-title">{{ slide.title }}</h1>
                <p class="slide-subtitle">{{ slide.subtitle }}</p>
                <div class="slide-features">
                  <div class="feature" *ngFor="let feature of slide.features">
                    <span class="feature-icon">{{ feature.icon }}</span>
                    <span class="feature-text">{{ feature.text }}</span>
                  </div>
                </div>
                <div class="slide-buttons">
                  <a [href]="slide.primaryAction.link" class="btn btn-primary">{{ slide.primaryAction.text }}</a>
                  <a [href]="slide.secondaryAction.link" class="btn btn-outline">{{ slide.secondaryAction.text }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-indicators">
          <button 
            *ngFor="let slide of slides; let i = index"
            class="indicator"
            [class.active]="i === currentSlide"
            (click)="goToSlide(i)"
          ></button>
        </div>
        
        <button class="carousel-nav prev" (click)="previousSlide()">‹</button>
        <button class="carousel-nav next" (click)="nextSlide()">›</button>
      </div>
    </div>
  `,
  styles: [`
    .carousel {
      position: relative;
      height: 100vh;
      overflow: hidden;
    }
    
    .carousel-container {
      position: relative;
      height: 100%;
    }
    
    .carousel-slides {
      display: flex;
      height: 100%;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .carousel-slide {
      min-width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
    }
    
    .slide-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(212, 175, 55, 0.6) 100%);
    }
    
    .slide-content {
      position: relative;
      z-index: 2;
      color: var(--white);
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .slide-icon {
      font-size: 4rem;
      margin-bottom: 24px;
      opacity: 0.9;
    }
    
    .slide-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 24px;
      line-height: 1.2;
    }
    
    .slide-subtitle {
      font-size: 1.5rem;
      margin-bottom: 40px;
      opacity: 0.95;
      line-height: 1.4;
    }
    
    .slide-features {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    
    .feature {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 20px;
      border-radius: 25px;
      backdrop-filter: blur(10px);
    }
    
    .feature-icon {
      font-size: 1.25rem;
    }
    
    .feature-text {
      font-weight: 500;
    }
    
    .slide-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .carousel-indicators {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 12px;
      z-index: 3;
    }
    
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .indicator.active {
      background: var(--white);
      border-color: var(--white);
    }
    
    .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: var(--white);
      font-size: 1.5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 3;
      backdrop-filter: blur(10px);
    }
    
    .carousel-nav:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-50%) scale(1.1);
    }
    
    .prev {
      left: 32px;
    }
    
    .next {
      right: 32px;
    }
    
    @media (max-width: 768px) {
      .carousel {
        height: 80vh;
      }
      
      .slide-title {
        font-size: 2.5rem;
      }
      
      .slide-subtitle {
        font-size: 1.25rem;
      }
      
      .slide-features {
        gap: 16px;
      }
      
      .feature {
        padding: 8px 16px;
      }
      
      .slide-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .carousel-nav {
        width: 40px;
        height: 40px;
        font-size: 1.25rem;
      }
      
      .prev {
        left: 16px;
      }
      
      .next {
        right: 16px;
      }
    }
  `]
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  slides = [
    {
      icon: '🏠',
      title: 'Vastu Shastra Expert',
      subtitle: 'Transform your space with ancient wisdom for modern living',
      backgroundImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: [
        { icon: '✨', text: 'Energy Harmony' },
        { icon: '💰', text: 'Prosperity' },
        { icon: '❤️', text: 'Well-being' }
      ],
      primaryAction: { text: 'Book Vastu Consultation', link: '#contact' },
      secondaryAction: { text: 'Learn More', link: '#services' }
    },
    {
      icon: '🔢',
      title: 'Numerology Specialist',
      subtitle: 'Unlock the power of numbers to guide your life decisions',
      backgroundImage: 'https://images.pexels.com/photos/6980530/pexels-photo-6980530.jpeg',
      features: [
        { icon: '🎯', text: 'Life Path' },
        { icon: '💼', text: 'Career Guidance' },
        { icon: '💕', text: 'Relationships' }
      ],
      primaryAction: { text: 'Get Numerology Reading', link: '#contact' },
      secondaryAction: { text: 'View Services', link: '#services' }
    },
    {
      icon: '⭐',
      title: 'Vedic Astrology',
      subtitle: 'Ancient celestial wisdom for modern life guidance and predictions',
      backgroundImage: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
      features: [
        { icon: '🌟', text: 'Birth Chart' },
        { icon: '🔮', text: 'Predictions' },
        { icon: '💎', text: 'Remedies' }
      ],
      primaryAction: { text: 'Book Astrology Session', link: '#contact' },
      secondaryAction: { text: 'Explore Astrology', link: '#services' }
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}