import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SubCategoryOneComponent } from './sub-category-one/sub-category-one.component';
import { SubCategoryTwoComponent } from './sub-category-two/sub-category-two.component';


@NgModule({
  declarations: [
    SubCategoryOneComponent,
    SubCategoryTwoComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
