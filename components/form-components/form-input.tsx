"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function TextInputFormField({
  form,
  placeholder,
  description,
  label,
  name,
  type = "text",
  required = false,
}: {
  form: any;
  placeholder?: string;
  description?: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              autoFocus={false}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
      rules={{ required: required }}
    />
  );
}
