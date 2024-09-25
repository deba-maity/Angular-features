import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']

})
export class AnimationComponent  {

 isShaking: boolean = false;
  isSuccess: boolean = false;

  shakeButton() {
    // Set isShaking to true to trigger the animation
    this.isShaking = true;

    // Reset isShaking to false after the animation duration (0.5s)
    setTimeout(() => {
      this.isShaking = false;
    }, 1500);
  }

  showSuccessAnimation() {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 1000); // 1 second
  }


}
