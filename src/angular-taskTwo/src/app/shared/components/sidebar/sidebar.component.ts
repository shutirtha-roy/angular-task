import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMenu } from 'src/app/data/IMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @Input() menus: IMenu[] = [];
  currentRoute!: string;
  title!: string;

  constructor(private titleService: Title) { }

  onChange(title : string) {
    this.titleService.setTitle(title);
  }
}