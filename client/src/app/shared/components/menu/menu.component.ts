import { Component, Input, OnInit } from '@angular/core';
import { MenuState } from "../../../core/interfaces/menu-state.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() public menuState: MenuState

  constructor() { }

}
