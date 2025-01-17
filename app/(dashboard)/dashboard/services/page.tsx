import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getServices } from "@/actions/services";
import { Services } from "@prisma/client";
 
export default async function page() {

  let services = [] as Services[]
  try {
    services = (await getServices()) || [];
  } catch (err) {
    console.log("Failed to get services:", err);
  }

  return (
    <div className="p-8">
      <TableHeader
        title="Services"
        linkTitle="Add Service"
        href="/dashboard/services/new"
        data={services}
        model="service"
      />
      <div className="py-8">
        <DataTable data={services} columns={columns} />
      </div>
    </div>
  );
}