"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function LandingNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pathname === "/" && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onPointerMove={(event) => event.preventDefault()}
              onPointerLeave={(event) => event.preventDefault()}
            >
              Explore
            </NavigationMenuTrigger>
            <NavigationMenuContent
              onPointerMove={(event) => event.preventDefault()}
              onPointerLeave={(event) => event.preventDefault()}
              onMouseLeave={(event) => event.preventDefault()}
              className="w-72"
            >
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 hidden md:block ">
                  <NavigationMenuLink
                    onPointerMove={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                    onMouseLeave={(event) => event.preventDefault()}
                    asChild
                  >
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-1 mt-1 text-lg font-medium">
                        <Image
                          src="/sb-logo-yellow.svg"
                          width={50}
                          height={50}
                          alt="Sunbuggy's logo"
                        />
                        <h3 className="mt-2">Sunbuggy Fun Rentals</h3>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Get the best off road experience in our three locations
                        spread across the united states.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/locations/las-vegas" title="Las Vegas">
                  6925 Speedway Blvd C106, Las Vegas, NV 89115 | 702-644-2855
                </ListItem>
                <ListItem href="/locations/pismo-california" title="Pismo">
                  307 Pier Ave, Oceano, CA 93445 | 805-244-9721
                </ListItem>
                <ListItem
                  href="/locations/silverlake-michigan"
                  title="Silverlake"
                >
                  1931 N 24th Ave, Mears, MI 49436 | 517 271-8585
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <NavigationMenuTrigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
          >
            Learn and Connect
          </NavigationMenuTrigger>
          <NavigationMenuContent
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            onMouseLeave={(event) => event.preventDefault()}
            className="w-72"
          >
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/about" title="About Us">
                Learn more about our company & mission.
              </ListItem>
              <ListItem href="/faqs" title="FAQs">
                Get answers to common questions.
              </ListItem>
              <ListItem href="/blog" title="Blog/News">
                Stay up to date with our latest news and events.
              </ListItem>
              <ListItem href="/safety" title="Safety Tips">
                Learn how to stay safe while having fun.
              </ListItem>
              <ListItem href="/reviews" title="Reviews/Testimonials">
                See what our customers are saying about us.
              </ListItem>
              <ListItem href="/special-offers" title="Special Offers/Deals">
                Check out our current promotions and discounts.
              </ListItem>
              <ListItem href="/contact" title="Contact Us">
                Get in touch with us.
              </ListItem>
              <ListItem
                href="/terms-and-conditions"
                title="Terms and Conditions"
              >
                Read our terms and conditions.
              </ListItem>
              <ListItem href="/privacy-policy" title="Privacy Policy">
                Read our privacy policy.
              </ListItem>
              <ListItem href="/socials" title="Social Media">
                Check out our socials.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        onPointerMove={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
        asChild
      >
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
