export interface ButtonState {
  type: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab',
  color: 'success' | 'primary' | 'accent' | 'warn' | 'basic' | 'link' | 'disabled' | 'black',
  content: string,
  width?: string,
  height?: string,
  disabled?: boolean,
  icon?: string,
}
