import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/DataTableComponents/Datatable";
import TableHeader from "@/components/DataTableComponents/TableHeader";
import { getReviews } from "@/actions/reviews";
import { ReviewCardProps } from "@/utils/type";
 
export default async function page() {

  let testimonials = [] as ReviewCardProps[];
  try {
    testimonials = (await getReviews())?.data || [];
  } catch (err) {
    console.log("Failed to get testimonials:", err);
  }

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