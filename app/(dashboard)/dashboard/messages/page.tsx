import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getMessages } from "@/actions/messages";
 
export default async function page() {

  const messages = (await getMessages()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Messages"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
        data={messages}
        model="contact"
      />
      <div className="py-8">
        <DataTable data={messages} columns={columns} />
      </div>
    </div>
  );
}