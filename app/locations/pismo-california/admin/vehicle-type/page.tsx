import { getData } from "@/actions/actions.vehicle-type";
import React from "react";
import VehicleTypeTable from "./table";

export default async function VehicleTypePage() {
  const data = await getData();
  return (
    <div>
      <VehicleTypeTable data={data} />
    </div>
  );
}
