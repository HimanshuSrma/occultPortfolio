import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <section class="legal-page">
      <div class="container">
        <div class="legal-header">
          <h1>Terms & Conditions</h1>
          <p class="last-updated">Last updated: January 2025</p>
        </div>
        
        <div class="legal-content">
          <div class="wrapper">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Himmanshu Sharma's Vastu, Numerology, and Astrology consultancy services. 
              These Terms and Conditions ("Terms") govern your use of our services and website. 
              By engaging our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div class="wrapper">
            <h2>2. Services Offered</h2>
            <p>We provide the following consultancy services:</p>
            <ul>
              <li>Vastu Shastra consultation for residential and commercial properties</li>
              <li>Numerology readings and life path analysis</li>
              <li>Vedic Astrology consultations and predictions</li>
              <li>Online and in-person consultations</li>
              <li>Written reports and remedial solutions</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>3. Consultation Process</h2>
            <h3>3.1 Booking</h3>
            <p>
              Consultations can be booked through our website, phone, or email. 
              A booking confirmation will be sent upon successful scheduling.
            </p>
            
            <h3>3.2 Payment</h3>
            <p>
              Payment is required in advance for all consultations. We accept cash, 
              bank transfers, and digital payments. Prices are subject to change without notice.
            </p>
            
            <h3>3.3 Cancellation</h3>
            <p>
              Cancellations must be made at least 24 hours before the scheduled consultation. 
              Late cancellations may incur a 50% charge. No-shows will be charged the full amount.
            </p>
          </div>

          <div class="wrapper">
            <h2>4. Scope of Services</h2>
            <p>
              Our services are based on ancient Indian sciences and traditional knowledge systems. 
              While we strive to provide accurate guidance, results may vary based on individual 
              circumstances and implementation of recommendations.
            </p>
          </div>

          <div class="wrapper">
            <h2>5. Limitations and Disclaimers</h2>
            <ul>
              <li>Our services are for guidance purposes only and should not replace professional medical, legal, or financial advice</li>
              <li>We do not guarantee specific outcomes or results from our consultations</li>
              <li>Clients are responsible for their own decisions and actions based on our guidance</li>
              <li>We are not liable for any direct or indirect consequences of implementing our recommendations</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>6. Confidentiality</h2>
            <p>
              All information shared during consultations is treated as confidential. 
              We do not share client information with third parties without explicit consent, 
              except as required by law.
            </p>
          </div>

          <div class="wrapper">
            <h2>7. Intellectual Property</h2>
            <p>
              All content, reports, and materials provided during consultations remain our 
              intellectual property. Clients may use the information for personal purposes 
              but may not reproduce or distribute it commercially.
            </p>
          </div>

          <div class="wrapper">
            <h2>8. Refund Policy</h2>
            <p>
              Refunds are considered on a case-by-case basis. Generally, refunds are not 
              provided once a consultation has been completed. In case of service issues, 
              we may offer a re-consultation or partial refund at our discretion.
            </p>
          </div>

          <div class="wrapper">
            <h2>9. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Updated Terms will 
              be posted on our website, and continued use of our services constitutes 
              acceptance of the modified Terms.
            </p>
          </div>

          <div class="wrapper">
            <h2>10. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <div class="contact-info">
              <p>📧 Email: himmanshusharma45&#64;gmail.com</p>
              <p>📞 Phone: +91 78359 12569</p>
              <p>📍Nobel Enclave, Maruti Udyog, Sector 18, Gurugram, Haryana 122015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .legal-page {
      padding: 120px 0 80px;
      background: var(--white);
      min-height: 100vh;
    }
    
    .legal-header {
      text-align: center;
      margin-bottom: 48px;
    }
    
    .legal-header h1 {
      font-size: 2.5rem;
      color: var(--deep-blue);
      font-weight: 700;
      margin-bottom: 16px;
    }
    
    .last-updated {
      color: var(--dark-gray);
      font-size: 1rem;
    }
    
    .legal-content {
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    .wrapper {
      margin-bottom: 40px;
    }
    
    .wrapper h2 {
      color: var(--deep-blue);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 16px;
      border-bottom: 2px solid var(--primary-gold);
      padding-bottom: 8px;
    }
    
    .wrapper h3 {
      color: var(--deep-blue);
      font-size: 1.25rem;
      font-weight: 600;
      margin: 24px 0 12px 0;
    }
    
    .wrapper p {
      color: var(--dark-gray);
      margin-bottom: 16px;
    }
    
    .wrapper ul {
      color: var(--dark-gray);
      margin-bottom: 16px;
      padding-left: 24px;
    }
    
    .wrapper li {
      margin-bottom: 8px;
    }
    
    .contact-info {
      background: var(--light-gray);
      padding: 24px;
      border-radius: 12px;
      margin-top: 16px;
    }
    
    .contact-info p {
      margin-bottom: 8px;
      color: var(--deep-blue);
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .legal-page {
        padding: 100px 0 60px;
      }
      
      .legal-header h1 {
        font-size: 2rem;
      }
      
      .legal-content {
        padding: 0 16px;
      }
    }
  `]
})
export class TermsComponent {}