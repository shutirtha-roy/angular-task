import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryOneComponent } from './sub-category-one/sub-category-one.component';
import { SubCategoryTwoComponent } from './sub-category-two/sub-category-two.component';

const routes: Routes = [
  {
    path: 'sub-category-one',
    component: SubCategoryOneComponent,
  },
  {
    path: 'sub-category-two',
    component: SubCategoryTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
