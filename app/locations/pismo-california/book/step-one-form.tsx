"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, TimerIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { availableTimes, getYesterday } from "@/utils";
export const FormSchema = z.object({
  book_date: z.date({
    required_error: "A Booking Date is Required.",
  }),
  book_time: z.string({
    required_error: "A Booking Time is Required.",
  }),
});
const StepOneForm = ({
  onSubmit,
}: {
  onSubmit(data: z.infer<typeof FormSchema>): void;
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const yesterday = getYesterday();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="book_date"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">
                Step 1 of 5
              </FormLabel>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Booking Date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(e) => {
                      field.onChange(e);
                      setIsCalendarOpen(false);
                    }}
                    disabled={(date) => date < yesterday}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="book_time"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <SelectValue placeholder="Booking Time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableTimes().map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                We will reserve your booking for the selected Date and time.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Next &rarr;</Button>
      </form>
    </Form>
  );
};

export default StepOneForm;
