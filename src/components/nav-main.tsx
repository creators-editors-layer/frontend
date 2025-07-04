'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function NavMain({
  items
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()
  const MotionSidebarMenuButton = motion(SidebarMenuButton)

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Organisation name</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => {
          const isActive = item.url === pathname
          const classnamebutton = isActive ? 'hover:bg-transparent  ' : ''
          return (
            <div key={item.title}>
              {item.items ? (
                <Collapsible
                  asChild
                  defaultOpen={item.isActive}
                  className='group/collapsible  '
                >
                  <SidebarMenuItem className='relative'>
                    {isActive && (
                      <motion.div
                        layoutId='nav-background'
                        className='absolute inset-0 bg-primary-red-light rounded-md'
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}
                    <CollapsibleTrigger asChild>
                      <MotionSidebarMenuButton
                        className={` ${classnamebutton}cursor-pointer relative z-10`}
                        tooltip={item.title}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                      </MotionSidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map(subItem => {
                          const isSubActive = subItem.url === pathname
                          return (
                            <SidebarMenuSubItem
                              key={subItem.title}
                              className='relative'
                            >
                              {isSubActive && (
                                <motion.div
                                  layoutId='nav-background'
                                  className='absolute inset-0 bg-primary-red-light rounded-md'
                                  transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 30
                                  }}
                                />
                              )}
                              <MotionSidebarMenuButton
                                className={` ${classnamebutton}cursor-pointer relative z-10`}
                                asChild
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </MotionSidebarMenuButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem className='relative'>
                  {isActive && (
                    <motion.div
                      layoutId='nav-background'
                      className='absolute inset-0 bg-primary-red-light rounded-md'
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                  <Link href={item.url}>
                    <MotionSidebarMenuButton
                      className={`cursor-pointer  relative z-10 ${classnamebutton}`}
                      tooltip={item.title}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </MotionSidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )}
            </div>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
