import React from "react";
import { toast } from "./ui/use-toast";

export default function ToasterCodeView(data: any) {
  return toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
}
