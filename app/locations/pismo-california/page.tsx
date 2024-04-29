import React from "react";
import CollapsibleDemo from "./collapsible";
import PismoVehicleList from "./vehicle-list";

const PismoLandingPage = () => {
  return (
    <div className="flex flex-col gap-2 p-3 items-center">
      <h1>Pismo Landing Page</h1>
      <div>
        <CollapsibleDemo />
      </div>
      <PismoVehicleList />
    </div>
  );
};

export default PismoLandingPage;
