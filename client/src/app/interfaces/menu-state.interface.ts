export interface MenuItem {
  link?: string,
  icon?: string,
  text: string
}

export interface MenuState {
  title: string,
  icon?: string,
  items: MenuItem[]
}
