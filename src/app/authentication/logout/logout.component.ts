import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly authenticateService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.authenticateService.logout()
      .then(() => this.router.navigateByUrl('/'))
      .catch(() => console.log('logout error'));
  }
}
