export interface NavItem {
  text: string,
  color: 'success' | 'primary' | 'accent' | 'warn' | 'basic' | 'link' | 'disabled'
  icon?: string,
  link?: string
}
