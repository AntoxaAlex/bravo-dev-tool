import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppService } from "./core/services/app.service";
import { Observable, Subject } from "rxjs";
import { BravoState } from "./core/store/reducers";
import { select, Store } from "@ngrx/store";
import { selectPageState } from "./core/store/selectors/index.selectors";
import { PageState } from "./core/store/reducers/page.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{

  public pageSize: string;
  public pageDisplay: string;
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
