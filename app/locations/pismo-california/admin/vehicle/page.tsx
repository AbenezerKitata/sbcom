import { getData } from "@/actions/actions.vehicle";
import React from "react";
import VehicleTable from "./table";

export default async function VehiclePage() {
  const data = await getData();
  return (
    <div>
      <VehicleTable data={data} />
    </div>
  );
}
