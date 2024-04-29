"use client";
import React from "react";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { useSearchParams } from "next/navigation";

export interface StepOneFormProps {
  book_date: Date;
  book_time: string;
}

export interface VehicleInfo {
  vehicleId: string;
  quantity: number;
}

const BookPismo = () => {
  // extract the quote id from the url query params
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("quoteId");
  console.log(quoteId);
  const [stepOneForm, setStepOneForm] = React.useState<
    StepOneFormProps | undefined
  >(undefined);
  return (
    <div className="flex min-h-screen flex-col  mt-5 ml-3 mr-3">
      {stepOneForm ? (
        <StepTwo stepOneResults={stepOneForm} />
      ) : (
        <StepOne setStepOneForm={setStepOneForm} />
      )}
    </div>
  );
};

export default BookPismo;
