import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { LanguagesComponent } from './languages/languages.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    UserComponent,
    LanguagesComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
