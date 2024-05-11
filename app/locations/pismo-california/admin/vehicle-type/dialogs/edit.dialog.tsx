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
import { InputForm } from "../forms/edit.form";
import { DialogClose } from "@radix-ui/react-dialog";

export function EditDialog({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-left">Edit</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit the vehicle&apos;s type </DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <InputForm id={id} />
        <DialogFooter className="flex sm:justify-center w-full">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
