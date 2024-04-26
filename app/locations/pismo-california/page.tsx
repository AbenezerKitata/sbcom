import React from "react";
import { PismoFleetDemo } from "./fleet";
import { Button } from "@/components/ui/button";

const PismoLandingPage = () => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <h1>PismoLandingPage</h1>
      <p>TODO: Add content here</p>
      {Array.from(Array(20).keys()).map((i) => (
        <PismoFleetDemo key={i} />
      ))}
      <footer className="flex justify-center fixed bottom-2 w-full animate-bounce">
        <Button>Book Now</Button>
      </footer>
    </div>
  );
};

export default PismoLandingPage;
