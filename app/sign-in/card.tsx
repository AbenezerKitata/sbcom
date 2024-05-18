import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAuthForm from "./form";
import { signInWithEmail } from "@/actions/actions.auth";

const SignInCard = () => {
  return (
    <Card className="w-[360px] p-4">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Logn in to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <UserAuthForm />
      </CardContent>
      <CardFooter>
        <p className="w-full text-center mt-3">Secured By Supabase auth</p>
      </CardFooter>
    </Card>
  );
};

export default SignInCard;
