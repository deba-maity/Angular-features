import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Inject AuthService or any service responsible for authentication
  const authService = new AuthService(); // Example: Replace with actual injection

  // Check if the user is authenticated (example logic)
  if (authService.isLoggedIn()) {
    return true; // Allow access to the route
  } else {
    // Redirect to the login page or any other route
    // Alternatively, you could navigate to an error page or display a message
    // based on your application requirements
    return false; // Deny access to the route
  }};
