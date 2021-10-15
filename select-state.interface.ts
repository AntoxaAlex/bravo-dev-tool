export interface OptionState {
  icon?: string,
  value: string
}

export interface SelectState {
  label: string,
  state: 'default' | 'active' | 'success' | 'error',
  multiple: boolean,
  rightIcon?: string,
  options: OptionState[]
}
