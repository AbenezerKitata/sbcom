"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { addData } from "@/actions/actions.vehicle";
import { VehicleType, getData } from "@/actions/actions.vehicle-type";
import { useEffect, useState } from "react";
import { TextInputFormField } from "@/components/form-components/form-input";
import { SelectInputFormField } from "@/components/form-components/form-select";
import { vehicleDefaults } from "@/lib/table-defaults";
import { VehicleFormSchema as FormSchema } from "@/lib/form-schemas";

export function InputForm() {
  const [vehicle_types, setVehicleTypes] = useState<VehicleType[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const data = await getData();
      setVehicleTypes(data);
    } catch (err) {
      console.log(err);
    }
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: vehicleDefaults,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await addData(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-[425px] max-h-[75vh] overflow-scroll flex flex-col"
      >
        <SelectInputFormField
          form={form}
          label="Vehicle Type"
          name="vehicleTypeId"
          object={vehicle_types}
          selectedColumn="name"
        />
        <TextInputFormField form={form} label="Year" name="year" />
        <TextInputFormField
          form={form}
          type="number"
          name="seats"
          label="Seats"
          placeholder="Name"
          description="number of seats"
          required={true}
        />
        <TextInputFormField
          form={form}
          label="Current Location"
          name="currentLocation"
        />
        <TextInputFormField form={form} label="Color" name="color" />
        <TextInputFormField
          form={form}
          label="Character"
          name="character"
          required={true}
        />
        <TextInputFormField
          form={form}
          label="Fleet Number"
          name="fleetNumber"
          required={true}
        />
        <TextInputFormField
          form={form}
          label="Registration Expiry"
          name="registrationExpiry"
        />
        <TextInputFormField form={form} label="Title Name" name="titleName" />
        <TextInputFormField
          form={form}
          label="Title Upload Pic"
          name="titleUploadPic"
        />
        <TextInputFormField form={form} label="VIN" name="vin" />
        <TextInputFormField
          form={form}
          label="Engine Number"
          name="engineNumber"
        />
        <TextInputFormField form={form} label="IFTA" name="ifta" />

        <TextInputFormField
          form={form}
          label="License Number"
          name="licenceNumber"
        />

        <TextInputFormField form={form} label="CFN" name="cfn" />
        <div className="flex justify-center fixed bottom-20 right-1 w-full">
          <Button className="" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
