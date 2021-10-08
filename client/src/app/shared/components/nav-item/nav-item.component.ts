import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from "../../../interfaces/nav-item.interface";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() public navItemData: NavItem

  constructor() { }


}
