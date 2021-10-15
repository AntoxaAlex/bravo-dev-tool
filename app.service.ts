import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Location } from "@angular/common";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { BravoState } from "../store/reducers";
import { ChangePage, ChangePageSize } from "../store/actions/page.actions";


@Injectable({
  providedIn: 'any'
})
export class AppService {

  constructor(private breakpointObserver$: BreakpointObserver, private location: Location, private store$: Store<BravoState>) { }

  public displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  public getPageType(): string{
    const url = this.location.path()
    return  url === '/auth/login' || url === 'auth/email' ? 'auth' : 'general'
  }

  public configurePageSize(destroy$: Subject<void>): void{
    this.breakpointObserver$.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(destroy$)).subscribe(data => {
      for (const query of Object.keys(data.breakpoints)) {
        if (data.breakpoints[query]) {
          const value = this.displayNameMap.get(query)!
          this.store$.dispatch(new ChangePageSize(value))
        }
      }
    });
  }

  public changePageState(page: any, pageName: string, propName: string, index: number | null, name: string, value: any): void{
    let newPage = {...page}
    for(let prop in newPage){
      if(prop === propName){
        if(newPage[prop].length && index){
          let newArray = [...newPage[prop]]
          let newArrayItem = {...newArray[index],[name]:value}
          console.log(newPage)
        }else{
          const newInputState = {...newPage[prop],[name]:value}
          newPage = {...newPage,[propName]:newInputState}
          this.store$.dispatch(new ChangePage({name:pageName,value:newPage}))
        }
      }else if(typeof page[propName] === 'object'){
        this.changePageState(newPage[propName], pageName, propName, index, name, value)
      }
    }
  }
}
