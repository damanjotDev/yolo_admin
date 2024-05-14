"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../../../components/ui/checkbox"

// import { priorities, statuses } from "./data"
import { DataTableColumnHeader } from "../../../../components/tabel/data-table-column-header"
import { DataTableRowActions } from "../../../../components/tabel/data-table-row-actions"
import { ServiceModal } from "../../../../utils/modals";

export const columns: ColumnDef<ServiceModal>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
         
          <span className="max-w-[500px] truncate font-medium">
            {row.original?.title}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "images",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <img 
          className="max-w-5 max-h-5 truncate font-medium"
          src={row.original?.images[0]?.imageUrl}
          alt="0"/>
      </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "icons",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Icon" />
    ),
    cell: ({ row }) => {
      
      return (
        <div className="flex space-x-2">
         
         <img 
        className="max-w-5 max-h-5 truncate font-medium"
        src={row.original?.icons[0]?.imageUrl}
        alt="0"/>
      </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Desc" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
         
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("description")}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} label="services"/>,
  },
]
