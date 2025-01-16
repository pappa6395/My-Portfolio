"use client";
 
import { ColumnDef } from "@tanstack/react-table";
import { Tools } from "@prisma/client";
import ActionColumn from "@/components/DataTableColumns/Actions";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { Checkbox } from "@/components/ui/checkbox";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";


export const columns: ColumnDef<Tools>[] = [
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
      const tool = row.original;
      return (
        <ActionColumn
          row={row}
          model="tool"
          editEndpoint={`tools/update/${tool.id}`}
          id={tool.id}
        />
      );
    },
  },
];