"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../../../components/ui/checkbox"

// import { priorities, statuses } from "./data"
import { DataTableColumnHeader } from "../../../../components/tabel/data-table-column-header"
import { DataTableRowActions } from "../../../../components/tabel/data-table-row-actions"
import { CategoryModal } from "../../../../utils/modals";

export const columns: ColumnDef<CategoryModal>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-auto ml-2">{row.original?.id}</div>
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
         
          <span className="max-w-[150px] truncate font-medium">
            {row.original?.title}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
          <div 
           className="max-w-[150px] max-h-[30px] truncate font-medium" >
            {`${row?.original?.createdAt}`?.substring(0, 10)}
          </div>
        </div>
      )
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} label="categories"/>,
  },
]
