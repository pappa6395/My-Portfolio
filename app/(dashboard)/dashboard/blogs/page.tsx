import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getBlogs } from "@/actions/blogs";
 
export default async function page() {

  const blogs = (await getBlogs()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Blogs"
        linkTitle="Add Blog"
        href="/dashboard/blogs/new"
        data={blogs}
        model="blog"
      />
      <div className="py-8">
        <DataTable data={blogs} columns={columns} />
      </div>
    </div>
  );
}