import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamelistComponent } from './gamelist/gamelist.component';

const routes: Routes = [
  {
    path: '',
    component: GamelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
