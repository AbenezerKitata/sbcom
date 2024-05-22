import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/?message=Signed out!");
  };

  // console.log(user?.user_metadata.full_name);
  console.log("Auth-button-page-user", user);
  console.log("Auth-button-page-error", error);
  const uname = user?.user_metadata.full_name
    ? user?.user_metadata.full_name.split(" ")[0]
    : user?.user_metadata.email;
  return user ? (
    <div className="flex items-center gap-4  ">
      <span className="md:flex hidden ">Hey, {uname}!</span>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/sign-in"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Sign In
    </Link>
  );
}
