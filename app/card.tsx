"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardElementProps {
  cardTitle?: string;
  cardDescription?: string;
  cardContent: React.ReactNode;
  showCardFooterButton?: boolean;
}

const CardElement: React.FC<CardElementProps> = ({
  cardTitle = "Card Title",
  cardDescription = "",
  cardContent,
  showCardFooterButton = false,
}) => {
  return (
    <Card className="w-[375px]">
      <CardHeader className="pt-6 pb-1">
        <CardTitle className="text-center">
          {cardTitle} {/* string*/}
        </CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {cardContent} {/* div element */}
      </CardContent>
      {showCardFooterButton && (
        <CardFooter className="flex justify-center">
          <Button>Some Button</Button>
        </CardFooter>
      )}
    </Card>
  );
};
export default CardElement;
