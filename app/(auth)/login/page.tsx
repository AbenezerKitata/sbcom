import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";
import { FcGoogle } from "react-icons/fc";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };
  const googleSignIn = async () => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });

    if (data.url) {
      redirect(data.url); // use the redirect API for your server framework
    }
    if (error) {
      console.error(error);
    }
  };

  const resetPassword = async (formData: FormData) => {
    "use server";
    console.log("run reset password");
    const supabase = createClient();
    const email = formData.get("email") as string;
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset",
    });
    if (error) {
      console.error(error);
    }
    return redirect(
      "/login?message=Check email to continue reset password process"
    );
  };
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-20 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <form className="animate-in  flex flex-col w-full justify-center gap-2 text-foreground">
        <SubmitButton
          formAction={googleSignIn}
          className="bg-blue-700 rounded-md px-4 py-2 text-foreground mb-2 flex items-center justify-center gap-2"
          pendingText="Signing In..."
        >
          <FcGoogle />
          Continue With Google
        </SubmitButton>
      </form>
      <div>
        <p className="text-center">or</p>
      </div>
      <form className="animate-in  flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        <SubmitButton
          formAction={resetPassword}
          className="underline py-2  text-foreground mb-2 text-end"
          pendingText="processing..."
        >
          Forgot Password
        </SubmitButton>
      </form>

      {searchParams?.message && (
        <p
          className={`mt-4 p-4 bg-foreground/10 text-foreground text-center ${
            searchParams.message === "Could not authenticate user"
              ? "text-red-600"
              : "text-green-500"
          }`}
        >
          ‼️ {searchParams.message} ‼️
        </p>
      )}
    </div>
  );
}
