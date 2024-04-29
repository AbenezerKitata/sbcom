"use client";

import * as React from "react";
import { ChevronsUpDown, ExternalLink, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 "
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-md font-semibold ">Directory</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm flex justify-center">
        <Link
          className="flex gap-2"
          href="/locations/pismo-california/admin"
          target="_blank"
        >
          Admin
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
      <CollapsibleContent className="space-y-2">
        <Link
          className="flex gap-2 justify-center"
          href="/locations/pismo-california/admin"
          target="_blank"
        >
          Other
          <ExternalLink className="w-4 h-4" />
        </Link>
        <Link
          className="flex gap-2 justify-center"
          href="/locations/pismo-california/admin"
          target="_blank"
        >
          Another
          <ExternalLink className="w-4 h-4" />
        </Link>
      </CollapsibleContent>
    </Collapsible>
  );
}
