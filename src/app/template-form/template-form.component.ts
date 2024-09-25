import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  // Define a model to hold form data
  model: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  // Define a method to handle form submission
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted with data:', this.model);
  }
}
