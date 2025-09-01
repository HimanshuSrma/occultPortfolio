import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Transform Your Space with 
              <span class="highlight">Ancient Wisdom</span>
            </h1>
            <p class="hero-subtitle">
              Professional Vastu consultancy services to bring harmony, prosperity, 
              and positive energy to your home and workplace through time-tested principles.
            </p>
            <div class="hero-buttons">
              <a href="#contact" class="btn btn-primary">Book Consultation</a>
              <a href="#services" class="btn btn-outline">Our Services</a>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
              <div class="stat">
                <span class="stat-number">8+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" alt="Vastu Consultant">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 120px 0 80px;
      background: linear-gradient(135deg, #F8F9FA 0%, #E8F5E8 100%);
      position: relative;
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg') center/cover;
      opacity: 0.05;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: var(--deep-blue);
      margin-bottom: 24px;
    }
    
    .highlight {
      color: var(--primary-gold);
      position: relative;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--dark-gray);
      margin-bottom: 32px;
      line-height: 1.6;
    }
    
    .hero-buttons {
      display: flex;
      gap: 16px;
      margin-bottom: 48px;
    }
    
    .hero-stats {
      display: flex;
      gap: 48px;
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-gold);
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--dark-gray);
      font-weight: 500;
    }
    
    .hero-image {
      position: relative;
    }
    
    .hero-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 100px 0 60px;
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .hero-stats {
        justify-content: center;
        gap: 32px;
      }
      
      .hero-image img {
        height: 300px;
      }
    }
  `]
})
export class HeroComponent {}