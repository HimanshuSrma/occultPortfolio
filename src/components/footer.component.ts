import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <h3>Himmanshu Sharma</h3>
              <p>Certified Vastu Consultant</p>
            </div>
            <p class="footer-description">
              Transforming spaces with ancient wisdom and modern understanding. 
              Creating harmonious environments that promote prosperity, health, and happiness.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Residential Vastu</a></li>
              <li><a href="#services">Commercial Vastu</a></li>
              <li><a href="#services">Construction Guidance</a></li>
              <li><a href="#services">Online Consultation</a></li>
              <li><a href="#services">Vastu Remedies</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p>📞 +91 98765 43210</p>
              <p>📧 himmanshusharma45&#64;gmail.com</p>
              <p>📍 123 Vastu Bhawan<br>Sector 21, Noida<br>UP - 201301</p>
            </div>
            <div class="certifications">
              <h5>Certifications</h5>
              <p>✓ Certified Vastu Consultant</p>
              <p>✓ 8+ Years Experience</p>
              <p>✓ 500+ Happy Clients</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2025 Himmanshu Sharma - Vastu Consultant. All rights reserved.</p>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--deep-blue);
      color: var(--white);
      padding: 60px 0 0;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 48px;
      margin-bottom: 40px;
    }
    
    .footer-section h3 {
      color: var(--primary-gold);
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .footer-section h4 {
      color: var(--primary-gold);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    .footer-section h5 {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    
    .footer-logo p {
      color: var(--primary-gold);
      font-size: 0.875rem;
      margin-bottom: 16px;
    }
    
    .footer-description {
      line-height: 1.6;
      margin-bottom: 24px;
      color: #CBD5E1;
    }
    
    .social-links {
      display: flex;
      gap: 16px;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(212, 175, 55, 0.1);
      border-radius: 8px;
      font-size: 1.25rem;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    
    .social-links a:hover {
      background: var(--primary-gold);
      transform: translateY(-2px);
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section li {
      margin-bottom: 12px;
    }
    
    .footer-section a {
      color: #CBD5E1;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-section a:hover {
      color: var(--primary-gold);
    }
    
    .contact-info p {
      color: #CBD5E1;
      margin-bottom: 12px;
      line-height: 1.5;
    }
    
    .certifications p {
      color: var(--primary-green);
      margin-bottom: 8px;
      font-size: 0.875rem;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 24px 0;
    }
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .footer-bottom p {
      color: #CBD5E1;
      font-size: 0.875rem;
    }
    
    .footer-links {
      display: flex;
      gap: 24px;
    }
    
    .footer-links a {
      color: #CBD5E1;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: var(--primary-gold);
    }
    
    @media (max-width: 768px) {
      .footer {
        padding: 40px 0 0;
      }
      
      .footer-content {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      
      .footer-bottom-content {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
      
      .footer-links {
        justify-content: center;
      }
      
      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}