import { Component, Input, OnInit } from '@angular/core';
import { ToasterState } from "../../../core/interfaces/toaster-state.interface";

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {

  @Input() public toasterState: ToasterState

  constructor() { }

}
