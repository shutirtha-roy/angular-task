import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeadingComponent } from './commonCodes/heading/heading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './commonCodes/sidebar/sidebar.component';
import { FooterComponent } from './commonCodes/footer/footer.component';
import { NotfoundComponent } from './commonCodes/notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeadingComponent,
    SidebarComponent,
    FooterComponent,
    AuthComponent,
    PaymentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
