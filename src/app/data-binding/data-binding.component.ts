import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  // Interpolation
  interpolationExample: string = 'Interpolation Example';

  // Property Binding
  isDisabled: boolean = true; // Initially set to true

  // Event Binding
  buttonClickMessage: string = '';

  // Two-Way Binding
  inputText: string = 'Initial value';

  // ngClass
  isSpecial: boolean = false;

  // ngStyle
  customStyles = {
    'font-weight': 'bold',
    color: 'blue',
  };

  constructor() {}

  // Method to handle the click event
  onClick(): void {
    this.buttonClickMessage = 'Button clicked!';
    this.isDisabled = !this.isDisabled; // Toggle isDisabled value
  }
}
