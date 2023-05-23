import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IGame {
  id: number;
  title: string;
  description: string;
  steamId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'springmvc-angularjs';
  games: IGame[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IGame[]>(`/api/v1/games/`).subscribe(data => this.games = data);
  }
}
