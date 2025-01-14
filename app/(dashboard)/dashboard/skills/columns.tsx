"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Message, Projects, Skills } from "@prisma/client";
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



export const columns: ColumnDef<Skills>[] = [
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
    header: "Skill Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey={"iconUrl"} />,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "percent",
    header: ({ column }) => <SortableColumn column={column} title="Percent %" />,
  },
  
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const skill = row.original;
      return (
        <ActionColumn
          row={row}
          model="skill"
          editEndpoint={`skills/update/${skill.id}`}
          id={skill.id}
        />
      );
    },
  },
];