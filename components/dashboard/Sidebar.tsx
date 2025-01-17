"use client";
import React from "react";
import Link from "next/link";
import {
    Airplay,
  Bell,
  Book,
  BookCheck,
  BookOpen,
  Boxes,
  Computer,
  Dot,
  ExternalLink,
  Home,
  Laptop,
  LayoutGrid,
  MonitorCog,
  Package2,
  Pencil,
  Send,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LogoutButton from "../logoutButton";
import { Message } from "@prisma/client";

export default function Sidebar({messages}: {messages: Message[]}) {

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
      title: "Tools",
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
  const pathname = usePathname();

  const hasNewMessages = messages.some((message) => message.isNew);

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Computer className="h-6 w-6" />
            <span className="">NP Web developer </span>
          </Link>
          <div className="flex ml-4">
            <Button 
              type="button" 
              variant="outline" 
              size="icon" 
              className="ml-auto relative h-8 w-8"
            >
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
            </Button>
            {hasNewMessages === true ? (
              <Link href={`/dashboard/messages`} className="absolute">
                <Dot className="absolute size-12 text-green-500"/>
              </Link>
              ) : "" }
          </div>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navLinks.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={i}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live Website
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
