import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html'
})
export class AddgameComponent {

  titleInput = new FormControl('');
  descriptionInput = new FormControl('');
  steamIdInput = new FormControl(0);

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  submit(): void {
    this.http.post(`/api/v1/games/`, {
      title: 'title',
      description: 'description',
      steamId: 0
    }).subscribe(() => this.router.navigateByUrl(`/`));
  }
}
