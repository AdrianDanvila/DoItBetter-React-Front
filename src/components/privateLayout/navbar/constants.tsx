import { HandIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'

import { LinkData } from '@/components/shared/navbar/types'

export const NAVBAR_LINKS: LinkData[] = [
  {
    icon: (
      <HomeIcon
        className=""
        fontSize=""
      />
    ),
    href: '/main',
    text: 'main.navigation.home',
  },
  {
    icon: <HandIcon className="navbar__section__link-container__icon" />,
    href: '/routines',
    text: 'main.navigation.routines',
  },
  {
    icon: <PersonIcon className="navbar__section__link-container__icon" />,
    href: '/profile',
    text: 'main.navigation.profile',
  },
]
