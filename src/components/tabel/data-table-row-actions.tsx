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
import { ServiceActions, PropertyActions, UserActions, EventActions, CategoryActions, TagActions, RoomActions, AboutActions, ExperienceActions, HomeActions, PageActions } from "../../reducers"
import { removeAbout, removeCategory, removeEvent, removeExperience, removeHome, removePage, removeProperty, removeRoom, removeService, removeTag, removeUser } from "../../services"
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
      case 'homes':
        dispatch(HomeActions.setHomeDetails(row?.original))
        navigate(RoutesName.HomeEdit)
        break;

      case 'services':
        dispatch(ServiceActions.setServiceDetails(row?.original))
        navigate(RoutesName.ServiceEdit)
        break;

      case 'properties':
        dispatch(PropertyActions.setPropertyDetails(row?.original))
        navigate(RoutesName.PropertyEdit)
        break;

      case 'users':
        dispatch(UserActions.setUserDetails(row?.original))
        navigate(RoutesName.UserEdit)
        break;

      case 'categories':
        dispatch(CategoryActions.setCategoryDetails(row?.original))
        navigate(RoutesName.CategoryEdit)
        break;

      case 'events':
        dispatch(EventActions.setEventDetails(row?.original))
        navigate(RoutesName.EventEdit)
        break;

      case 'tags':
        dispatch(TagActions.setTagDetails(row?.original))
        navigate(RoutesName.TagEdit)
        break;

      case 'rooms':
        dispatch(RoomActions.setRoomDetails(row?.original))
        navigate(RoutesName.RoomEdit)
        break;

      case 'abouts':
        dispatch(AboutActions.setAboutDetails(row?.original))
        navigate(RoutesName.AboutEdit)
        break;

      case 'experiences':
        dispatch(ExperienceActions.setExperienceDetails(row?.original))
        navigate(RoutesName.ExperienceEdit)
        break;

      case 'pages':
        dispatch(PageActions.setPageDetails(row?.original))
        navigate(RoutesName.PageEdit)
        break;

      default:
        return
    }
  }

  const handleDelete = ()=>{
    switch (label){
      case 'homes':
        dispatch(removeHome({...row?.original}))
        break;

      case 'services':
        dispatch(removeService({...row?.original}))
        break;

      case 'properties':
        dispatch(removeProperty({...row?.original}))
        break;

      case 'users':
        dispatch(removeUser({...row?.original}))
        break;

      case 'categories':
        dispatch(removeCategory({...row?.original}))
        break;

      case 'events':
        dispatch(removeEvent({...row?.original}))
        break;

      case 'tags':
        dispatch(removeTag({...row?.original}))
        break;
      
      case 'rooms':
        dispatch(removeRoom({...row?.original}))
        break;
      
      case 'abouts':
        dispatch(removeAbout({...row?.original}))
        break;

      case 'experiences':
        dispatch(removeExperience({...row?.original}))
        break;

      case 'pages':
        dispatch(removePage({...row?.original}))
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

      {label==="homes"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

     {label==="services"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="properties"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="users"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="categories"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="events"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="tags"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="rooms"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="abouts"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="experiences"?
      <DropdownMenuContent  align="end" className="w-[160px]">
      <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
      {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
      <DropdownMenuItem onClick={handleDelete}>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>:null}

    {label==="pages"?
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
