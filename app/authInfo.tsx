"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export const AuthInfo = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    if (count === 0) {
      // Code to make the message disappear
    }
  }, [count]);

  return <div>{count > 0 ? <div>{message}</div> : <div></div>}</div>;
};
