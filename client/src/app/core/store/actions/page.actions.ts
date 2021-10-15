import { Action } from '@ngrx/store';
import { ePageActions } from "../../enums/page-actions";
import { ChangePageInterface, PageTypes } from "../../interfaces/pages.interface";


export class ChangePageSize implements Action {
  readonly type = ePageActions.changePageSize;
  constructor(public payload: string) {
  }
}
export class ChangePage implements Action {
  readonly type = ePageActions.changeAuthPage;
  constructor(public payload: ChangePageInterface) {
  }
}


export type PageActions = ChangePageSize | ChangePage;
