import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">About Himmanshu Sharma</h2>
        <p class="section-subtitle">
          Certified Vastu expert with over 8 years of experience in creating harmonious living and working spaces
        </p>
        
        <div class="about-content">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" alt="Himmanshu Sharma">
            <div class="experience-badge">
              <span class="badge-number">8+</span>
              <span class="badge-text">Years Experience</span>
            </div>
          </div>
          
          <div class="about-text">
            <h3>Bringing Ancient Wisdom to Modern Living</h3>
            <p>
              With a deep understanding of Vastu Shastra principles and modern architectural needs, 
              I help clients create spaces that promote health, wealth, and happiness. My approach 
              combines traditional knowledge with practical solutions for contemporary lifestyles.
            </p>
            
            <div class="qualifications">
              <div class="qualification">
                <div class="qualification-icon">🎓</div>
                <div class="qualification-text">
                  <h4>Certified Vastu Consultant</h4>
                  <p>Advanced certification from Indian Institute of Vastu</p>
                </div>
              </div>
              
              <div class="qualification">
                <div class="qualification-icon">🏆</div>
                <div class="qualification-text">
                  <h4>Award-Winning Consultant</h4>
                  <p>Recognized for excellence in Vastu consulting services</p>
                </div>
              </div>
              
              <div class="qualification">
                <div class="qualification-icon">📚</div>
                <div class="qualification-text">
                  <h4>Continuous Learning</h4>
                  <p>Regular workshops and seminars on ancient sciences</p>
                </div>
              </div>
            </div>
            
            <div class="philosophy">
              <h4>My Philosophy</h4>
              <p>
                "Every space has the potential to enhance life when aligned with natural energies. 
                My mission is to help you unlock this potential through personalized Vastu solutions 
                that respect both tradition and modern needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--white);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 64px;
      align-items: start;
    }
    
    .about-image {
      position: relative;
    }
    
    .about-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: var(--shadow);
    }
    
    .experience-badge {
      position: absolute;
      bottom: 24px;
      right: 24px;
      background: var(--primary-gold);
      color: var(--white);
      padding: 16px;
      border-radius: 12px;
      text-align: center;
      box-shadow: var(--shadow);
    }
    
    .badge-number {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .badge-text {
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .about-text h3 {
      font-size: 2rem;
      color: var(--deep-blue);
      margin-bottom: 16px;
      font-weight: 600;
    }
    
    .about-text > p {
      font-size: 1.125rem;
      color: var(--dark-gray);
      margin-bottom: 32px;
      line-height: 1.7;
    }
    
    .qualifications {
      margin-bottom: 32px;
    }
    
    .qualification {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      align-items: start;
    }
    
    .qualification-icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      background: var(--light-gray);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .qualification-text h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .qualification-text p {
      color: var(--dark-gray);
      font-size: 0.875rem;
    }
    
    .philosophy {
      background: var(--light-gray);
      padding: 24px;
      border-radius: 12px;
      border-left: 4px solid var(--primary-gold);
    }
    
    .philosophy h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 12px;
    }
    
    .philosophy p {
      color: var(--dark-gray);
      font-style: italic;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .about-text h3 {
        font-size: 1.5rem;
      }
      
      .qualification {
        align-items: center;
      }
      
      .qualification-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
      }
    }
  `]
})
export class AboutComponent {}