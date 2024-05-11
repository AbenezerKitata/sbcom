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
    <>
      {Array.from(Array(20).keys()).map((i) => (
        <div
          className="flex mb-3 items-center justify-between  md:w-[25%] w-full"
          key={i}
        >
          <Skeleton className=" h-24 w-24 rounded-full" />
          <div className=" w-60 h-20 rounded-md mb-2 flex flex-col justify-end">
            <Skeleton className="h-10 w-full " />
            <div className="flex justify-evenly mt-2">
              <Skeleton className="h-5 w-[30px]" />
              <Skeleton className="h-5 w-[30px]" />
              <Skeleton className="h-5 w-[30px]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
