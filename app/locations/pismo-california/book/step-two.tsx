"use client";
import React from "react";
import { StepOneFormProps } from "./page";
import FleetSelection from "./fleetSelection";
import { Button } from "@/components/ui/button";

const StepTwo = ({
  stepOneResults,
}: {
  stepOneResults: StepOneFormProps | undefined;
}) => {
  const [selectedHour, setSelectedHour] = React.useState<string>("2hrs");
  const hours = ["1hr", "2hrs", "3hrs", "4hrs"];
  return (
    <div>
      <div className="text-sm ">
        <div className="text-zinc-500">
          <ul>
            <li>
              <strong>Booking Date:</strong>{" "}
              {stepOneResults?.book_date.toISOString().split("T")[0]}
            </li>
            <li>
              <strong>Booking Time:</strong> {stepOneResults?.book_time}
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h1>Step Two</h1>
        </div>
        <div className="flex gap-3">
          {" "}
          {hours.map((hour) => (
            <Button
              key={hour}
              onClick={() => {
                setSelectedHour(hour);
              }}
              variant={selectedHour === hour ? "default" : "ghost"}
            >
              {hour}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2>Choose Fleet</h2>
        <div className="flex flex-col gap-2 ">
          {
            // loop for dummy data display 20 fleet selection
            Array.from(Array(20).keys()).map((i) => (
              <FleetSelection key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
