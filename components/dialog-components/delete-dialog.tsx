import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/use-toast";

export function DeleteDialog({
  id,
  setDropDownOpen,
  item,
  deleteData,
}: {
  id: string;
  setDropDownOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  item: string;
  deleteData: (id: string) => Promise<void>;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full text-left">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. It will permanently delete this
            {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {setDropDownOpen && (
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDropDownOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={async (e) => {
                await deleteData(id);
                toast({
                  title: `You have deleted this ${item} with the following id:`,
                  description: <p>{id}</p>,
                });
                setDropDownOpen(false);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
