import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from '../game';
import { SteamGameDetails } from '../steamgamedetails';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: []
})
export class GameComponent implements OnInit {
  game: IGame = {
    id: 0,
    title: '',
    description: '',
    steamId: 0
  };

  screenshotUrl: string = '';

  constructor(
    private readonly http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = 0;
    this.route.paramMap.subscribe(params => {
      this.http.get<IGame>(`/api/v1/games/?id=${params.get('id')}`).subscribe(data => {
        this.game = data;

        this.http.get<SteamGameDetails>(`/api/v1/games/steam/details/${this.game.steamId}`).subscribe(steamDetails => this.screenshotUrl = steamDetails.screenshotUrl);
      });
    })
  }
}
