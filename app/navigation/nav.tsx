import React from "react";
import { LandingNav } from "./landingNav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileNav from "./mobileNav";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      {/* <div className="  flex justify-between px-5 py-1"> */}
      {/* <div className="hidden lg:block"><LandingNav /></div> */}
      {/* <MobileNav /> */}
      {/* <div className="flex justify-end">
          <ModeToggle />
        </div> */}
      <div className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          {/* show only in dark mode */}
          <div className=" hidden dark:block">
            <Image
              alt="site logo"
              height={40}
              src="/sb-logo-yellow.svg"
              width={40}
            />
          </div>
          {/* show only in normal mode */}
          <div className="dark:hidden">
            <Image
              alt="site logo"
              height={40}
              src="/sb-logo-black.svg"
              width={40}
            />
          </div>
          <span className="sr-only">Sunbuggy LLC</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ModeToggle />
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/locations"
          >
            locations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/sign-in"
          >
            Sign In
          </Link>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default Nav;
