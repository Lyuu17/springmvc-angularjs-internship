import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, signal } from '@angular/core';
import { IGame } from '../game';
import { IPaginatedResult } from '../paginatedresult';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: []
})
export class GamelistComponent implements OnInit {
  games = signal<IGame[]>([]);
  pageIsLast = signal<boolean>(false);
  pageIsFirst = signal<boolean>(false);
  pageNum = 0;

  @Input() searchInput = "";

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.searchGame();
  }

  searchGame(): void {
    this.http.get<IPaginatedResult<IGame>>(`/api/v1/games/?page=${this.pageNum}&title=${this.searchInput}`).subscribe(paginatedResponse => {
      this.pageIsFirst.set(paginatedResponse.first);
      this.pageIsLast.set(paginatedResponse.last);

      this.games.set(paginatedResponse.content);
    });
  }

  prevPage(): void {
    if (this.pageNum > 0)
      this.pageNum--;

    this.searchGame();
  }

  nextPage(): void {
    if (!this.pageIsLast())
      this.pageNum++;

    this.searchGame();
  }
}
