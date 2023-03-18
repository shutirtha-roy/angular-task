import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';


@NgModule({
  declarations: [
    
    ProductModalComponent,
    ImageModalComponent,
    AuthModalComponent,
    PaymentModalComponent,
    ContactModalComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
