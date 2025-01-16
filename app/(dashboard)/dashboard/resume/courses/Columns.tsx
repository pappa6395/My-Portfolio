"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Courses } from "@prisma/client";
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


export const columns: ColumnDef<Courses>[] = [
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
    header: "View Course",
    cell: ({ row }) => {
      const course = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Course
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Course: {course.title}</DialogTitle>
                <DialogDescription className="py-4">
                  {course.description}
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
      const course = row.original;
      return (
        <ActionColumn
          row={row}
          model="course"
          editEndpoint={`resume/courses/update/${course.id}`}
          id={course.id}
        />
      );
    },
  },
];