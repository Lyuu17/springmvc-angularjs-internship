import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly authenticateService: AuthenticateService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.authenticateService.logout()
      .then(() => this.router.navigateByUrl('/'))
      .catch(() => console.log('logout error'));
  }
}
