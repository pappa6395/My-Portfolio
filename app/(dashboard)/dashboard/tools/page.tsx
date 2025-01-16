import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getTools } from "@/actions/tools";
 
export default async function page() {

  const tools = (await getTools()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Tools"
        linkTitle="Add Tool"
        href="/dashboard/tools/new"
        data={tools}
        model="tool"
      />
      <div className="py-8">
        <DataTable data={tools} columns={columns} />
      </div>
    </div>
  );
}