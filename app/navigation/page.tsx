"use client";
import React from "react";
import { LandingNav } from "./landingNav";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathName = usePathname();
  if (pathName === "/")
    return (
      <div className="ml-5 lg:ml-10">
        <LandingNav />
      </div>
    );
  if (pathName === "/locations/lasvegas")
    return <div className="ml-5 lg:ml-10">{/* <VegasNav /> */}</div>;
};

export default NavMenu;
