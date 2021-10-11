import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { InputState } from "../../../core/interfaces/input-state.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor{

  @Input() public inputState: InputState

  constructor() { }

  public onChange: any = () => {};
  public onTouch: any = () => {};
  public val = ''; // this is the updated value that the class accesses
  set value(val: string) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }
  // this method sets the value programmatically
  public writeValue(value: any): void {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
