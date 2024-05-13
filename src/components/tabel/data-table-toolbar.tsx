"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "../ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { Button } from "../ui/button"
import { IoMdAdd } from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import { RoutesName } from "../../utils/constant"


interface DataTableToolbarProps<TData> {
  table: Table<TData>
  label: string
}

export function DataTableToolbar<TData>({
  table,
  label
}: DataTableToolbarProps<TData>) {
  const navigate = useNavigate()
  const handleAdd = ()=>{
    switch(label){
      case 'services':
        navigate(RoutesName.ServiceAdd)
        break;

      default:
        return;
    }
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
         <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {label==="services" && "Add Service"}
        </Button>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
