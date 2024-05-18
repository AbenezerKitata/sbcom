"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
      data: {},
    },
  });
  if (error) {
    return redirect(
      `?message=Could not authenticate user, Error:${error.message}`
    );
  }
  return redirect(`/sign-in?message=Check your  email for the magic link `);
}
export async function verifyOtp(token_hash: string) {
  const { error } = await supabase.auth.verifyOtp({
    type: "email",
    token_hash,
  });
  if (error) {
    return redirect(
      `/auth/confirm?message=Could not verify OTP, Error:${error.message}`
    );
  }
  return redirect(`/auth/confirm?message=OTP verified successfully`);
}
