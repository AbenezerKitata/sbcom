"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { editData, findData } from "@/actions/actions.user";
import { useEffect, useState } from "react";
import { UserFormSchema as FormSchema } from "@/lib/form-schemas";
import { TextInputFormField } from "@/components/form-components/form-input";
import { userDefaults } from "@/lib/table-defaults";
import { SelectInputFormField } from "@/components/form-components/form-select";

export function EditForm({
  id,
  setOpen,
  setDropDownOpen,
}: {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [data, setData] = useState(userDefaults);
  // const [vehicle_types, setVehicleTypes] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    form.reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  async function fetchData(id: string) {
    try {
      const fetchedData = await findData(id);
      // console.log(fetchedData);
      setData({
        email: fetchedData.email || "",
        name: fetchedData.name || "",
        role: fetchedData.role || 0,
        userName: fetchedData.userName || "",
        image: fetchedData.image || "",
        profilePic: fetchedData.profilePic || "",
        emailVerified: fetchedData.emailVerified || "",
        location: fetchedData.location || "",
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

  const locations = ["Pismo", "Las Vegas", "Silverlake", "Florida"];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: data,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    data.emailVerified = data?.emailVerified
      ? new Date(data.emailVerified).toISOString()
      : null;
    await editData({ ...data, id });
    toast({
      title: "Success",
      description: "Vehicle updated successfully",
      duration: 1000,
    });
    setOpen(false);
    setDropDownOpen(false);
  }

  if (loading) {
    return "loading...";
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[425px] max-h-[70vh] overflow-scroll flex flex-col mb-10"
      >
        <TextInputFormField
          form={form}
          label="Name"
          name="name"
          description="name of our user"
          placeholder="Name"
          required
        />

        <TextInputFormField
          form={form}
          label="Email"
          name="email"
          description="email of our user"
          placeholder="Email"
          required
          type="email"
        />
        <TextInputFormField
          form={form}
          label="Role"
          name="role"
          description="role of our user"
          placeholder="Role"
          required
          type="number"
        />
        <TextInputFormField
          form={form}
          label="User Name"
          name="userName"
          description="user name of our user"
          placeholder="User Name"
        />
        <SelectInputFormField
          form={form}
          label="Location"
          name="location"
          placeholder="Choose Location"
          description="This the location of our user"
          array={locations}
          selectedColumn={data.location}
        />

        <div className="flex justify-center fixed bottom-16 right-0 w-full">
          <Button type="submit" variant="outline" className="w-[90%]">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
