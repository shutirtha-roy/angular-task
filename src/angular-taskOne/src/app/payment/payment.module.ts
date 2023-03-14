import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { BillComponent } from './bill/bill.component';
import { DueComponent } from './due/due.component';


@NgModule({
  declarations: [
    BillComponent,
    DueComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
