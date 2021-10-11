import { Action } from '@ngrx/store';
import { ePageActions } from "../../enums/page-actions";


export class ChangePageSize implements Action {
  readonly type = ePageActions.changePageSize;
  constructor(public payload: string) {
  }
}


export type PageActions = ChangePageSize;
