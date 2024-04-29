import { Skeleton } from "@/components/ui/skeleton";
import { VehicleInfo } from "./book/page";

export function PismoFleetDemo({
  setAddedFleet,
}: {
  setAddedFleet: React.Dispatch<
    React.SetStateAction<VehicleInfo[] | undefined>
  >;
}) {
  return (
    <div className="flex mb-3 items-center justify-between w-full">
      <Skeleton className=" h-24 w-24 rounded-full" />
      <div className=" w-60 h-20 rounded-md">
        <Skeleton className="h-10 w-full" />
        <div className="flex justify-evenly">
          <Skeleton className="h-5 w-[25%]" />
          <Skeleton className="h-5 w-[25%]" />
          <Skeleton className="h-5 w-[25%]" />
        </div>
      </div>
    </div>
  );
}
