import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanglaComponent } from './bangla/bangla.component';
import { EnglishComponent } from './english/english.component';
import { SpanishComponent } from './spanish/spanish.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'english',
        component: EnglishComponent,
      },
      {
        path: 'bangla',
        component: BanglaComponent,
      },
      {
        path: 'spanish',
        component: SpanishComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguagesRoutingModule { }
