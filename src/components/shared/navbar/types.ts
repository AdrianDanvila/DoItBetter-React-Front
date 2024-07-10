export interface NavBarProps {
  navClassName?: string
  linkClassName?: string
  title?: string
  data: LinkData[]
}

export interface LinkData {
  icon?: JSX.Element
  href: string
  text: string
}
