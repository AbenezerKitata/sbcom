"use client";
import React from "react";
import { PismoFleetDemo } from "./fleet";
import { Button } from "@/components/ui/button";
import { VehicleInfo } from "./book/page";

const PismoVehicleList = () => {
  const [addedfleet, setAddedFleet] = React.useState<VehicleInfo[] | undefined>(
    []
  );
  return (
    <section className="flex flex-col items-center w-full">
      {/* <p>TODO: Add content here</p>

      <PismoFleetDemo setAddedFleet={setAddedFleet} /> */}
      <div className="flex justify-center fixed bottom-2 animate-bounce">
        <Button>Book Now</Button>
      </div>
    </section>
  );
};

export default PismoVehicleList;
