"use client";

import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { LucideProps } from "lucide-react";
import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export type IconProps = React.HTMLAttributes<SVGElement>;

export type IconType = {
    icon: any;
    title: string;
    href: string;
}

export function TechStack() {

    const stacks: IconType[] = [
        {
            title: "Next Js",
            icon: RiNextjsFill,
            href: "#"
        },
        {
            title: "React Js",
            icon: RiReactjsFill,
            href: "#"
        },
        {
            title: "TypeScript",
            icon: SiTypescript,
            href: "#"
        },
        {
            title: "Tailwind CSS",
            icon: RiTailwindCssFill,
            href: "#"
        },
    ]
    
  return (
    <div className="relative flex items-center">
        {stacks?.map((item, i) => {
            const Icon = item.icon
            return (
                <div key={i} className="w-20">
                        <Dock 
                            direction="middle" 
                            iconMagnification={80} 
                            iconDistance={100}
                            iconSize={50}
                            className="border-none shadow-none"
                        >
                            <DockIcon className="bg-black/10 dark:bg-white/10 border-none">
                                <Icon className="size-full" />
                            </DockIcon>
                        </Dock>
                </div>
            )
        })}
    </div>
  );
}

