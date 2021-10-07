import { Component, Input } from '@angular/core';
import { OptionState, SelectState } from "../../../interfaces/select-state.interface";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  public selectedOption:OptionState

  @Input() public selectState: SelectState

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


  public selectOption = (index:number) => {
    this.selectedOption = this.selectState.options[index]
  }

}
