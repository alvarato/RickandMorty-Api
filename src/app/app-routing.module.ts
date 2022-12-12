import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { OpenCardComponent } from './open-card/open-card.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'characters',component: CharactersComponent},
  {path: 'openCard/:id',component: OpenCardComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
