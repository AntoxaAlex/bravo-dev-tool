import { Component, Input, OnInit } from '@angular/core';
import { ButtonState } from "../../../interfaces/button-state.interface";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() public btnState: ButtonState

  constructor() { }

  ngOnInit() {
    console.log(this.btnState)
  }

}
