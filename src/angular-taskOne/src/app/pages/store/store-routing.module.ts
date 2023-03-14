import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './clothing/clothing.component';
import { DigitalComponent } from './digital/digital.component';
import { HardwareComponent } from './hardware/hardware.component';

const routes: Routes = [
  {
    path: 'hardware',
    component: HardwareComponent,
  },
  {
    path: 'clothing',
    component: ClothingComponent,
  },
  {
    path: 'digital',
    component: DigitalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
