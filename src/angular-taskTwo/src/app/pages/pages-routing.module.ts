import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { ProductModalComponent } from './product-modal/product-modal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-modal',
    pathMatch: 'full',
  },
  {
    path: 'home-modal',
    component: HomeModalComponent
  },
  {
    path: 'product-modal',
    component: ProductModalComponent
  },
  {
    path: 'image-modal',
    component: ImageModalComponent
  },
  {
    path: 'auth-modal',
    component: AuthModalComponent
  },
  {
    path: 'payment-modal',
    component: PaymentModalComponent
  },
  {
    path: 'contact-modal',
    component: ContactModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
