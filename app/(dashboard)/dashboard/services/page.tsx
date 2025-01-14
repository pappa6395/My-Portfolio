import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getProjects } from "@/actions/projects";
import { getServices } from "@/actions/services";
 
export default async function page() {

  const projects = (await getServices()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Services"
        linkTitle="Add Service"
        href="/dashboard/services/new"
        data={projects}
        model="service"
      />
      <div className="py-8">
        <DataTable data={projects} columns={columns} />
      </div>
    </div>
  );
}