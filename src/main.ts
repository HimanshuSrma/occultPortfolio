import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ServicesComponent } from './components/services.component';
import { PortfolioComponent } from './components/portfolio.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { CarouselComponent } from './components/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-carousel></app-carousel>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App);