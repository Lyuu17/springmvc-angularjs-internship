import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GamelistComponent } from './gamelist/gamelist.component';

const routes: Routes = [
  {
    path: '',
    component: GamelistComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
