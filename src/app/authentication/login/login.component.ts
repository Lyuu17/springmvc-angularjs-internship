import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  invalid_credentials = false;

  constructor(
    private readonly router: Router,
    private readonly authenticateService: AuthenticationService
  ) { }

  submit(): void {
    this.authenticateService.login(this.form.get('username')?.value || '', this.form.get('password')?.value || '')
      .then(() => {
        this.router.navigateByUrl('/');
      })
      .catch(() => this.invalid_credentials = true);
  }
}
