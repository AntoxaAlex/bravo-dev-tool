export interface ToasterState {
  type: 'success' | 'accent' | 'error'
  title: string,
  message: string,
  optionContent?: any
}
