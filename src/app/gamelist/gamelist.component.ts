import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, signal } from '@angular/core';
import { IGame } from '../game';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: []
})
export class GamelistComponent implements OnInit {
  games = signal<IGame[]>([]);

  @Input() searchInput = "";

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.searchGame();
  }

  searchGame(): void {
    this.http.get<IGame[]>(`/api/v1/games/?title=${this.searchInput}`).subscribe(this.games.set);
  }
}
