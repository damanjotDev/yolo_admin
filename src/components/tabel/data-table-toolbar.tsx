"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "../ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { Button } from "../ui/button"
import { IoMdAdd } from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import { RoutesName } from "../../utils/constant"
import { CalendarDateRangePicker } from "../../pages/main/dashboard/components/date-range-picker"


interface DataTableToolbarProps<TData> {
  table: Table<TData>
  label: string
}

export function DataTableToolbar<TData>({
  table,
  label
}: DataTableToolbarProps<TData>) {
  const navigate = useNavigate()
  const handleAdd = () => {
    switch (label) {
      case 'services':
        navigate(RoutesName.ServiceAdd)
        break;

      case 'properties':
        navigate(RoutesName.PropertyAdd)
        break;

      default:
        return;
    }
  }
  return (
    <div className="flex items-center justify-between">
      {label === "services" ?
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
            onClick={handleAdd}
          >
            <IoMdAdd className="mr-1 h-4 w-4" />
            {"Add Service"}
          </Button>
          <Input
            placeholder="Filter tasks..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          <Input
            placeholder="Filter description..."
            value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("description")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
        </div> : null}

      {label === "properties" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Property"}
        </Button>
        <Input
          placeholder="Filter email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Input
          placeholder="Filter description..."
          value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}
      <DataTableViewOptions table={table} />
    </div>
  )
}
