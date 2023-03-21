import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }