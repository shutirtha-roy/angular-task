import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie-form',
    pathMatch: 'full',
  }
  ,
  {
    path: 'movie-form',
    component: MovieFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
