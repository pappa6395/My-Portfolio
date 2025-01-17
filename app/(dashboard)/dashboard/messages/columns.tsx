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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { Mail } from "lucide-react";
import { useState } from "react";
import { updateMessage } from "@/actions/messages";
import { ContactProps } from "@/utils/type";


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
      
      const [data, setData] = useState<ContactProps>({
        firstName: message.firstName,
        lastName: message.lastName,
        email: message.email,
        message: message.message,
        isNew: message.isNew,
      })
      const initialIsNew = message.isNew
      const [isNewMessage, setIsNewMessage] = useState(initialIsNew)
     
      const handleToggleNew = () => {

        setIsNewMessage(false);
        setData((prev) => ({ ...prev, isNew: false }))
        handleUpdate()
      }

      const handleReload = () => {
        setTimeout(() => {
          if (isNewMessage === false) window.location.reload();
        }, 500)
      }

      const handleUpdate = async () => {
        
        let id = message.id
        console.log(data);
        data.isNew = false

        try {
          await updateMessage(id , data)
          
        } catch (err) {
          console.log("Failed updating message:", err);
          
        }
      }
      
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button type="submit" className="text-xs" variant="outline" onClick={handleToggleNew}>
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
              <DialogClose onClick={handleReload}>
                Close
              </DialogClose>
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
      const message = row.original;
      return (
        <ActionColumn
          row={row}
          model="message"
          editEndpoint={`messages/update/${message.id}`}
          id={message.id}
        />
      );
    },
  },
];