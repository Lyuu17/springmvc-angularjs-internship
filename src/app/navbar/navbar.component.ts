import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private readonly authenticateService: AuthenticateService) { }

  isAuth() {
    return this.authenticateService.isAuth();
  }

}
