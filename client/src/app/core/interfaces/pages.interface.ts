import { InputState } from "./input-state.interface";
import { ButtonState } from "./button-state.interface";

export interface LoginPage {
  inputState: InputState,
  submitButtonState: ButtonState
}

export type PageTypes = LoginPage

export interface ChangePageInterface {
  name: string,
  value: PageTypes | string
}
