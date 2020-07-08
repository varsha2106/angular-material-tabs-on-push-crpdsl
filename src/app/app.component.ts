import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'food', label: 'Food' }
  ];

  constructor(
    private router: Router,
  ) {
    this.navLinks = this.buildNavItems(this.router.config);
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }
}
