import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  services = [
    {
      icon: "🏠",
      title: "Residential Vastu",
      description:
        "Complete Vastu analysis and solutions for all types of residential complexes.",
      features: [
        "Site analysis and plot selection",
        "Room placement optimization",
        "Energy flow enhancement",
        "Remedial solutions",
        "Interior layout guidance",
      ],
      price: "Starting ₹15,000",
    },
    {
      icon: "🏢",
      title: "Commercial Vastu",
      description:
        "Vastu consultation for offices, shops, factories, and commercial establishments.",
      features: [
        "Business growth optimization",
        "Workspace arrangement",
        "Cash flow enhancement",
        "Employee productivity boost",
        "Customer attraction solutions",
      ],
      price: "Starting ₹25,000",
    },
    {
      icon: "🏗️",
      title: "Construction Guidance",
      description:
        "Step-by-step Vastu guidance during construction phase for optimal results.",
      features: [
        "Foundation ceremony timing",
        "Construction phase guidance",
        "Material selection advice",
        "Griha pravesh consultation",
        "Progress monitoring",
      ],
      price: "Starting ₹35,000",
    },
  ];

  additionalServices = [
    {
      icon: "🔢",
      title: "Name Numerology",
      description: "Optimizing names for positive vibrations and outcomes",
      route: "/reports",
    },
    {
      icon: "📱",
      title: "Mobile Numerology",
      description: "Analysis of mobile numbers for better energy alignment",
      route: "/reports",
    },
    {
      icon: "⏰",
      title: "Time-Based Guidance",
      description: "Selecting auspicious timings for important events",
      route: "/reports",
    },
    {
      icon: "📥",
      title: "Download Full Report",
      description: "Comprehensive report covering detailed numerology insights",
      route: "/reports",
    },
    {
      icon: "🌠",
      title: "1 Year Cosmic Forecast",
      description: "Numerology predictions and guidance for the coming year",
      route: "/reports",
    },
    {
      icon: "📅",
      title: "3 Year Life Cycle",
      description: "Analysis of three-year numerology cycles for planning",
      route: "/reports",
    },
    {
      icon: "🔮",
      title: "5 Year Destiny Path",
      description: "Insights into destiny patterns across a five-year span",
      route: "/reports",
    },
    {
      icon: "📞",
      title: "Phone Consultation",
      description: "Expert advice over the phone for all your queries",
      // description: "Expert advice over phone for quick Vastu queries",
      route: "/home#contact",
    },
    {
      icon: "💻",
      title: "Online Analysis",
      description: "Remote Vastu analysis using floor plans and photos",
      route: "/home#contact",
    },
    {
      icon: "📐",
      title: "Architectural Guidance",
      description:
        "Advice during construction or renovation for Vastu alignment",
      route: "/home#contact",
    },
    // {
    //   icon: "🏠",
    //   title: "On-Site Visit",
    //   description: "Personal visit for in-depth Vastu assessment of property",
    //   route: "/home#contact",
    // },
    {
      icon: "🔄",
      title: "Follow-up Support",
      description: "Post-consultation support for implementation guidance",
      route: "/home#contact",
    },
    // {
    //   icon: '📋',
    //   title: 'Detailed Reports',
    //   description: 'Comprehensive written reports with recommendations'
    // },
    // {
    //   icon: '🎯',
    //   title: 'Custom Solutions',
    //   description: 'Tailored Vastu remedies for specific problems'
    // },
    // {
    //   icon: "📚",
    //   title: "Educational Workshops",
    //   description: "Group sessions and workshops on Vastu principles",
    //   route: "/home#contact",
    // },
    {
      icon: "🧘",
      title: "Energy Balancing",
      description: "Remedies to harmonize energy flow in home or office",
      route: "/home#contact",
    },
    {
      icon: "🌿",
      title: "Remedy Kits",
      description: "Ready-to-use kits with essential Vastu remedies",
      route: "/home#contact",
    },
    // {
    //   icon: '👨‍👩‍👧‍👦',
    //   title: 'Family Consultations',
    //   description: 'Guidance tailored for overall family well-being and harmony'
    // },
    // {
    //   icon: "🏢",
    //   title: "Business Vastu",
    //   description:
    //     "Specialized consultation for offices, shops, and industries",
    //   route: "/home#contact",
    // },
    // {
    //   icon: "🤝",
    //   title: "Personal Consultation",
    //   description: "One-to-one personalized numerology consultation session",
    //   route: "/home#contact",
    // },
    // {
    //   icon: '🗂️',
    //   title: 'Loshu Grid Analysis',
    //   description: 'Ancient Chinese method to analyze birth date vibrations'
    // },
    // {
    //   icon: '🌌',
    //   title: 'Cosmic Recommendations',
    //   description: 'Customized remedies aligned with cosmic energies'
    // },
    {
      icon: "❤️",
      title: "Relationship Compatibility",
      description:
        "Compatibility analysis for love, marriage, and partnerships",
      route: "/home#contact",
    },
    {
      icon: "💼",
      title: "Business Numerology",
      description: "Numerology for business names, logos, and prosperity",
      route: "/home#contact",
    },
    {
      icon: "🚀",
      title: "Career Guidance",
      description: "Numerology-based advice for career growth and success",
      route: "/reports",
    },
    // {
    //   icon: '🏆',
    //   title: '10 Year Master Plan',
    //   description: 'Decade-long numerology roadmap for life and success'
    // }
  ];

  // additionalServices = [
  //   {
  //     icon: '📞',
  //     title: 'Phone Consultation',
  //     description: 'Expert advice over phone for quick Vastu queries'
  //   },
  //   {
  //     icon: '💻',
  //     title: 'Online Analysis',
  //     description: 'Remote Vastu analysis using floor plans and photos'
  //   },
  //   {
  //     icon: '🔄',
  //     title: 'Follow-up Support',
  //     description: 'Post-consultation support for implementation guidance'
  //   },
  //   {
  //     icon: '📋',
  //     title: 'Detailed Reports',
  //     description: 'Comprehensive written reports with recommendations'
  //   },
  //   {
  //     icon: '🎯',
  //     title: 'Custom Solutions',
  //     description: 'Tailored Vastu remedies for specific problems'
  //   },
  //   {
  //     icon: '📚',
  //     title: 'Educational Workshops',
  //     description: 'Group sessions and workshops on Vastu principles'
  //   }
  // ];
}
