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

interface AddDialogProps {
  inputForm: React.ReactNode;
  item: string;
}

export const AddDialog: React.FC<AddDialogProps> = ({
  inputForm: InputForm,
  item,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="text-xs mx-auto">
          + New
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] p-4"
        onKeyDown={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle>Add a new {item} </DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {InputForm}
        <DialogFooter className="flex sm:justify-center w-full">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
