import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="section services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          Comprehensive Vastu solutions tailored to your specific needs and requirements
        </p>
        
        <div class="services-grid">
          <div class="service-card card" *ngFor="let service of services">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">{{ feature }}</li>
            </ul>
            <div class="service-price">{{ service.price }}</div>
            <a href="#contact" class="btn btn-primary">Get Quote</a>
          </div>
        </div>
        
        <div class="additional-services">
          <h3>Additional Services</h3>
          <div class="additional-grid">
            <div class="additional-item" *ngFor="let item of additionalServices">
              <div class="additional-icon">{{ item.icon }}</div>
              <div class="additional-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: var(--light-gray);
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
    
    .service-card {
      padding: 40px 32px;
      text-align: center;
      border: 2px solid transparent;
      transition: all 0.3s ease;
    }
    
    .service-card:hover {
      border-color: var(--primary-gold);
      transform: translateY(-8px);
    }
    
    .service-icon {
      font-size: 3rem;
      margin-bottom: 24px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--deep-blue);
      margin-bottom: 16px;
    }
    
    .service-description {
      color: var(--dark-gray);
      margin-bottom: 24px;
      line-height: 1.6;
    }
    
    .service-features {
      list-style: none;
      margin-bottom: 24px;
      text-align: left;
    }
    
    .service-features li {
      padding: 8px 0;
      color: var(--dark-gray);
      position: relative;
      padding-left: 24px;
    }
    
    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-green);
      font-weight: bold;
    }
    
    .service-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-gold);
      margin-bottom: 24px;
    }
    
    .additional-services {
      text-align: center;
    }
    
    .additional-services h3 {
      font-size: 2rem;
      color: var(--deep-blue);
      margin-bottom: 40px;
    }
    
    .additional-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }
    
    .additional-item {
      display: flex;
      align-items: center;
      gap: 16px;
      background: var(--white);
      padding: 24px;
      border-radius: 12px;
      box-shadow: var(--shadow);
      text-align: left;
      transition: all 0.3s ease;
    }
    
    .additional-item:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    
    .additional-icon {
      font-size: 2rem;
      width: 60px;
      flex-shrink: 0;
    }
    
    .additional-content h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .additional-content p {
      color: var(--dark-gray);
      font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .service-card {
        padding: 32px 24px;
      }
      
      .additional-item {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🏠',
      title: 'Residential Vastu',
      description: 'Complete Vastu analysis and solutions for homes, apartments, and residential complexes.',
      features: [
        'Site analysis and plot selection',
        'Room placement optimization',
        'Energy flow enhancement',
        'Remedial solutions',
        'Interior layout guidance'
      ],
      price: 'Starting ₹15,000'
    },
    {
      icon: '🏢',
      title: 'Commercial Vastu',
      description: 'Vastu consultation for offices, shops, factories, and commercial establishments.',
      features: [
        'Business growth optimization',
        'Workspace arrangement',
        'Cash flow enhancement',
        'Employee productivity boost',
        'Customer attraction solutions'
      ],
      price: 'Starting ₹25,000'
    },
    {
      icon: '🏗️',
      title: 'Construction Guidance',
      description: 'Step-by-step Vastu guidance during construction phase for optimal results.',
      features: [
        'Foundation ceremony timing',
        'Construction phase guidance',
        'Material selection advice',
        'Griha pravesh consultation',
        'Progress monitoring'
      ],
      price: 'Starting ₹35,000'
    }
  ];

  additionalServices = [
    {
      icon: '📞',
      title: 'Phone Consultation',
      description: 'Expert advice over phone for quick Vastu queries'
    },
    {
      icon: '💻',
      title: 'Online Analysis',
      description: 'Remote Vastu analysis using floor plans and photos'
    },
    {
      icon: '🔄',
      title: 'Follow-up Support',
      description: 'Post-consultation support for implementation guidance'
    },
    {
      icon: '📋',
      title: 'Detailed Reports',
      description: 'Comprehensive written reports with recommendations'
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored Vastu remedies for specific problems'
    },
    {
      icon: '📚',
      title: 'Educational Workshops',
      description: 'Group sessions and workshops on Vastu principles'
    }
  ];
}