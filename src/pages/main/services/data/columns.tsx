"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../../../components/ui/checkbox"

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
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "imageUrl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <div className="max-w-[500px]">
            <img 
            className="max-w-10 max-h-10 truncate font-medium"
            src={row.getValue("imageUrl")}
            alt="0"/>
          </div>
      </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "iconUrl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Icon" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
         <div className="max-w-[500px]">
            <img 
            className="max-w-10 max-h-10 truncate font-medium"
            src={row.getValue("iconUrl")}
            alt="0"/>
          </div>
      </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
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
