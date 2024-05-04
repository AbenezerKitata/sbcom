"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function SelectInputFormField({
  form,
  placeholder,
  description,
  label,
  name,
  required = false,
  object,
  selectedColumn,
}: {
  form: any;
  placeholder?: string;
  description?: string;
  label: string;
  name: string;
  required?: boolean;
  object: any[];
  selectedColumn: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {object.map((itm) => (
                <SelectGroup key={itm.id}>
                  <SelectItem value={itm.id}>{itm[selectedColumn]}</SelectItem>
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          <FormDescription> {description} </FormDescription>
          <FormMessage />
        </FormItem>
      )}
      rules={{ required: required }}
    />
  );
}
