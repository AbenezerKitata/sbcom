import { z } from "zod";
import { StepOneFormProps } from "./page";
import StepOneForm from "./step-one-form";
// import ToasterCodeView from "@/components/toaster-code-view";

const FormSchema = z.object({
  book_date: z.date({
    required_error: "A Booking Date is Required.",
  }),
  book_time: z.string({
    required_error: "A Booking Time is Required.",
  }),
});

export default function StepOne({
  setStepOneForm,
}: {
  setStepOneForm: React.Dispatch<
    React.SetStateAction<StepOneFormProps | undefined>
  >;
}) {
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // ToasterCodeView(data);
    console.log(data);
    setStepOneForm(data);
  }

  return <StepOneForm onSubmit={onSubmit} />;
}
