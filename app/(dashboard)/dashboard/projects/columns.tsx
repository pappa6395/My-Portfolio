"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Message, Projects } from "@prisma/client";
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
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";



export const columns: ColumnDef<Projects>[] = [
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
    accessorKey: "imageUrl",
    header: "Project Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey={"imageUrl"} />,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "description",
    header: "View Project",
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Project: {project.title}</DialogTitle>
                <DialogDescription className="py-4">
                  {project.description}
                  <Link
                    target="_blank"
                    href={`${project.hostedLink}`}
                    className="flex items-center gap-2 "
                    >
                    <ExternalLink className="text-blue-500"/>
                    <span className="font-semibold">Visit</span>to{" "} {project.hostedLink}
                  </Link>
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
      const project = row.original;
      return (
        <ActionColumn
          row={row}
          model="project"
          editEndpoint={`projects/update/${project.id}`}
          id={project.id}
        />
      );
    },
  },
];