import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getExperiences } from "@/actions/experiences";
 
export default async function page() {

  const experiences = (await getExperiences()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Experience"
        linkTitle="Add Experience"
        href="/dashboard/resume/new"
        data={experiences}
        model="experience"
      />
      <div className="py-8">
        <DataTable data={experiences} columns={columns} />
      </div>
    </div>
  );
}