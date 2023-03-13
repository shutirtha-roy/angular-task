import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [
    UserComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
