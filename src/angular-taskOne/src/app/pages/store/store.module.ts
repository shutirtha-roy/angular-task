import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { HardwareComponent } from './hardware/hardware.component';
import { ClothingComponent } from './clothing/clothing.component';
import { DigitalComponent } from './digital/digital.component';


@NgModule({
  declarations: [
    HardwareComponent,
    ClothingComponent,
    DigitalComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
