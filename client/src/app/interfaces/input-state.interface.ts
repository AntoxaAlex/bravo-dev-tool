export interface InputState {
  type: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week',
  label: string,
  state: 'default' | 'active' | 'success' | 'error'
  leftIcon?: string,
  rightIcon?: string
  message?: {
    text: string,
    position: string
  }
}
