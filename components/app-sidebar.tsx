"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboardIcon,
  FileTextIcon,
  PlusCircleIcon,
  Edit3Icon,
  Trash2Icon,
  ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
// import { NavUser } from "./nav-user";

interface SubItem {
  title: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface Menu {
  key: string;
  title: string;
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
  children?: SubItem[];
}

const menus: Menu[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    href: "/admin/dashboard",
    Icon: LayoutDashboardIcon,
  },
  {
    key: "blogCategory",
    title: "Blog Category",
    href: "/admin/blog-categories",
    Icon: FileTextIcon,
  },
  {
    key: "courses",
    title: "Courses",
    Icon: FileTextIcon,
    children: [
      { title: "Create", href: "/admin/courses/create", Icon: PlusCircleIcon },
      { title: "Edit", href: "/admin/courses/edit", Icon: Edit3Icon },
      { title: "Delete", href: "/admin/courses/delete", Icon: Trash2Icon },
    ],
  },
];

function SidebarCollapsibleMenu({
  menu,
  isOpen,
  onToggle,
}: {
  menu: Menu;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <SidebarMenuItem>
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className={`flex items-center gap-2 p-2 ${
              menu.children?.some((c) => isActive(c.href)) ? "bg-muted" : ""
            }`}
          >
            <menu.Icon className="h-5 w-5" />
            <span>{menu.title}</span>
            <ChevronRight
              className={`ml-auto transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <AnimatePresence initial={false}>
          {isOpen && (
            <CollapsibleContent asChild forceMount>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <SidebarMenuSub className="pl-6">
                  {menu.children!.map((sub) => (
                    <SidebarMenuSubItem key={sub.href}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          href={sub.href}
                          className={`flex items-center gap-2 p-2 ${
                            isActive(sub.href) ? "bg-muted" : ""
                          }`}
                        >
                          <sub.Icon className="h-4 w-4" />
                          <span>{sub.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </SidebarMenuItem>
  );
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = React.useState<string[]>([]);

  // Load persisted open keys
  React.useEffect(() => {
    const stored = localStorage.getItem("sidebar-open-keys");
    if (stored) {
      try {
        setOpenKeys(JSON.parse(stored));
      } catch {}
    }
  }, []);

  // Persist open keys
  React.useEffect(() => {
    localStorage.setItem("sidebar-open-keys", JSON.stringify(openKeys));
  }, [openKeys]);

  const toggleKey = (key: string) =>
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <div className="flex items-center justify-center h-16 bg-[#d3dffa] text-black font-bold rounded-b-[15px]">
        <LayoutDashboardIcon className="h-6 w-6 mr-2" />
        ForensicHQ Admin
      </div>
      <SidebarHeader>
        <SidebarMenu>
          {menus
            .filter((m) => m.key === "dashboard")
            .map((m) => (
              <SidebarMenuItem key={m.key}>
                <SidebarMenuButton asChild>
                  <Link
                    href={m.href!}
                    className={`flex items-center gap-2 p-2 ${
                      isActiveLink(m.href!) ? "bg-muted" : ""
                    }`}
                  >
                    <m.Icon className="h-5 w-5" />
                    <span>{m.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menus
            .filter((m) => m.key !== "dashboard")
            .map((menu) =>
              menu.children ? (
                <SidebarCollapsibleMenu
                  key={menu.key}
                  menu={menu}
                  isOpen={openKeys.includes(menu.key)}
                  onToggle={() => toggleKey(menu.key)}
                />
              ) : (
                <SidebarMenuItem key={menu.key}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={menu.href!}
                      className={`flex items-center gap-2 p-2 ${
                        isActiveLink(menu.href!) ? "bg-muted" : ""
                      }`}
                    >
                      <menu.Icon className="h-5 w-5" />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto">
        {/* <NavUser
          user={{
            name: "Admin User",
            email: "admin@example.com",
            avatar: "/avatars/shadcn.jpg",
          }}
        /> */}
      </SidebarFooter>
    </Sidebar>
  );
}
