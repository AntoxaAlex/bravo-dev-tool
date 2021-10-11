import * as fromPage from './page.reducer'
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../../../environments/environment";
import { storeFreeze } from "ngrx-store-freeze";

export interface BravoState {
  page: fromPage.PageState
}

export const reducers:ActionReducerMap<BravoState,any> = {
  page: fromPage.reducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
