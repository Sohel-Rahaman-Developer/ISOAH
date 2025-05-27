'use client'

import * as React from "react"
import Link from "next/link"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shahraman",
    email: "you@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Lifecycle",
      url: "/admin/lifecycle",
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: BarChartIcon,
    },
    {
      title: "Projects",
      url: "/admin/projects",
      icon: FolderIcon,
    },
    {
      title: "Team",
      url: "/admin/team",
      icon: UsersIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "/admin/help",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "/admin/search",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/admin/documents/library",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "/admin/documents/reports",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      url: "/admin/documents/assistant",
      icon: FileIcon,
    },
  ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/admin/dashboard" className="inline-flex items-center gap-2">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Forensics Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}