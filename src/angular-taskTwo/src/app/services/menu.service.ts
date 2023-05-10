import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMenu } from '../data/IMenu';
import { Menu } from '../data/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() : Observable<IMenu[]>{
    return of([
      new Menu({ id: "28030dc6-e60c-4aba-ba9b-0371fdf50416", path: "home-modal", title: "home-modal"}),
      new Menu({ id: "18304846-0582-464d-82a5-ac558b272a66", path: "product-modal", title: "product-modal"}),
      new Menu({ id: "86d40c8d-6e00-484b-9a8b-114645e0a4d5", path: "image-modal", title: "image-modal"}),
      new Menu({ id: "6e48a9b1-2941-4ee6-a84f-0a1aec820b68", path: "auth-modal", title: "auth-modal"}),
      new Menu({ id: "c3e95114-0b87-42be-b80e-529e365f272e", path: "payment-modal", title: "payment-modal"}),
      new Menu({ id: "c3e95114-0b87-42be-b80e-529e365f272e", path: "contact-modal", title: "contact-modal"})
    ]);
  }
}