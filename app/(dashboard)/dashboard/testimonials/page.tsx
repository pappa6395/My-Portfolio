import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getMessages } from "@/actions/messages";
import { getReviews } from "@/actions/reviews";
 
export default async function page() {

  const testimonials = (await getReviews())?.data || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Testimonials"
        linkTitle="Add Review"
        href="https://feedbox-sync.vercel.app/"
        data={testimonials}
        model="review"
      />
      <div className="py-8">
        <DataTable data={testimonials} columns={columns} />
      </div>
    </div>
  );
}