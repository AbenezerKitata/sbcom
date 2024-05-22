"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { VerifyOtpParams } from "@supabase/supabase-js";

const supabase = createClient();

export async function googleSignIn() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
export async function signInWithEmail(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: "http://localhost:3000/auth/callback",
    },
  });
  console.log("oauth-action-data", data);

  if (error) {
    console.error("oauth-action-error", error);
    return redirect(
      `?message=Could not authenticate user, Error:${error.message}`
    );
  }
  return redirect(`/sign-in?message=Check your  email for the code `);
}
export async function verifyOtp(token: string, email: string) {
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    type: "email",
    token,
    email,
  });
  if (error) {
    return redirect(
      `/auth/confirm?message=Could not verify OTP, Error:${error.message}`
    );
  }
  const accessToken = session?.access_token || "";
  const refreshToken = session?.refresh_token || "";
  const { data: dta, error: err } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
  console.log("session-data", dta);
  console.log("session", session);
  if (err) console.log("set-session-error", err);
  return redirect(`/`);
}
