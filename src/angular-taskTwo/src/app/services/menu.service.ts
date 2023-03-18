import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() : Observable<string[]>{
    return of([
      'homeModal',
      'productModal',
      'imageModal',
      'authModal',
      'paymentModal',
      'contactModal'
    ]);
  }
}