import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";

import { AppService } from "../../services/app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy{

  public navbarType: string;
  @Input() public pageSize: string
  private destroy$ = new Subject<void>();

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.navbarType = this.appService.getPageType()

  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
