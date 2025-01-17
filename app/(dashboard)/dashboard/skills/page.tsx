import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getSkills } from "@/actions/skills";
import { Skills } from "@prisma/client";
 
export default async function page() {

  let skills = [] as Skills[];
  try {
    skills = (await getSkills()) || [];
  } catch (err) {
    console.log("Failed to get skills:", err);
  }

  return (
    <div className="p-8">
      <TableHeader
        title="Skills"
        linkTitle="Add Skill"
        href="/dashboard/skills/new"
        data={skills}
        model="skill"
      />
      <div className="py-8">
        <DataTable data={skills} columns={columns} />
      </div>
    </div>
  );
}