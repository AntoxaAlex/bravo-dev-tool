import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { fromEvent, Observable } from "rxjs";

import { BravoState } from "../../../core/store/reducers";
import { selectPageState } from "../../../core/store/selectors/index.selectors";
import { PageState } from "../../../core/store/reducers/page.reducer";
import { InputComponent } from "../../../shared/components/input/input.component";
import { AppService } from "../../../core/services/app.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  public pageState$: Observable<PageState>
  public emailFormControl: FormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  public matcher:MyErrorStateMatcher = new MyErrorStateMatcher();

  @ViewChild(InputComponent) public inputComponent: InputComponent

  constructor( private store$: Store<BravoState>, private appService: AppService) { }

  ngOnInit(): void {
    this.pageState$ = this.store$.pipe(select(selectPageState));
  }

  ngAfterViewInit() {
    fromEvent(this.inputComponent.inputElement.nativeElement,'focus').subscribe(()=>{
      const pageName = 'loginPage'
      const propName = 'inputState'
      const name = 'state'
      const value = 'active'
      this.appService.changePageState(this.inputComponent.page,pageName,propName,null,name,value)
    })
    fromEvent(this.inputComponent.inputElement.nativeElement,'blur').subscribe(()=>{
      const pageName = 'loginPage'
      const propName = 'inputState'
      const name = 'state'
      const value = !this.emailFormControl.hasError('email') && !this.emailFormControl.hasError('required') ? 'success' : 'default'
      this.appService.changePageState(this.inputComponent.page,pageName,propName,null,name,value)

    })
  }

  public validateInput(isValid:boolean): void{
    const pageName = 'loginPage'
    const propName = 'inputState'
    const stateName = 'state'
    const stateValue = isValid ? 'success' : 'error'
    this.appService.changePageState(this.inputComponent.page,pageName,propName,null,stateName,stateValue)

    const btnPropName = 'submitButtonState'
    const btnName = 'disabled'
    this.appService.changePageState(this.inputComponent.page,pageName,btnPropName,null,btnName,!isValid)
  }

}
