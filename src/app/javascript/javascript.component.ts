import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {

   samplearr = [1,2,3,4,5,6,7];
   samplearr1 = [1,2,3,4,5,6,7];
   samplearr2 = [1,2,3,4,5,6,7];
   samplearr3 = [1,2,3,4,5,6,7];
   samplearr4 = [1,2,3,4,5,6,7];
   samplearr5 = [1,2,3,4,5,6,7];
   samplearr6 = [1,2,3,4,5,6,7];

   samplearr7 = [1,2,3,4,5,6,7];
   samplearr8 = [1,2,3,4,5,6,7];
   samplearr9 = [1,2,3,4,5,6,7];

   evenNumbers: number[];
   squareNumbers: number[];
   spliceResult: number[];
   sortedArray: number[];
   str ;

constructor(){
  this.evenNumbers = this.samplearr3.filter(num => num % 2 === 0);
  this.squareNumbers = this.samplearr5.map(num => num * num)
   this.sortedArray = this.samplearr7.slice().sort((a, b) => b - a);
  this.str = this.samplearr8.toString();
  this.spliceResult = this.samplearr1.splice(2, 2);

  console.log("Js-array");

}
}
