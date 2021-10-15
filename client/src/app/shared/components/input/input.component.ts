import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl } from "@angular/forms";

import { LoginPage } from "../../../core/interfaces/pages.interface";
import { MyErrorStateMatcher } from "../../../auth/components/login/login.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor,AfterViewChecked{
  @Input() public page: LoginPage
  @Input() public formControl: FormControl
  @Input() public matcher: MyErrorStateMatcher
  @Output() public inputIsValid = new EventEmitter<boolean>()
  @ViewChild('inputElement') public inputElement: ElementRef

  constructor() { }

  ngAfterViewChecked() {
    if(!this.formControl.hasError('email') && !this.formControl.hasError('required')){
      this.inputIsValid.emit(true)
    }else{
      this.inputIsValid.emit(false)
    }
  }

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
