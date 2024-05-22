"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return <div>{message}</div>;
};

export default ErrorPage;
