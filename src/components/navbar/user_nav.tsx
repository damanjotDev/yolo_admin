import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar"
import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { useAppDispatch, useTypedSelector } from "../../stateStore";


import profileImage from "../../assets/images/profileDummy.jpg"
import { CustomDialog } from "../common/custom-dialog";
import { useState } from "react";
import { adminLogout } from "../../services";

export function UserNav() {
  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { adminDetailsLoading, adminDetails, error} = useTypedSelector((state) => state.Admin );

  const[open,setOpen] = useState<boolean>(false);


  const handleLogout = ()=>{
    setOpen(false)
    adminLogout(dispatch,navigate)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profileImage} alt="@shadcn" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{adminDetails?.name || 'Admin'}</p>
            <p className="text-xs leading-none text-muted-foreground">
             {adminDetails?.email || "N/A"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=> setOpen(true)}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>

      <CustomDialog
        open={open} 
        setOpen={setOpen} 
        title={'Logout'} 
        description={"Are you sure you want to logout!"}>
          <div className="w-full flex items-center justify-end gap-5">
            <Button onClick={handleLogout} type="button">Logout</Button>
            <Button onClick={()=> setOpen(false)} type="button">Cancel</Button>
          </div>
        </CustomDialog>
    </DropdownMenu>
  )
}
