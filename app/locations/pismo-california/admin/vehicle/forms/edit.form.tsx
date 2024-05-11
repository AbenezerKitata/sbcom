"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { editData, findData } from "@/actions/actions.vehicle";
import { useEffect, useState } from "react";
import { VehicleType, getData } from "@/actions/actions.vehicle-type";
import { VehicleFormSchema as FormSchema } from "@/lib/form-schemas";
import { SelectInputFormField } from "@/components/form-components/form-select";
import { TextInputFormField } from "@/components/form-components/form-input";
import { vehicleDefaults } from "@/lib/table-defaults";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EditForm({
  id,
  setOpen,
  setDropDownOpen,
}: {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [data, setData] = useState(vehicleDefaults);
  const [vehicle_types, setVehicleTypes] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [moreLess, setMoreLess] = useState("Advanced");
  useEffect(() => {
    fetchData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    form.reset(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  async function fetchData(id: string) {
    try {
      const fetchedData = await findData(id);
      setData({
        seats: fetchedData.seats || 0,
        currentLocation: fetchedData.currentLocation || "",
        color: fetchedData.color || "",
        character: fetchedData.character || "",
        subType: fetchedData.subType || "",
        fleetNumber: fetchedData.fleetNumber || "",
        titleName: fetchedData.titleName || "",
        titleUploadPic: fetchedData.titleUploadPic || "",
        vin: fetchedData.vin || "",
        engineNumber: fetchedData.engineNumber || "",
        ifta: fetchedData.ifta || "",
        licenceNumber: fetchedData.licenceNumber || "",
        registrationExpiry: fetchedData.registrationExpiry || "",
        cfn: fetchedData.cfn || "",
        vehicleTypeId: fetchedData.vehicleTypeId || "",
        photo: fetchedData.photo || "",
        year: fetchedData.year || "",
      });
      const vehicle_types_data = await getData();
      setVehicleTypes(vehicle_types_data);

      setLoading(false);
    } catch (error) {
      console.error(error);
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
        <SelectInputFormField
          form={form}
          label="Vehicle Type"
          name="vehicleTypeId"
          object={vehicle_types}
          selectedColumn="name"
        />
        <TextInputFormField form={form} label="Sub Type" name="subType" />
        <TextInputFormField
          form={form}
          label="Fleet Number"
          name="fleetNumber"
          required={true}
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
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onClick={() =>
            setMoreLess(moreLess === "Advanced" ? "Show Less" : "Advanced")
          }
        >
          <AccordionItem value="item-1">
            <AccordionTrigger> {moreLess}</AccordionTrigger>
            <AccordionContent>
              <TextInputFormField
                form={form}
                label="Registration Expiry"
                name="registrationExpiry"
              />
              <TextInputFormField
                form={form}
                label="Title Name"
                name="titleName"
              />
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-center fixed bottom-16 right-0 w-full">
          <Button type="submit" variant="outline" className="w-[90%]">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
