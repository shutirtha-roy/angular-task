import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { EnglishComponent } from './english/english.component';
import { BanglaComponent } from './bangla/bangla.component';
import { SpanishComponent } from './spanish/spanish.component';


@NgModule({
  declarations: [
    EnglishComponent,
    BanglaComponent,
    SpanishComponent
  ],
  imports: [
    CommonModule,
    LanguagesRoutingModule
  ]
})
export class LanguagesModule { }
