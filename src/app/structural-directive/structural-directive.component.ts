import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

// ngIf
showContent: boolean = true;

// ngFor
numbers: number[] = [1, 2, 3, 4, 5];

// ngSwitch
selectedOption: string = 'Option1';


}
