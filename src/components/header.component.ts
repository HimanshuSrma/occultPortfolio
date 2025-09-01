import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class]="'header ' + (isScrolled ? 'scrolled' : '')">
      <nav class="nav">
        <div class="container">
          <div class="nav-content">
            <div class="logo">
              <h2>Himmanshu Sharma</h2>
              <span>Vastu Consultant</span>
            </div>
            
            <div class="nav-menu" [class.active]="isMobileMenuOpen">
              <a href="#home" (click)="closeMobileMenu()">Home</a>
              <a href="#about" (click)="closeMobileMenu()">About</a>
              <a href="#services" (click)="closeMobileMenu()">Services</a>
              <a href="#portfolio" (click)="closeMobileMenu()">Portfolio</a>
              <a href="#testimonials" (click)="closeMobileMenu()">Testimonials</a>
              <a href="#contact" (click)="closeMobileMenu()">Contact</a>
            </div>
            
            <button class="mobile-toggle" (click)="toggleMobileMenu()">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: var(--shadow);
    }
    
    .nav {
      padding: 16px 0;
    }
    
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo h2 {
      color: var(--deep-blue);
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0;
    }
    
    .logo span {
      color: var(--primary-gold);
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .nav-menu {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    
    .nav-menu a {
      text-decoration: none;
      color: var(--deep-blue);
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }
    
    .nav-menu a:hover {
      color: var(--primary-gold);
    }
    
    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-gold);
      transition: width 0.3s ease;
    }
    
    .nav-menu a:hover::after {
      width: 100%;
    }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      gap: 4px;
    }
    
    .mobile-toggle span {
      width: 24px;
      height: 3px;
      background: var(--deep-blue);
      transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: 24px;
        box-shadow: var(--shadow);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .mobile-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}