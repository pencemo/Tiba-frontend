import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Home04Icon,
  Car02Icon,
  UserIcon,
  Bookmark01Icon,
  ShieldUserIcon,
  Notification01Icon,
  Settings02Icon,
  MailOpen01Icon,
  CreditCardAddIcon,
} from "hugeicons-react";
import { NavMain } from "@/app/Admin/Page/nav-main";
import { NavProjects } from "@/app/Admin/Page/nav-projects";
import { NavSecondary } from "@/app/Admin/Page/nav-secondary";
import { NavUser } from "@/components/Cars/pages/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePorfile } from "@/Context/ProfileContext";
import { Link } from "react-router-dom";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "",
      icon: Home04Icon,
      isActive: true,
      isAdmin: true,
    },
    {
      title: "Booking",
      url: "/admin/booking",
      icon: Bookmark01Icon,
      isAdmin: true,
    },
    {
      title: "Manage Cars",
      url: "/admin/manage-cars",
      icon: Car02Icon,
      isAdmin: true,
      // items: [
      //   {
      //     title: "All cars",
      //     url: "/admin/manage-cars",
      //   },
      //   {
      //     title: "Add cars",
      //     url: "/admin/manage-cars/add-car",
      //   },
      // ],
    },
    {
      title: "Users List",
      url: "/admin/users",
      icon: UserIcon,
      isAdmin: true,
    },
    {
      title: "Payments",
      url: "/admin/payment",
      icon: CreditCardAddIcon,
      isAdmin: true,
    },
    {
      title: "Manage admin",
      url: "/admin/manage-admin",
      icon: ShieldUserIcon,
      isAdmin: false,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Notification",
      url: "/admin/notification",
      icon: Notification01Icon,
    },
    {
      name: "Settings",
      url: "/admin/settings",
      icon: Settings02Icon,
    },
    {
      name: "Enquires",
      url: "/admin/enquires",
      icon: MailOpen01Icon,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { profile } = usePorfile();
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={"/"}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Tiba cars</span>
                  <span className="truncate text-xs">Rent a cars</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            ...profile,
            avatar:
              "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
