import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddgameComponent } from './addgame/addgame.component';
import { GameComponent } from './game/game.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GamesRoutingModule } from './games-routing.module';


@NgModule({
  declarations: [GamelistComponent, GameComponent, AddgameComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
