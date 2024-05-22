"use client";
import {
  googleSignIn,
  signInWithEmail,
  verifyOtp,
} from "@/actions/actions.auth";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const userAuthSchema = z.object({
  email: z.string().email(),
  code: z.string().min(6).nullable().optional(),
});

type FormData = z.infer<typeof userAuthSchema>;
export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showCode, setShowCode] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    if (!showCode) {
      await signInWithEmail(data.email);
    } else {
      await verifyOtp(data.code!, data.email);
    }
    setIsLoading(false);
    setShowCode(!showCode);
  }

  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div
            className={` gap-1 ${showCode && "hidden"} ${!showCode && "grid"}`}
          >
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          {!showCode && (
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          )}
          {showCode && (
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="code">
                  Code
                </Label>
                <Input
                  id="code"
                  placeholder="Code"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  disabled={isLoading}
                  {...register("code")}
                />
                {errors?.code && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.code.message}
                  </p>
                )}
              </div>
              <Button disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit Code
              </Button>
            </div>
          )}
        </div>
      </form>
      {!showCode && (
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      )}
      {!showCode && (
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            googleSignIn();
          }}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
      )}
      {message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center text-green-700 ">
          {message}
        </p>
      )}
    </div>
  );
}
