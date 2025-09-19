import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
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