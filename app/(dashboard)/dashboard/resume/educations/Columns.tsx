"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Educations, Experiences, Message, Projects, Services } from "@prisma/client";
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
import FileColumn from "@/components/DataTableColumns/FileColumn";


export const columns: ColumnDef<Educations>[] = [
  {
    accessorKey: "certificate",
    header: "Certificate",
    cell: ({ row }) => <FileColumn row={row} accessorKey={"certificate"} />,
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
    accessorKey: "school",
    header: ({ column }) => <SortableColumn column={column} title="School" />,
  },
  {
    accessorKey: "description",
    header: "View Education",
    cell: ({ row }) => {
      const education = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Education
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Education: {education.title}</DialogTitle>
                <DialogDescription className="py-4">
                  {education.description}
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
      const education = row.original;
      return (
        <ActionColumn
          row={row}
          model="education"
          editEndpoint={`resume/educations/update/${education.id}`}
          id={education.id}
        />
      );
    },
  },
];