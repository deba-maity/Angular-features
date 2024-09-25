// app.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  onModal(): void {
    this.router.navigate(['/table']); // Navigate to the desired route
    this.closeSidenav.emit();
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
