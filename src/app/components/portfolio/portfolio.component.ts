import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  
})
export class PortfolioComponent {
  activeFilter = 'all';
  
  projects = [
    {
      title: 'Luxury Villa Transformation',
      description: 'Complete Vastu makeover of a 5000 sq ft villa',
      summary: 'Enhanced energy flow and prosperity through strategic room positioning and entrance optimization.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      category: 'vastu',
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
      category: 'vastu',
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
      category: 'vastu',
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
      category: 'vastu',
      type: 'Retail',
      location: 'Chennai',
      results: [
        { icon: '🛍️', text: 'Sales increase' },
        { icon: '👨‍👩‍👧‍👦', text: 'Customer satisfaction' },
        { icon: '⭐', text: 'Brand reputation' }
      ]
    },
    {
      title: 'Tech Entrepreneur Success',
      description: 'Numerology guidance for startup founder',
      summary: 'Optimized business name, mobile number, and launch date for maximum success potential.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      category: 'numerology',
      type: 'Business',
      location: 'Hyderabad',
      results: [
        { icon: '🚀', text: 'Startup success' },
        { icon: '💰', text: 'Funding secured' },
        { icon: '📈', text: 'Rapid growth' }
      ]
    },
    {
      title: 'Celebrity Name Correction',
      description: 'Numerological name analysis for film industry professional',
      summary: 'Strategic name spelling modification resulted in career breakthrough and increased opportunities.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      category: 'numerology',
      type: 'Personal',
      location: 'Mumbai',
      results: [
        { icon: '🎬', text: 'Career boost' },
        { icon: '⭐', text: 'Fame increase' },
        { icon: '💎', text: 'Recognition' }
      ]
    },
    {
      title: 'Marriage Timing Success',
      description: 'Astrological consultation for perfect wedding timing',
      summary: 'Identified most auspicious period for marriage resulting in harmonious and prosperous union.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      category: 'astrology',
      type: 'Marriage',
      location: 'Jaipur',
      results: [
        { icon: '💑', text: 'Happy marriage' },
        { icon: '🏠', text: 'Family harmony' },
        { icon: '✨', text: 'Blessed union' }
      ]
    },
    {
      title: 'Career Transformation',
      description: 'Astrological career guidance and gemstone recommendation',
      summary: 'Planetary analysis revealed ideal career path and gemstone remedy for professional success.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'astrology',
      type: 'Career',
      location: 'Bangalore',
      results: [
        { icon: '💼', text: 'Dream job' },
        { icon: '📊', text: 'Salary increase' },
        { icon: '🎯', text: 'Goal achievement' }
      ]
    }
  ];

  caseStudies = [
    {
      title: 'Complete Life Transformation',
      problem: 'Client facing financial crisis, health issues, and relationship problems simultaneously.',
      solution: 'Integrated approach: Vastu corrections for home, numerology-based name modification, and astrological gemstone remedy.',
      result: 'Remarkable transformation within 8 months - business flourished, health recovered, and marriage was saved.',
      metrics: [
        { value: '400%', label: 'Income Growth' },
        { value: '95%', label: 'Health Recovery' },
        { value: '100%', label: 'Satisfaction' }
      ]
    },
    {
      title: 'Startup Success Formula',
      problem: 'Tech startup facing funding issues, team conflicts, and market challenges.',
      solution: 'Triple approach: Vastu-optimized office design, numerology-based company name, and astrological launch timing.',
      result: 'Secured Series A funding, achieved product-market fit, and built a harmonious team culture.',
      metrics: [
        { value: '₹50M', label: 'Funding Raised' },
        { value: '300%', label: 'Revenue Growth' },
        { value: '98%', label: 'Team Retention' }
      ]
    },
    {
      title: 'Celebrity Career Revival',
      problem: 'Film industry professional experiencing career decline and personal struggles.',
      solution: 'Comprehensive analysis: numerological name correction, astrological career timing, and Vastu home optimization.',
      result: 'Career comeback with blockbuster success, improved personal relationships, and sustained prosperity.',
      metrics: [
        { value: '5', label: 'Hit Movies' },
        { value: '10x', label: 'Income Boost' },
        { value: '100%', label: 'Life Satisfaction' }
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