import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="section portfolio">
      <div class="container">
        <h2 class="section-title">Portfolio</h2>
        <p class="section-subtitle">
          Explore our successful Vastu transformations and the positive impact on our clients' lives
        </p>
        
        <div class="portfolio-filters">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')"
          >
            All Projects
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'residential'"
            (click)="setFilter('residential')"
          >
            Residential
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'commercial'"
            (click)="setFilter('commercial')"
          >
            Commercial
          </button>
        </div>
        
        <div class="portfolio-grid">
          <div 
            class="portfolio-item card" 
            *ngFor="let project of filteredProjects"
            [attr.data-category]="project.category"
          >
            <div class="portfolio-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="portfolio-overlay">
                <div class="portfolio-content">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-details">
                    <span class="project-type">{{ project.type }}</span>
                    <span class="project-location">{{ project.location }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-info">
              <h4>{{ project.title }}</h4>
              <p>{{ project.summary }}</p>
              <div class="project-results">
                <div class="result" *ngFor="let result of project.results">
                  <span class="result-icon">{{ result.icon }}</span>
                  <span class="result-text">{{ result.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="case-studies">
          <h3>Featured Case Studies</h3>
          <div class="case-study-grid">
            <div class="case-study card" *ngFor="let study of caseStudies">
              <div class="case-study-content">
                <h4>{{ study.title }}</h4>
                <p class="case-problem"><strong>Challenge:</strong> {{ study.problem }}</p>
                <p class="case-solution"><strong>Solution:</strong> {{ study.solution }}</p>
                <p class="case-result"><strong>Result:</strong> {{ study.result }}</p>
                <div class="case-metrics">
                  <div class="metric" *ngFor="let metric of study.metrics">
                    <span class="metric-value">{{ metric.value }}</span>
                    <span class="metric-label">{{ metric.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio {
      background: var(--white);
    }
    
    .portfolio-filters {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 12px 24px;
      background: transparent;
      border: 2px solid var(--primary-gold);
      color: var(--primary-gold);
      border-radius: 25px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      background: var(--primary-gold);
      color: var(--white);
    }
    
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }
    
    .portfolio-item {
      overflow: hidden;
    }
    
    .portfolio-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }
    
    .portfolio-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .portfolio-item:hover .portfolio-image img {
      transform: scale(1.1);
    }
    
    .portfolio-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(30, 58, 138, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .portfolio-item:hover .portfolio-overlay {
      opacity: 1;
    }
    
    .portfolio-content {
      text-align: center;
      color: var(--white);
      padding: 24px;
    }
    
    .portfolio-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .project-details {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-top: 12px;
    }
    
    .project-type,
    .project-location {
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.875rem;
    }
    
    .portfolio-info {
      padding: 24px;
    }
    
    .portfolio-info h4 {
      color: var(--deep-blue);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .portfolio-info p {
      color: var(--dark-gray);
      margin-bottom: 16px;
      line-height: 1.5;
    }
    
    .project-results {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    
    .result {
      display: flex;
      align-items: center;
      gap: 6px;
      background: var(--light-gray);
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.875rem;
    }
    
    .result-icon {
      color: var(--primary-green);
    }
    
    .case-studies h3 {
      text-align: center;
      font-size: 2rem;
      color: var(--deep-blue);
      margin-bottom: 40px;
    }
    
    .case-study-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
    }
    
    .case-study {
      padding: 32px;
    }
    
    .case-study-content h4 {
      color: var(--deep-blue);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .case-problem,
    .case-solution,
    .case-result {
      margin-bottom: 16px;
      line-height: 1.6;
    }
    
    .case-problem {
      color: #dc2626;
    }
    
    .case-solution {
      color: var(--primary-green);
    }
    
    .case-result {
      color: var(--deep-blue);
    }
    
    .case-metrics {
      display: flex;
      gap: 24px;
      justify-content: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }
    
    .metric {
      text-align: center;
    }
    
    .metric-value {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-gold);
    }
    
    .metric-label {
      font-size: 0.875rem;
      color: var(--dark-gray);
    }
    
    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
      }
      
      .case-study-grid {
        grid-template-columns: 1fr;
      }
      
      .case-metrics {
        gap: 16px;
      }
      
      .project-details {
        flex-direction: column;
        gap: 8px;
      }
    }
  `]
})
export class PortfolioComponent {
  activeFilter = 'all';
  
  projects = [
    {
      title: 'Luxury Villa Transformation',
      description: 'Complete Vastu makeover of a 5000 sq ft villa',
      summary: 'Enhanced energy flow and prosperity through strategic room positioning and entrance optimization.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      category: 'residential',
      type: 'Villa',
      location: 'Mumbai',
      results: [
        { icon: '💰', text: 'Income increased' },
        { icon: '❤️', text: 'Family harmony' },
        { icon: '🌱', text: 'Better health' }
      ]
    },
    {
      title: 'Corporate Office Success',
      description: 'Vastu consultation for tech company headquarters',
      summary: 'Optimized workspace layout for productivity and employee satisfaction.',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      category: 'commercial',
      type: 'Office',
      location: 'Bangalore',
      results: [
        { icon: '📈', text: 'Revenue growth' },
        { icon: '👥', text: 'Team productivity' },
        { icon: '🎯', text: 'Goal achievement' }
      ]
    },
    {
      title: 'Apartment Harmony Project',
      description: 'Vastu solutions for modern apartment living',
      summary: 'Created peaceful environment within space constraints using smart Vastu remedies.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      category: 'residential',
      type: 'Apartment',
      location: 'Delhi',
      results: [
        { icon: '😌', text: 'Stress reduction' },
        { icon: '💤', text: 'Better sleep' },
        { icon: '🔋', text: 'More energy' }
      ]
    },
    {
      title: 'Retail Store Prosperity',
      description: 'Vastu optimization for fashion retail outlet',
      summary: 'Enhanced customer flow and sales through strategic product placement and entrance design.',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg',
      category: 'commercial',
      type: 'Retail',
      location: 'Chennai',
      results: [
        { icon: '🛍️', text: 'Sales increase' },
        { icon: '👨‍👩‍👧‍👦', text: 'Customer satisfaction' },
        { icon: '⭐', text: 'Brand reputation' }
      ]
    }
  ];

  caseStudies = [
    {
      title: 'From Financial Crisis to Prosperity',
      problem: 'Family facing severe financial difficulties and health issues after moving to new home.',
      solution: 'Repositioned main entrance, relocated kitchen, added water element in northeast, and corrected bedroom placements.',
      result: 'Within 6 months, business recovered, health improved, and family harmony was restored.',
      metrics: [
        { value: '300%', label: 'Income Growth' },
        { value: '90%', label: 'Health Recovery' },
        { value: '100%', label: 'Satisfaction' }
      ]
    },
    {
      title: 'Tech Startup Success Story',
      problem: 'New tech startup struggling with team conflicts, low productivity, and funding challenges.',
      solution: 'Redesigned office layout, optimized workstation positions, enhanced north direction for opportunities, and balanced five elements.',
      result: 'Company secured major funding, team productivity doubled, and employee satisfaction increased significantly.',
      metrics: [
        { value: '50M', label: 'Funding Raised' },
        { value: '200%', label: 'Productivity Boost' },
        { value: '95%', label: 'Team Satisfaction' }
      ]
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}