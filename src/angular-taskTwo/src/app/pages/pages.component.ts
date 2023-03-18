import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { IMenu } from '../data/IMenu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  menus: IMenu[] = [];
  currentRoute!: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() : void {
    this.menuService.getMenus().subscribe((data : IMenu[]) =>
      (this.menus = data)
    );
  }
}
