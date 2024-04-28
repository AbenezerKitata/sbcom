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
import { InputForm } from "./form";
import { DialogClose } from "@radix-ui/react-dialog";

export function DialogDemo({}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="text-xs mx-auto">
          + New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new vehicle type </DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <InputForm />
        <DialogFooter className="flex sm:justify-center w-full">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
