import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus: string[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() : void {
    this.menuService.getMenus().subscribe((data : string[]) =>
      (this.menus = data)
    );
  }
}
