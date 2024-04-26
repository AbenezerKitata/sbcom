import { getData } from "@/actions/vehicle-type";
import React from "react";

export default async function VehicleTypePage() {
  const data = await getData();
  console.log(data);
  return <div>vehicleTypePage</div>;
}
