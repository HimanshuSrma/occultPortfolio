import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Ready to transform your space? Let's discuss your Vastu needs and create a harmonious environment
        </p>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>himmanshusharma45&#64;gmail.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                  <h4>Office Address</h4>
                  <p>123 Vastu Bhawan<br>
                     Sector 21, Noida<br>
                     Uttar Pradesh - 201301</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🕐</div>
                <div class="contact-details">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div class="consultation-types">
              <h4>Consultation Options</h4>
              <div class="consultation-options">
                <div class="option">
                  <span class="option-icon">🏠</span>
                  <span>Site Visit</span>
                </div>
                <div class="option">
                  <span class="option-icon">💻</span>
                  <span>Online Consultation</span>
                </div>
                <div class="option">
                  <span class="option-icon">📞</span>
                  <span>Phone Consultation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h3>Book Your Consultation</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    [(ngModel)]="formData.firstName"
                    required
                    #firstName="ngModel"
                  >
                  <span class="error" *ngIf="firstName.invalid && firstName.touched">
                    First name is required
                  </span>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    [(ngModel)]="formData.lastName"
                    required
                    #lastName="ngModel"
                  >
                  <span class="error" *ngIf="lastName.invalid && lastName.touched">
                    Last name is required
                  </span>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    #email="ngModel"
                  >
                  <span class="error" *ngIf="email.invalid && email.touched">
                    Valid email is required
                  </span>
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    [(ngModel)]="formData.phone"
                    required
                    #phone="ngModel"
                  >
                  <span class="error" *ngIf="phone.invalid && phone.touched">
                    Phone number is required
                  </span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="serviceType">Service Type *</label>
                <select 
                  id="serviceType" 
                  name="serviceType"
                  [(ngModel)]="formData.serviceType"
                  required
                  #serviceType="ngModel"
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Vastu</option>
                  <option value="commercial">Commercial Vastu</option>
                  <option value="construction">Construction Guidance</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <span class="error" *ngIf="serviceType.invalid && serviceType.touched">
                  Please select a service type
                </span>
              </div>
              
              <div class="form-group">
                <label for="consultationType">Consultation Type *</label>
                <select 
                  id="consultationType" 
                  name="consultationType"
                  [(ngModel)]="formData.consultationType"
                  required
                  #consultationType="ngModel"
                >
                  <option value="">Select Consultation Type</option>
                  <option value="site-visit">Site Visit</option>
                  <option value="online">Online Consultation</option>
                  <option value="phone">Phone Consultation</option>
                </select>
                <span class="error" *ngIf="consultationType.invalid && consultationType.touched">
                  Please select consultation type
                </span>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="5"
                  placeholder="Please describe your requirements, property details, or any specific concerns..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary submit-btn"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Book Consultation' }}
              </button>
              
              <div class="form-note">
                <p>* Required fields</p>
                <p>We'll respond within 24 hours to confirm your consultation.</p>
              </div>
            </form>
          </div>
        </div>
        
        <div class="map-section">
          <h3>Find Our Office</h3>
          <div class="map-placeholder">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Office Location Map">
            <div class="map-overlay">
              <div class="map-info">
                <h4>Our Office Location</h4>
                <p>123 Vastu Bhawan, Sector 21, Noida</p>
                <a href="#" class="btn btn-outline">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--white);
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 64px;
      margin-bottom: 80px;
    }
    
    .contact-info h3 {
      color: var(--deep-blue);
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 32px;
    }
    
    .contact-items {
      margin-bottom: 40px;
    }
    
    .contact-item {
      display: flex;
      align-items: start;
      gap: 16px;
      margin-bottom: 32px;
    }
    
    .contact-icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      background: var(--light-gray);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .contact-details h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .contact-details p {
      color: var(--dark-gray);
      line-height: 1.5;
      margin-bottom: 4px;
    }
    
    .consultation-types h4 {
      color: var(--deep-blue);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .consultation-options {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    
    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--light-gray);
      padding: 12px 16px;
      border-radius: 20px;
      font-size: 0.875rem;
      color: var(--dark-gray);
    }
    
    .option-icon {
      font-size: 1rem;
    }
    
    .contact-form-container {
      background: var(--light-gray);
      padding: 40px;
      border-radius: 16px;
      box-shadow: var(--shadow);
    }
    
    .contact-form h3 {
      color: var(--deep-blue);
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 32px;
      text-align: center;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    .form-group label {
      display: block;
      color: var(--deep-blue);
      font-weight: 500;
      margin-bottom: 8px;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: var(--white);
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-gold);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .error {
      color: #dc2626;
      font-size: 0.875rem;
      margin-top: 4px;
      display: block;
    }
    
    .submit-btn {
      width: 100%;
      font-size: 1.125rem;
      padding: 16px;
      margin-bottom: 16px;
    }
    
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .form-note {
      text-align: center;
      color: var(--dark-gray);
      font-size: 0.875rem;
    }
    
    .form-note p {
      margin-bottom: 4px;
    }
    
    .map-section h3 {
      text-align: center;
      color: var(--deep-blue);
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 32px;
    }
    
    .map-placeholder {
      position: relative;
      height: 400px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }
    
    .map-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .map-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(30, 58, 138, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .map-placeholder:hover .map-overlay {
      opacity: 1;
    }
    
    .map-info {
      text-align: center;
      color: var(--white);
    }
    
    .map-info h4 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .map-info p {
      margin-bottom: 16px;
      font-size: 1.125rem;
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .contact-form-container {
        padding: 24px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .consultation-options {
        flex-direction: column;
      }
      
      .option {
        justify-content: center;
      }
    }
  `]
})
export class ContactComponent {
  isSubmitting = false;
  
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    consultationType: '',
    message: ''
  };

  onSubmit() {
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your consultation request! We will contact you within 24 hours.');
      this.resetForm();
      this.isSubmitting = false;
    }, 2000);
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      consultationType: '',
      message: ''
    };
  }
}