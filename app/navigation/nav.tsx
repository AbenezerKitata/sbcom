import React from "react";
import { LandingNav } from "./landingNav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileNav from "./mobileNav";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
const canInitSupabaseClient = () => {
  try {
    createClient();
    return true;
  } catch (e) {
    return false;
  }
};

const isSupabaseConnected = canInitSupabaseClient();
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
          {isSupabaseConnected ? (
            <AuthButton />
          ) : (
            <>
              <Link href="/sign-in">signin</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
