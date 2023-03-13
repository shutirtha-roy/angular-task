import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'languages',
        loadChildren: () =>
          import('./languages/languages.module').then((m) => m.LanguagesModule),
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'modal',
        component: ModalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
