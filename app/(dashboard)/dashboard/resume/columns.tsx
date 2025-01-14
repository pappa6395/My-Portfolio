"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Experiences, Message, Projects, Services } from "@prisma/client";
import ActionColumn from "@/components/DataTableColumns/Actions";
import DateColumn from "@/components/DataTableColumns/DateColumn";
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


export const columns: ColumnDef<Experiences>[] = [
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
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "period",
    header: ({ column }) => <SortableColumn column={column} title="Period" />,
  },
  {
    accessorKey: "company",
    header: ({ column }) => <SortableColumn column={column} title="Company" />,
  },
  {
    accessorKey: "description",
    header: "View Experience",
    cell: ({ row }) => {
      const experience = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Experience
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Experience: {experience.title}</DialogTitle>
                <DialogDescription className="py-4">
                  {experience.description}
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
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const experience = row.original;
      return (
        <ActionColumn
          row={row}
          model="experience"
          editEndpoint={`resume/update/${experience.id}`}
          id={experience.id}
        />
      );
    },
  },
];