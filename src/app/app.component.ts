import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'springmvc-angularjs';
  showHeader = false;

  constructor(private readonly router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showHeader = /^(\/auth\/(.)*)$/.test(event['url']) ? false : true;
      }
    });
  }
}
