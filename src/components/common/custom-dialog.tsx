import React from "react";
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

interface DialogProps {
  open: boolean;
  setOpen: Function;
  onClick?: Function;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const CustomDialog = ({open, setOpen, title, description, children, onClick}:DialogProps) => {

const handleClick = ()=>{
  if(onClick){
    onClick();
  }
}
  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogContent className="w-full" >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
           {description? description: null}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          {onClick?
          <Button onClick={handleClick} type="button">Save</Button>
          :null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
