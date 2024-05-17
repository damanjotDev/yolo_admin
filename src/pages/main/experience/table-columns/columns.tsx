"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../../../components/ui/checkbox"

// import { priorities, statuses } from "./data"
import { DataTableColumnHeader } from "../../../../components/tabel/data-table-column-header"
import { DataTableRowActions } from "../../../../components/tabel/data-table-row-actions"
import { ExperienceModal } from "../../../../utils/modals";

export const columns: ColumnDef<ExperienceModal>[] = [
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
    accessorKey: "images",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Images" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
          <img 
          className="max-w-5 max-h-5 truncate font-medium"
          src={row.original?.images[0]?.imageUrl}
          alt="0"/>
      </div>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Desc" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex ml-2">
          <div 
          className="max-w-[150px] max-h-[30px] truncate font-medium" 
          dangerouslySetInnerHTML={{__html: row?.original?.description || ""}}/>
           
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
    cell: ({ row }) => <DataTableRowActions row={row} label="experiences"/>,
  },
]
