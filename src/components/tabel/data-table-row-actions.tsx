"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ServiceActions } from "../../reducers"
import { removeService } from "../../services"
import { useNavigate } from "react-router-dom"
import { RoutesName } from "../../utils/constant"
import { useAppDispatch } from "../../stateStore"



interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  label: string
}

export function DataTableRowActions<TData>({
  row,
  label
}: DataTableRowActionsProps<TData>) {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEdit = ()=>{
    switch (label) {
      case 'services':
        ServiceActions.setServiceDetails(row?.original)
        navigate(RoutesName.ServiceEdit)
        break;

      default:
        return
    }
  }

  const handleDelete = ()=>{
    switch (label){
      case 'services':
        dispatch(removeService({...row?.original}))
        break;
      
      default:
        return;
    }
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
     {label==="services"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}
    </DropdownMenu>
  )
}
