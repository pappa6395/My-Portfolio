import React from "react";
import Link from "next/link";
import {
  Airplay,
  Bell,
  BookCheck,
  BookOpen,
  Boxes,
  CircleUser,
  Cpu,
  Home,
  Laptop,
  LayoutGrid,
  LineChart,
  Menu,
  MonitorCog,
  Package,
  Package2,
  Pencil,
  Search,
  Send,
  Settings,
  Settings2,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Session } from "next-auth";
import { getInitials } from "@/utils/getInitials";
import LogoutButton from "../logoutButton";
export default function DashboardNavbar({session}: {session: Session}) {

  const navLinks = [
    {
        title: "Dashboard",
        icon: Home,
        href: "/dashboard",
      },
    {
      title: "Projects",
      icon: LayoutGrid,
      href: "/dashboard/projects",
    },
    {
      title: "Skills",
      icon: Boxes,
      href: "/dashboard/skills",
    },
    {
      title: "Tool",
      icon: MonitorCog,
      href: "/dashboard/tools",
    },
    {
      title: "Services",
      icon: Laptop,
      href: "/dashboard/services",
    },
    {
      title: "Resume",
      icon: BookCheck,
      href: "/dashboard/resume",
    },
    {
      title: "Blogs",
      icon: Pencil,
      href: "/dashboard/blogs",
    },
    {
      title: "Messages",
      icon: Send,
      href: "/dashboard/messages",
    },
    {
      title: "Testimonials",
      icon: Users,
      href: "/dashboard/testimonials",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle>
              {getInitials(session.user.name)}
          </SheetTitle>
        </SheetHeader>
        <SheetDescription></SheetDescription>
        <SheetContent side="left" className="flex justify-between flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Cpu className="h-6 w-6" />
              <span className="">PAP web solution</span>
            </Link>
            { navLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={i}
                  className="flex items-center text-lg font-medium 
                  px-3 py-2 gap-4 text-muted-foreground hover:text-foreground
                  rounded-xl"
                >
                  <Icon className="h-5 w-5" />
                  {item.title}
                </Link>
              )
            }) }
            
          </nav>
          <LogoutButton variant={"default"} />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{getInitials(session.user.name)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <div>
              <h2>{session.user.name}</h2>
              <p className="text-xs text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
