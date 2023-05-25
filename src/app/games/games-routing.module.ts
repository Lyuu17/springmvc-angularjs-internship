import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgameComponent } from './addgame/addgame.component';
import { GameComponent } from './game/game.component';
import { GamelistComponent } from './gamelist/gamelist.component';

const routes: Routes = [
  {
    path: '',
    component: GamelistComponent
  },
  {
    path: 'game/add',
    component: AddgameComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
