"use client"

import { ColumnDef } from "@tanstack/react-table"

// import { priorities, statuses } from "./data"
import { DataTableColumnHeader } from "../../../../components/tabel/data-table-column-header"
import { DataTableRowActions } from "../../../../components/tabel/data-table-row-actions"
import { AvailableUserStatus, UserModal } from "../../../../utils/modals";

export const columns: ColumnDef<UserModal>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-auto ml-2">{row.original?.id}</div>
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
         
          <span className="max-w-[150px] truncate font-medium">
            {row.original?.email}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
         
          <span className="max-w-[150px] truncate font-medium">
            {row.original?.name}
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
        <div className="flex ml-2">
          <img 
          className="max-w-5 max-h-5 truncate font-medium"
          src={row.original?.image?.imageUrl}
          alt="0"/>
      </div>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const priority = AvailableUserStatus.find((priority) => priority.value === row.original?.status)

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          <span>{priority.title}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
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
    cell: ({ row }) => <DataTableRowActions row={row} label="users"/>,
  },
]
