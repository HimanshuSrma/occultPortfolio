
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ServicesComponent } from "../services/services.component";
import { AboutComponent } from "../about/about.component";
import { HeroComponent } from "../hero/hero.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ContactComponent, TestimonialsComponent, PortfolioComponent, ServicesComponent, AboutComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {}