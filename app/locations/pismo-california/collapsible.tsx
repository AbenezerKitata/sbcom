import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function CollapsibleDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Directory</AccordionTrigger>
        <AccordionContent>
          <Link
            className="flex gap-2 justify-center hover:underline hover:text-amber-500"
            href="/locations/pismo-california/admin"
            target="_blank"
          >
            Admin <ExternalLink className="w-4 h-4" />
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
