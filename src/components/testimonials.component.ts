import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="section testimonials">
      <div class="container">
        <h2 class="section-title">Client Testimonials</h2>
        <p class="section-subtitle">
          Real stories from satisfied clients who experienced positive transformations
        </p>
        
        <div class="testimonials-grid">
          <div class="testimonial-card card" *ngFor="let testimonial of testimonials">
            <div class="testimonial-content">
              <div class="stars">
                <span *ngFor="let star of getStars(testimonial.rating)">⭐</span>
              </div>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <img [src]="testimonial.image" [alt]="testimonial.name">
                <div class="author-info">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.title }}</p>
                  <span class="location">{{ testimonial.location }}</span>
                </div>
              </div>
              <div class="testimonial-results">
                <div class="result-item" *ngFor="let result of testimonial.results">
                  <span class="result-icon">{{ result.icon }}</span>
                  <span class="result-text">{{ result.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="success-stats">
          <div class="stat-card" *ngFor="let stat of successStats">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
        
        <div class="video-testimonials">
          <h3>Video Testimonials</h3>
          <div class="video-grid">
            <div class="video-placeholder" *ngFor="let video of videoTestimonials">
              <div class="video-thumbnail">
                <img [src]="video.thumbnail" [alt]="video.title">
                <div class="play-button">▶</div>
              </div>
              <div class="video-info">
                <h4>{{ video.title }}</h4>
                <p>{{ video.description }}</p>
                <span class="video-duration">{{ video.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      background: var(--light-gray);
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
    
    .testimonial-card {
      padding: 32px;
      position: relative;
    }
    
    .testimonial-card::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 4rem;
      color: var(--primary-gold);
      opacity: 0.3;
      font-family: serif;
    }
    
    .testimonial-content {
      position: relative;
      z-index: 2;
    }
    
    .stars {
      margin-bottom: 16px;
      font-size: 1.125rem;
    }
    
    .testimonial-text {
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--dark-gray);
      margin-bottom: 24px;
      font-style: italic;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    
    .testimonial-author img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .author-info h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .author-info p {
      color: var(--dark-gray);
      font-size: 0.875rem;
      margin-bottom: 4px;
    }
    
    .location {
      color: var(--primary-gold);
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .testimonial-results {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    
    .result-item {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(212, 175, 55, 0.1);
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.875rem;
    }
    
    .result-icon {
      color: var(--primary-gold);
    }
    
    .success-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
    
    .stat-card {
      background: var(--white);
      padding: 40px 24px;
      border-radius: 16px;
      text-align: center;
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
    }
    
    .stat-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
    
    .stat-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-gold);
      display: block;
      margin-bottom: 8px;
    }
    
    .stat-label {
      color: var(--dark-gray);
      font-weight: 500;
    }
    
    .video-testimonials h3 {
      text-align: center;
      font-size: 2rem;
      color: var(--deep-blue);
      margin-bottom: 40px;
    }
    
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
    }
    
    .video-placeholder {
      background: var(--white);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
    }
    
    .video-placeholder:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    
    .video-thumbnail {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .video-thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: rgba(212, 175, 55, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .play-button:hover {
      background: var(--primary-gold);
      transform: translate(-50%, -50%) scale(1.1);
    }
    
    .video-info {
      padding: 20px;
    }
    
    .video-info h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .video-info p {
      color: var(--dark-gray);
      font-size: 0.875rem;
      margin-bottom: 8px;
      line-height: 1.5;
    }
    
    .video-duration {
      color: var(--primary-gold);
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
      
      .success-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .video-grid {
        grid-template-columns: 1fr;
      }
      
      .testimonial-author {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Homeowner',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      text: 'Himmanshu transformed our home completely. Within 3 months of implementing his Vastu suggestions, my husband got a promotion and our family health improved significantly. His approach is scientific yet spiritual.',
      results: [
        { icon: '💼', text: 'Career growth' },
        { icon: '❤️', text: 'Better health' },
        { icon: '🏠', text: 'Peaceful home' }
      ]
    },
    {
      name: 'Rajesh Kumar',
      title: 'Business Owner',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      text: 'My restaurant was struggling for 2 years. After Himmanshu\'s Vastu consultation and implementing his recommendations, our sales doubled in just 4 months. Amazing results!',
      results: [
        { icon: '📈', text: '200% sales growth' },
        { icon: '👥', text: 'More customers' },
        { icon: '💰', text: 'Higher profits' }
      ]
    },
    {
      name: 'Sneha Patel',
      title: 'IT Professional',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'I was facing constant stress and relationship issues. Himmanshu\'s Vastu remedies for my apartment brought incredible positive changes. I feel more confident and peaceful now.',
      results: [
        { icon: '😌', text: 'Reduced stress' },
        { icon: '💑', text: 'Better relationships' },
        { icon: '✨', text: 'Positive energy' }
      ]
    },
    {
      name: 'Amit Agarwal',
      title: 'Real Estate Developer',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'Working with Himmanshu on our residential project was excellent. His Vastu guidance helped us design spaces that our customers love. All units sold within 6 months.',
      results: [
        { icon: '🏗️', text: 'Faster sales' },
        { icon: '⭐', text: 'Happy customers' },
        { icon: '📊', text: 'Project success' }
      ]
    }
  ];

  successStats = [
    { icon: '😊', number: '500+', label: 'Happy Clients' },
    { icon: '🏆', number: '98%', label: 'Success Rate' },
    { icon: '📈', number: '85%', label: 'Income Growth' },
    { icon: '⭐', number: '4.9', label: 'Average Rating' }
  ];

  videoTestimonials = [
    {
      title: 'Family Transformation Story',
      description: 'Complete journey of how Vastu changed the Sharma family\'s life',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      duration: '3:45'
    },
    {
      title: 'Business Success with Vastu',
      description: 'How a small business grew 300% with Vastu principles',
      thumbnail: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      duration: '4:20'
    },
    {
      title: 'Modern Apartment Vastu Solutions',
      description: 'Practical Vastu tips for apartment living',
      thumbnail: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      duration: '5:15'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}