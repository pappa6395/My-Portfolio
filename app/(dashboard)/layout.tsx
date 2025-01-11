

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <DashboardNavbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}