import { useTranslation } from 'react-i18next'

import logo from '@assets/logo.png'

import { NAVBAR_LINKS } from '../privateLayout/navbar/constants'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.

export function AppSidebar() {
  const { t } = useTranslation()
  return (
    <Sidebar
      collapsible="icon"
      className=" bg-white">
      <SidebarContent className="bg-white shadow-md border-r-2">
        <SidebarGroup>
          <SidebarGroupLabel className="h-fit py-2 border-b-2">
            {' '}
            <h2 className="navbar__title">
              <img
                src={logo}
                className="h-full w-40"
              />
            </h2>
          </SidebarGroupLabel>
          <SidebarGroupContent className="my-4">
            <SidebarMenu>
              {NAVBAR_LINKS.map((item) => (
                <SidebarMenuItem
                  key={item.text}
                  className="text-blue-600 hover:text-blue-700 hover:bg-purple-200 w-full">
                  <SidebarMenuButton
                    asChild
                    className="w-full">
                    <div
                      className={` ${window.location.pathname.includes(item.href) ? `border-blue-500 border-2` : ''}`}
                      key={item.href}>
                      <a
                        href={item.href}
                        className="">
                        {item.icon}
                      </a>

                      <a
                        href={item.href}
                        className=" w-full py-5">
                        {t(item.text)}
                      </a>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
