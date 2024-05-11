"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import React, { useEffect } from "react";

interface EditDialogProps {
  id: string;
  setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: string;
  children: (props: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}

export const EditDialog: React.FC<EditDialogProps> = ({
  id,
  setDropDownOpen,
  item,
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full text-left">Edit</DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] p-4"
        onKeyDown={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle>Edit this {item} </DialogTitle>
          <DialogDescription>
            Click <code> save</code> when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        {children({ setOpen, setDropDownOpen })}
        <DialogFooter
          onClick={() => setDropDownOpen(false)}
          className="flex sm:justify-center w-full"
        >
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
