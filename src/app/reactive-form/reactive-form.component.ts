import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  // Define a FormGroup to hold form controls
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({});
  }

  ngOnInit() {
    // Initialize the reactive form with form controls and validators
    this.reactiveForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      gender: ['male', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  // Convenience getter for easy access to form fields
  get form() {
    return this.reactiveForm.controls;
  }

  // Method to handle form submission
  onSubmit() {
    // Stop here if form is invalid
    if (this.reactiveForm.invalid) {
      return;
    }

    // Form is valid, proceed with submission
    console.log('Form submitted with data:', this.reactiveForm.value);
  }
}
