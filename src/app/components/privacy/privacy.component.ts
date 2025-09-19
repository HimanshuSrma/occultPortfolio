import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <section class="legal-page">
      <div class="container">
        <div class="legal-header">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last updated: January 2025</p>
        </div>
        
        <div class="legal-content">
          <div class="wrapper">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how Himmanshu Sharma ("we," "our," or "us") 
              collects, uses, and protects your personal information when you use our 
              Vastu, Numerology, and Astrology consultancy services.
            </p>
          </div>

          <div class="wrapper">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Date, time, and place of birth (for astrology services)</li>
              <li>Address and property details (for Vastu consultations)</li>
              <li>Payment information and transaction details</li>
              <li>Communication preferences and consultation history</li>
            </ul>
            
            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>Providing Vastu, Numerology, and Astrology consultations</li>
              <li>Preparing personalized reports and recommendations</li>
              <li>Scheduling appointments and sending reminders</li>
              <li>Processing payments and maintaining transaction records</li>
              <li>Communicating about our services and updates</li>
              <li>Improving our services and website functionality</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>In case of business transfer or merger</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal information against unauthorized access, alteration, disclosure, 
              or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
            <h3>Security Measures Include:</h3>
            <ul>
              <li>Encrypted data transmission and storage</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information</li>
              <li>Secure payment processing systems</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services 
              and comply with legal obligations. Consultation records may be kept for up to 7 years 
              for reference purposes, after which they will be securely deleted.
            </p>
          </div>

          <div class="wrapper">
            <h2>7. Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>8. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can control 
              cookie settings through your browser preferences. Disabling cookies may affect 
              website functionality.
            </p>
            <h3>Types of Cookies We Use:</h3>
            <ul>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>

          <div class="wrapper">
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible 
              for the privacy practices of these external sites. We encourage you to review 
              their privacy policies before providing any personal information.
            </p>
          </div>

          <div class="wrapper">
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not 
              knowingly collect personal information from children. If you believe we have 
              collected information from a child, please contact us immediately.
            </p>
          </div>

          <div class="wrapper">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              any material changes by posting the updated policy on our website and updating 
              the "Last updated" date.
            </p>
          </div>

          <div class="wrapper">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
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
export class PrivacyComponent {}