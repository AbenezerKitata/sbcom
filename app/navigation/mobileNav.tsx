import { Button } from "@/components/ui/button";
import { AlignCenter } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="lg:hidden flex items-center">
      {/* <Button variant="ghost" size="sm_icon">
        <AlignCenter />
      </Button> */}
      <Sheet>
        <SheetTrigger>
          {" "}
          <AlignCenter />
        </SheetTrigger>
        <SheetContent side="left" className="pr-0 rounded-r-2xl">
          <SheetHeader>
            <SheetTitle className="flex items-center">
              <span className="mr-2 hidden dark:block">
                <Image
                  src="/sb-logo-yellow.svg"
                  alt="sunbuggy's logo"
                  height={50}
                  width={50}
                />{" "}
              </span>
              <span className="mr-2  block dark:hidden">
                <Image
                  src="/sb-logo-black.svg"
                  alt="sunbuggy's logo"
                  height={50}
                  width={50}
                />{" "}
              </span>
              Sunbuggy Fun Rentals
            </SheetTitle>
            <SheetDescription>Some Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
