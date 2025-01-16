"use server"

import { db } from "@/prisma/db";
import { Boxes, LayoutGrid, Pencil, Send } from "lucide-react";

export async function getAnalytics() {
    
    try {
        const blogsCount = await db.blogs.count();
        const messageCount = await db.message.count();
        const projectCount = await db.projects.count();
        const serviceCount = await db.services.count();
        const analytics = [
            {
                title: "Blogs",
                count: blogsCount,
                href: "/dashboard/blogs",
                symbol: "",
                icon: Pencil,
                description: "",
            },
            {
                title: "Messages",
                count: messageCount,
                href: "/dashboard/messages",
                symbol: "",
                icon: Send,
                description: "",
            },
            {
                title: "Projects",
                count: projectCount,
                href: "/dashboard/projects",
                symbol: "",
                icon: LayoutGrid,
                description: "",
            },
            {
                title: "Services",
                count: serviceCount,
                href: "/dashboard/services",
                symbol: "",
                icon: Boxes,
                description: "",
            },
        ];
        return analytics;

    } catch (err) {
        console.log("Failed to get analytics:", err);
        return [];
    }
}