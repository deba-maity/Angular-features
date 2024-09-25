import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private router: Router) {}

  onCancel(): void {
    this.router.navigate(['/js']); // Navigate to the desired route
    this.closeSidenav.emit();
    // this.closeSidenav.toggle()
  }
  onPipe(): void {
    this.router.navigate(['/pipe']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onArray(): void {
    this.router.navigate(['/js-string']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onData(): void {
    this.router.navigate(['/data-binding']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onDirective(): void {
    this.router.navigate(['/structural-directive']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onTemplate(): void {
    this.router.navigate(['/template']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onReactive(): void {
    this.router.navigate(['/reactive']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  onParent(): void {
    this.router.navigate(['/parent']); // Navigate to the desired route
    this.closeSidenav.emit();
  }
  onChild(): void {
    this.router.navigate(['/child']); // Navigate to the desired route
    this.closeSidenav.emit();
  }
  onHttp(): void {
    this.router.navigate(['/http']); // Navigate to the desired route
    this.closeSidenav.emit();
  }
  onAnimation(): void {
    this.router.navigate(['/animation']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  triggerFunAnimation() {
    const animationContainer = document.getElementById(
      'flowerAnimationContainer'
    );
    if (animationContainer) {
      animationContainer.style.display = 'block';

      // Reset animation by re-triggering the CSS animation
      animationContainer.querySelectorAll('.particle').forEach((particle) => {
        const htmlParticle = particle as HTMLElement; // Cast to HTMLElement
        htmlParticle.style.animation = 'none';
        // Force reflow to restart animation
        htmlParticle.offsetHeight; // Triggers a reflow
        htmlParticle.style.animation = '';
      });

      setTimeout(() => {
        animationContainer.style.display = 'none';
      }, 1500); // Duration of the animation
    }
  }
}
