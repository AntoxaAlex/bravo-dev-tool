import { ePageActions } from "../../enums/page-actions";
import { PageActions } from "../actions/page.actions";

export interface PageState {
  pageSize: string | null,
  loading: boolean,
  loaded: boolean
}

export const initialState: PageState = {
  pageSize: null,
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: PageActions): PageState {
  const { payload } = action
  switch (action.type) {
    case ePageActions.changePageSize:
      return {
        ...state,
        pageSize: payload
      }
    default:
      return state;
  }
}
