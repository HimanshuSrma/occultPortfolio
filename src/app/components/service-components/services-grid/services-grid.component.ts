import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss',
})
export class ServicesGridComponent {
  @Output() requestDataType = new EventEmitter<string>();
  services: any = [
  //   {
  //     id: 'name',
  //     title: 'Name Numerology',
  //     description:
  //       'Discover the hidden vibrations and cosmic energy within your name through ancient numerological wisdom',
  //     icon: '✨',
  //     route: '/name-numerology',
  //     gradient:
  //       'linear-gradient(135deg, rgba(120, 119, 198, 0.3), rgba(120, 119, 198, 0.1))',
  //   },
  //   {
  //     id: 'mobile',
  //     title: 'Mobile Numerology',
  //     description:
  //       'Unlock the energetic patterns and frequencies hidden within your mobile number',
  //     icon: '📱',
  //     route: '/mobile-numerology',
  //     gradient:
  //       'linear-gradient(135deg, rgba(255, 119, 198, 0.3), rgba(255, 119, 198, 0.1))',
  //   },
  //   {
  //     id: 'time',
  //     title: 'Personal Predictions',
  //     description:
  //       'Receive cosmic insights and guidance for your daily, monthly, and yearly journey ahead',
  //     icon: '🔮',
  //     route: '/personal-prediction',
  //     gradient:
  //       'linear-gradient(135deg, rgba(120, 219, 255, 0.3), rgba(120, 219, 255, 0.1))',
  //   },
  //   {
  //     id: 'loshu',
  //     title: 'Loshu Grid Analysis',
  //     description:
  //       'Explore missing numbers and their profound effects with personalized remedies and solutions',
  //     icon: '🔢',
  //     route: '/loshu-grid',
  //     gradient:
  //       'linear-gradient(135deg, rgba(255, 193, 110, 0.3), rgba(255, 193, 110, 0.1))',
  //   },
  //   {
  //     id: 'recommendation',
  //     title: 'Cosmic Recommendations',
  //     description:
  //       'Receive personalized guidance and favorable suggestions aligned with your cosmic blueprint',
  //     icon: '⭐',
  //     route: '/recommendation',
  //     gradient:
  //       'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(168, 85, 247, 0.1))',
  //   },

  // {
  //   id: 'consultation',
  //   title: 'Personal Consultation',
  //   description: 'Get one-on-one guidance from our expert numerologist for personalized cosmic insights and life solutions',
  //   icon: '🧙‍♂️',
  //   route: '/personal-consultation',
  //   gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.1))'
  // },
  {
      id: 'name',
      title: 'Name Numerology',
      description: 'Discover the hidden vibrations and cosmic energy within your name through ancient numerological wisdom',
      icon: '✨',
      route: '/name-numerology',
      gradient: 'linear-gradient(135deg, rgba(120, 119, 198, 0.3), rgba(120, 119, 198, 0.1))'
    },
    {
      id: 'mobile',
      title: 'Mobile Numerology',
      description: 'Unlock the energetic patterns and frequencies hidden within your mobile number',
      icon: '📱',
      route: '/mobile-numerology',
      gradient: 'linear-gradient(135deg, rgba(255, 119, 198, 0.3), rgba(255, 119, 198, 0.1))'
    },
    {
      id: 'time',
      title: 'Time-Based Guidance',
      description: 'Receive cosmic insights and guidance for your daily, monthly, and yearly journey ahead',
      icon: '🔮',
      route: '/personal-prediction',
      gradient: 'linear-gradient(135deg, rgba(120, 219, 255, 0.3), rgba(120, 219, 255, 0.1))'
    },
    {
      id: 'loshu',
      title: 'Loshu Grid Analysis',
      description: 'Explore missing numbers and their profound effects with personalized remedies and solutions',
      icon: '🔢',
      route: '/loshu-grid',
      gradient: 'linear-gradient(135deg, rgba(255, 193, 110, 0.3), rgba(255, 193, 110, 0.1))'
    },
    {
      id: 'recommendation',
      title: 'Cosmic Recommendations',
      description: 'Receive personalized guidance and favorable suggestions aligned with your cosmic blueprint',
      icon: '⭐',
      route: '/recommendation',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(168, 85, 247, 0.1))'
    },
    // {
    //   id: 'compatibility',
    //   title: 'Relationship Compatibility',
    //   description: 'Discover cosmic harmony between you and your partner through numerological compatibility analysis',
    //   icon: '💕',
    //   route: '/compatibility',
    //   gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0.1))'
    // },
    // {
    //   id: 'business',
    //   title: 'Business Numerology',
    //   description: 'Optimize your business success with cosmic number analysis for company names and launch dates',
    //   icon: '💼',
    //   route: '/business-numerology',
    //   gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))'
    // },
    // {
    //   id: 'career',
    //   title: 'Career Guidance',
    //   description: 'Align your professional path with cosmic energies for maximum success and fulfillment',
    //   icon: '🎯',
    //   route: '/career-guidance',
    //   gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3), rgba(251, 146, 60, 0.1))'
    // },
    {
      id: 'full-report',
      title: 'Download Full Report',
      description: 'Get your complete numerological analysis in a beautifully formatted PDF document',
      icon: '📄',
      route: '/download-report',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.1))'
    },
    {
      id: '1',
      title: '1 Year Cosmic Forecast',
      description: 'Detailed yearly predictions and cosmic guidance for the next 12 months of your journey',
      icon: '📅',
      route: '/1-year-report',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(139, 69, 19, 0.1))'
    },
    {
      id: '3',
      title: '3 Year Life Cycle',
      description: 'Comprehensive 3-year cosmic roadmap revealing major life transitions and opportunities',
      icon: '🌟',
      route: '/3-year-report',
      gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(147, 51, 234, 0.1))'
    },
    {
      id: '5',
      title: '5 Year Destiny Path',
      description: 'Long-term cosmic blueprint covering five years of personal and spiritual evolution',
      icon: '🔮',
      route: '/5-year-report',
      gradient: 'linear-gradient(135deg, rgba(219, 39, 119, 0.3), rgba(219, 39, 119, 0.1))'
    },
    {
      id: '10',
      title: '10 Year Master Plan',
      description: 'Ultimate decade-long cosmic analysis revealing your complete life transformation journey',
      icon: '👑',
      route: '/10-year-report',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(245, 158, 11, 0.1))'
    }

  ];

  constructor() {}
  
  async ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  navigateToService(requestDataType: string) {
    console.log(requestDataType);
    
    this.requestDataType.emit(requestDataType);
    // this.router.navigate([route]);

  }
}
