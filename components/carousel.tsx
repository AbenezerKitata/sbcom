"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  const imageArray = [
    { alt: "buggy vegas neutral", src: "/buggy-vegas-neutral.jpg" },
    { alt: "buggy vegas view", src: "/buggy-vegas-view.jpg" },
    // { alt: "sb rotating yellow", src: "/sb-rotating-yellow.gif" },
  ];
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      className="w-full "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageArray.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative ">
                  <Image
                    src={image.src}
                    fill
                    alt={image.alt}
                    sizes="auto"
                    className=" object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
