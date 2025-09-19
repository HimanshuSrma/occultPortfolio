import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CommonModule],
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
    },
    {
      icon: '🌿',
      title: 'Health & Vitality',
      subtitle: 'Ancient wisdom for modern wellness and energy alignment',
      backgroundImage: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg',
      features: [
        { icon: '💪', text: 'Physical Health' },
        { icon: '🧘', text: 'Mental Peace' },
        { icon: '⚡', text: 'Energy Balance' }
      ],
      primaryAction: { text: 'Improve Health', link: '#contact' },
      secondaryAction: { text: 'Health Solutions', link: '#services' }
    },
    {
      icon: '💕',
      title: 'Relationships & Love',
      subtitle: 'Strengthen bonds and create harmony in all relationships',
      backgroundImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      features: [
        { icon: '👫', text: 'Compatibility' },
        { icon: '💑', text: 'Marriage Harmony' },
        { icon: '👨‍👩‍👧‍👦', text: 'Family Unity' }
      ],
      primaryAction: { text: 'Enhance Relationships', link: '#contact' },
      secondaryAction: { text: 'Relationship Guide', link: '#services' }
    },
    {
      icon: '🚀',
      title: 'Career Success',
      subtitle: 'Accelerate professional growth with cosmic guidance',
      backgroundImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      features: [
        { icon: '📈', text: 'Growth' },
        { icon: '🎯', text: 'Direction' },
        { icon: '👑', text: 'Leadership' }
      ],
      primaryAction: { text: 'Boost Career', link: '#contact' },
      secondaryAction: { text: 'Career Services', link: '#services' }
    },
    {
      icon: '💰',
      title: 'Wealth & Prosperity',
      subtitle: 'Attract abundance and financial security through ancient principles',
      backgroundImage: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
      features: [
        { icon: '💎', text: 'Wealth Growth' },
        { icon: '🏦', text: 'Financial Security' },
        { icon: '📊', text: 'Investment Timing' }
      ],
      primaryAction: { text: 'Increase Wealth', link: '#contact' },
      secondaryAction: { text: 'Wealth Solutions', link: '#services' }
    },
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