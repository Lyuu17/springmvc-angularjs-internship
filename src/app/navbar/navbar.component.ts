import { Component, signal } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isAuth = signal<boolean>(false);

  constructor(private readonly authService: AuthenticationService) {
    this.authService.getAuthStatus().subscribe((value) => this.isAuth.set(value));
  }

}
