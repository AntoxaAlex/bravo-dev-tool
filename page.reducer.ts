import { ePageActions } from "../../enums/page-actions";
import { PageActions } from "../actions/page.actions";
import { LoginPage } from "../../interfaces/pages.interface";

export interface PageState {
  pageSize: string | null,
  loginPage: LoginPage,
  loading: boolean,
  loaded: boolean
}

export const initialState: PageState = {
  pageSize: null,
  loginPage:{
    inputState:{
      type: 'email',
      label: 'Your email',
      state: 'default',
      rightIcon: 'done',
      leftIcon: 'error',
      message:{
        text: 'Enter the email you signed up with to receive your login code',
        position: 'center'
      }
    },
    submitButtonState:{
      type: 'raised',
      color: 'primary',
      content: 'Log In',
      width: '100%',
      height: '50px',
      disabled: true
    }
  },
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: PageActions): PageState {
  switch (action.type) {
    case ePageActions.changePageSize:
      return {
        ...state,
        pageSize: action.payload
      }
    case ePageActions.changeAuthPage:
      const { payload } = action
      const { name,value } = payload
      return {
        ...state,
        [name]:value
      }
    default:
      return state;
  }
}
