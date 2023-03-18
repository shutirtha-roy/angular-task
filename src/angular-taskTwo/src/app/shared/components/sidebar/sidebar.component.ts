import { Component, Input } from '@angular/core';
import { IMenu } from 'src/app/data/IMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @Input() menus: IMenu[] = [];
  currentRoute!: string;

  constructor() { }

}