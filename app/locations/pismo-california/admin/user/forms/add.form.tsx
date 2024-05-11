"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { addData } from "@/actions/actions.user";
// import { UserType, getData } from "@/actions/actions.user";
// import { useEffect, useState } from "react";
import { TextInputFormField } from "@/components/form-components/form-input";
import { userDefaults } from "@/lib/table-defaults";
import { UserFormSchema as FormSchema } from "@/lib/form-schemas";
import { SelectInputFormField } from "@/components/form-components/form-select";

export default function InputForm() {
  // const [user_types, setUserTypes] = useState<UserType[]>([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // async function fetchData() {
  //   try {
  //     const data = await getData();
  //     setUserTypes(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const locations = ["Pismo", "Las-Vegas", "Silverlake", "Florida"];
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: userDefaults,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await addData(data);
    form.reset();
    setTimeout(() => (document.body.style.pointerEvents = ""), 100);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[425px] max-h-[75vh] overflow-scroll flex flex-col"
      >
        <TextInputFormField
          form={form}
          label="Name"
          name="name"
          placeholder="Name"
          description="This the name of our user"
          required
        />
        <TextInputFormField
          form={form}
          label="Email"
          name="email"
          placeholder="Email"
          description="This the email of our user"
          required
          type="email"
        />
        <TextInputFormField
          form={form}
          label="role"
          name="role"
          placeholder="Role"
          description="This the role of our user"
          required
          type="number"
        />

        <TextInputFormField
          form={form}
          label="User Name"
          name="userName"
          placeholder="User Name"
          description="This the user name of our user"
        />
        <SelectInputFormField
          form={form}
          label="Location"
          name="location"
          placeholder="Location"
          description="This the location of our user"
          object={locations}
        />

        <div className="flex justify-center fixed bottom-20 right-1 w-full">
          <Button className="" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
