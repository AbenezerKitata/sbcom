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
import {
  InsertVehicleType,
  editData,
  findData,
} from "@/actions/actions.vehicle-type";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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

export function InputForm({ id }: { id: string }) {
  const [data, setData] = useState({
    prefix: "",
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(true); // new loading state

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    form.reset(data); // reset form with the updated data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  async function fetchData(id: string) {
    try {
      const fetchedData = await findData(id);
      setData({
        prefix: fetchedData.prefix || "",
        name: fetchedData.name || "",
        description: fetchedData.description || "",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to fetch data",
      });
    }
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: data,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await editData({ ...data, id });
    toast({
      title: "Success",
      description: "Vehicle type updated successfully",
      duration: 1000,
    });
  }

  if (loading) {
    return "loading...";
  }

  return (
    <Form {...form}>
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
        {/* <Button className=" float-end" type="submit"> */}
        <Button
          className=" float-end"
          type="button"
          onClick={form.handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
