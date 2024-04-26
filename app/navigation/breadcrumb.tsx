"use client";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadcrumbWithCustomSeparator() {
  const pathName = usePathname();
  // separate pathname by '/' and make an array of all the paths
  const paths = pathName.split("/");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          /
        </BreadcrumbSeparator> */}
        {/* For every other path other than the first slash Let's create a breadcrumb each separated by breadcrubseparator */}
        {paths.map((path, index) => {
          if (path === "") return null;
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={pathName.split(path)[0] + path}>
                  {path}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
            </React.Fragment>
          );
        })}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/breadcrumb">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
