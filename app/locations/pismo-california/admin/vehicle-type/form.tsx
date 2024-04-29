"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { addData } from "@/actions/actions.vehicle-type";

const FormSchema = z.object({
  prefix: z.string().min(1, {
    message: "prefix must be at least 1 characters.",
  }),
  name: z.string().min(1, {
    message: "name must be at least 1 characters.",
  }),
  description: z.string().min(5, {
    message: "description must be at least 5 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prefix: "",
      name: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    await addData(data);
    form.reset();
  }

  return (
    <Form {...form}>
      {/* <form
        onSubmit={form.handleSubmit((data) => addData(data))}
        className="space-y-6"
      > */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="prefix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prefix</FormLabel>
              <FormControl>
                <Input placeholder="Eg: SB" {...field} />
              </FormControl>
              <FormDescription>
                Prefix identifier for our vehicle type, eg: Q, SB ...
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Eg: Buggy" {...field} />
              </FormControl>
              <FormDescription>
                The full name of the type of the vehicle.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Detailed description..." {...field} />
              </FormControl>
              <FormDescription>
                The full name of the type of the vehicle.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" float-end" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
