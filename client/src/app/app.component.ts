import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";

import { AppService } from "./core/services/app.service";
import { BravoState } from "./core/store/reducers";
import { selectPageState } from "./core/store/selectors/index.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{

  public pageType: string
  public pageState$: Observable<any>
  private destroy$ = new Subject<void>();

  constructor(private appService: AppService, private store$: Store<BravoState>) {}

  ngOnInit() {
    this.pageType = this.appService.getPageType();
    this.appService.configurePageSize(this.destroy$)
    this.pageState$ = this.store$.pipe(select(selectPageState));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
