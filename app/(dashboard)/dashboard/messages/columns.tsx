"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Message } from "@prisma/client";
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
import { Mail } from "lucide-react";



export const columns: ColumnDef<Message>[] = [
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
    accessorKey: "firstName",
    header: ({ column }) => <SortableColumn column={column} title="First Name" />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => <SortableColumn column={column} title="Last Name" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableColumn column={column} title="Email" />,
  },
  {
    accessorKey: "message",
    header: "View Message",
    cell: ({ row }) => {
      const message = row.original;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs" variant="outline">
                View Message
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Message from {message.firstName}</DialogTitle>
                <DialogDescription className="py-4">
                  <span className="text-lg">{message.message}</span>
                  <Link
                    target="_blank"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${message.email}&su=Your+Subject+Here&body=Your+Body+here`}
                    className="flex items-center gap-2"
                    >
                    <Mail className="text-blue-500"/>
                    <span className="font-semibold underline text-blue-500">Reply</span>to{" "} {message.email}
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