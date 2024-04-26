"use client";
import React from "react";
import StepOne from "./step-one";
import StepTwo from "./step-two";

export interface StepOneFormProps {
  book_date: Date;
  book_time: string;
}

const BookPismo = () => {
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
