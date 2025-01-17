

import { getMessages } from "@/actions/messages";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { authOptions } from "@/config/auth";
import { Message } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {

  const session = await getServerSession(authOptions);
    if (!session) {
    redirect("/login");
    }
  
  let messages = [] as Message[];
  try {
    messages = (await getMessages()) || [];
  } catch (err) {
    console.log("Failed to fetch messages:", err);
  }

  return (
    
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar messages={messages}/>
      <div className="flex flex-col">
        <DashboardNavbar session={session} />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}