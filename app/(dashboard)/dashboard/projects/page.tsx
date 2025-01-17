import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getProjects } from "@/actions/projects";
import { Projects } from "@prisma/client";
 
export default async function page() {

  let projects = [] as Projects[];
  try {
    projects = (await getProjects()) || [];
  } catch (err) {
    console.log("Failed to get projects:", err);
  }

  return (
    <div className="p-8">
      <TableHeader
        title="Projects"
        linkTitle="Add Project"
        href="/dashboard/projects/new"
        data={projects}
        model="project"
      />
      <div className="py-8">
        <DataTable data={projects} columns={columns} />
      </div>
    </div>
  );
}