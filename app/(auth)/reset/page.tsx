import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      console.error(error);
      return redirect(
        `/login?message=Could not authenticate user ${error.message}`
      );
    }

    return redirect("/protected");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
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
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-sm text-gray-500">
          Enter your new password to reset your password
        </p>
        <label htmlFor="password" className="text-sm text-gray-500">
          New Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={resetPassword}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Reset Password{" "}
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
