import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Homeowner',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      text: 'Himmanshu provided a complete life analysis using Vastu, Numerology, and Astrology. The combined approach gave incredible results - my husband got promoted, our health improved, and family harmony was restored.',
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
      text: 'My restaurant was failing until Himmanshu analyzed everything - Vastu layout, business name numerology, and astrological timing for promotions. Sales tripled in 6 months!',
      results: [
        { icon: '📈', text: '300% sales growth' },
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
      text: 'Struggling with career stagnation and relationship issues, Himmanshu\'s numerology reading revealed my true calling. Combined with Vastu home corrections, my life completely transformed.',
      results: [
        { icon: '💼', text: 'Dream career' },
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
      text: 'Himmanshu helped us with project Vastu, numerology for project naming, and astrological timing for launches. Our projects now sell 50% faster with premium pricing.',
      results: [
        { icon: '🏗️', text: 'Faster sales' },
        { icon: '⭐', text: 'Happy customers' },
        { icon: '📊', text: 'Project success' }
      ]
    },
    {
      name: 'Dr. Meera Singh',
      title: 'Medical Professional',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      rating: 5,
      text: 'As a doctor, I was skeptical initially. But Himmanshu\'s scientific approach to numerology and astrology, combined with practical Vastu solutions, brought measurable improvements to my practice and personal life.',
      results: [
        { icon: '🏥', text: 'Practice growth' },
        { icon: '👨‍⚕️', text: 'Patient satisfaction' },
        { icon: '⚖️', text: 'Work-life balance' }
      ]
    },
    {
      name: 'Vikash Gupta',
      title: 'Software Engineer',
      location: 'Gurgaon',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      rating: 5,
      text: 'Himmanshu\'s numerology analysis helped me choose the right career path, while his astrological guidance helped me time my job changes perfectly. Now earning 3x my previous salary!',
      results: [
        { icon: '💻', text: 'Tech leadership' },
        { icon: '💰', text: 'Salary growth' },
        { icon: '🎯', text: 'Career clarity' }
      ]
    }
  ];

  successStats = [
    { icon: '😊', number: '1200+', label: 'Happy Clients' },
    { icon: '🏆', number: '98%', label: 'Success Rate' },
    { icon: '📈', number: '300%', label: 'Average Growth' },
    { icon: '⭐', number: '4.9', label: 'Average Rating' }
  ];

  videoTestimonials = [
    {
      title: 'Complete Life Transformation',
      description: 'How Vastu, Numerology & Astrology changed everything',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      duration: '4:30'
    },
    {
      title: 'Startup Success Formula',
      description: 'Triple approach to business success using ancient sciences',
      thumbnail: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      duration: '5:15'
    },
    {
      title: 'Celebrity Career Revival',
      description: 'How numerology and astrology revived a film career',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      duration: '3:45'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}