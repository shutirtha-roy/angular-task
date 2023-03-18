import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() : Observable<string[]>{
    return of([
      'home-modal',
      'product-modal',
      'image-modal',
      'auth-modal',
      'payment-modal',
      'contact-modal'
    ]);
  }
}