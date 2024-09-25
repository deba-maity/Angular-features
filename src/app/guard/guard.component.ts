import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Simulate login process
    if (this.authService.login(this.username, this.password)) {
      // Redirect to the home page or any other protected route
      this.router.navigate(['/home']);
    } else {
      // Display error message or handle unsuccessful login
      console.log("Invalid credentials. Please try again.");
    }
  }
}
