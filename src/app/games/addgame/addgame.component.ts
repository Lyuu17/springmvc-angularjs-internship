import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html'
})
export class AddgameComponent {

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    steamId: new FormControl(0)
  });

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  submit(): void {
    this.http.post(`/api/v1/games/`, {
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      steamId: this.form.get('steamId')?.value
    }).subscribe(() => this.router.navigateByUrl(`/`));
  }
}
