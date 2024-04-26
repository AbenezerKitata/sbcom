import React from "react";
import { LandingNav } from "./landingNav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileNav from "./mobileNav";

const Nav = () => {
  return (
    <>
      <div className="  flex justify-between px-5 py-1">
        <div className="hidden lg:block">
          <LandingNav />
        </div>
        <MobileNav />
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Nav;
