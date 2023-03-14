import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { LanguagesComponent } from './languages/languages.component';
import { ModalComponent } from './modal/modal.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    UserComponent,
    LanguagesComponent,
    ModalComponent,
    ProductComponent,
    StoreComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
