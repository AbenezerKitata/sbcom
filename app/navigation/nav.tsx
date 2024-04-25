import React from "react";
import { LandingNav } from "./landingNav";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Nav = () => {
  return (
    <>
      <div className=" ml-1 lg:ml-10 flex justify-between">
        <LandingNav />
        <div className="flex justify-end md:mr-10 mr-5 mt-2">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Nav;
