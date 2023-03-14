import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { DueComponent } from './due/due.component';

const routes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'due',
    component: DueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
