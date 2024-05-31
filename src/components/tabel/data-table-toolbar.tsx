"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "../ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { Button } from "../ui/button"
import { IoMdAdd } from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import { RoutesName } from "../../utils/constant"
import { CalendarDateRangePicker } from "../../pages/main/dashboard/components/date-range-picker"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { AvailableUserStatus } from "../../utils/modals"


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
      case 'homes':
        navigate(RoutesName.HomeAdd)
        break;

      case 'services':
        navigate(RoutesName.ServiceAdd)
        break;

      case 'properties':
        navigate(RoutesName.PropertyAdd)
        break;

      case 'users':
        navigate(RoutesName.UserAdd)
        break;

      case 'categories':
        navigate(RoutesName.CategoryAdd)
        break;

      case 'events':
        navigate(RoutesName.EventAdd)
        break;

      case 'tags':
        navigate(RoutesName.TagAdd)
        break;

      case 'rooms':
        navigate(RoutesName.RoomAdd)
        break;

      case 'abouts':
        navigate(RoutesName.AboutAdd)
        break;

      case 'experiences':
        navigate(RoutesName.ExperienceAdd)
        break;

      case 'pages':
        navigate(RoutesName.PageAdd)
        break;

      default:
        return;
    }
  }
  return (
    <div className="flex items-center justify-between">

     {label === "homes" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Home"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

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

      {label === "users" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add User"}
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
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={AvailableUserStatus}
          />
        )}
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "categories" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Category"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "events" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Event"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "tags" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Event"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "rooms" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Room"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
         <Input
          placeholder="Filter price..."
          value={(table.getColumn("price")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("price")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "abouts" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add About"}
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
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      {label === "experiences" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Experience"}
        </Button>
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

      {label === "pages" ?
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={handleAdd}
        >
          <IoMdAdd className="mr-1 h-4 w-4" />
          {"Add Page"}
        </Button>
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <CalendarDateRangePicker onDateChange = {(value)=> console.log("value",value)}/> */}
      </div> : null}

      <DataTableViewOptions table={table} />
    </div>
  )
}
