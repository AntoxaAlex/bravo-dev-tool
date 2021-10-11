import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Location } from "@angular/common";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { BravoState } from "../store/reducers";
import { ChangePageSize } from "../store/actions/page.actions";
import { selectPageState } from "../store/selectors/index.selectors";
import { PageState } from "../store/reducers/page.reducer";



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
          const payload = this.displayNameMap.get(query)!
          this.store$.dispatch(new ChangePageSize(payload))
        }
      }
    });
  }
}
