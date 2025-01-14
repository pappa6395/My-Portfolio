"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Message, Projects, Services } from "@prisma/client";
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



export const columns: ColumnDef<Services>[] = [
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
    accessorKey: "iconUrl",
    header: "Service Icon",
    cell: ({ row }) => <ImageColumn row={row} accessorKey={"iconUrl"} />,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "description",
    header: "View Service",
    cell: ({ row }) => {
      const service = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Service
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Service: {service.title}</DialogTitle>
                <DialogDescription className="py-4">
                  {service.description}
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
      const service = row.original;
      return (
        <ActionColumn
          row={row}
          model="service"
          editEndpoint={`services/update/${service.id}`}
          id={service.id}
        />
      );
    },
  },
];