"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/Actions";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReviewCardProps } from "@/utils/type";
import { timeAgo } from "@/utils/timeAgo";


export const columns: ColumnDef<ReviewCardProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "reviewerName",
    header: ({ column }) => <SortableColumn column={column} title="Reviewer Name" />,
  },
  {
    accessorKey: "reviewerTitle",
    header: ({ column }) => <SortableColumn column={column} title="Reviewer Title" />,
  },
  {
    accessorKey: "comment",
    header: "View Comment",
    cell: ({ row }) => {
      const testimonial = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Comment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Testimonial from {testimonial.reviewerName}</DialogTitle>
                <DialogDescription className="py-4">
                  {testimonial.comment}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const testimonial = row.original;
      return (
        <p>{timeAgo(testimonial.createdAt.toString())}</p>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return (
        <ActionColumn
          row={row}
          model="category"
          editEndpoint={`categories/update/${category.id}`}
          id={category.id}
        />
      );
    },
  },
];