import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { AppService } from "../../services/app.service";
import { select, Store } from "@ngrx/store";
import { BravoState } from "../../store/reducers";
import { selectPageState } from "../../store/selectors/index.selectors";
import { PageState } from "../../store/reducers/page.reducer";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy{

  public navbarType: string;
  @Input() public pageSize: string
  private destroy$ = new Subject<void>();

  constructor(private appService: AppService, private store$: Store<BravoState>) { }

  ngOnInit() {
    this.navbarType = this.appService.getPageType()

  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
