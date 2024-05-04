import { z } from "zod";

export const VehicleFormSchema = z.object({
  vehicleTypeId: z
    .string()
    .min(1, {
      message: "Vehicle type is required.",
    })
    .refine((value) => {
      return value !== "";
    }, "Vehicle type is required."),
  seats: z.coerce.number().min(1, {
    message: "Seats must be at least 1.",
  }),
  titleName: z.string(),
  year: z.string(),
  photo: z.string(),
  currentLocation: z.string(),
  color: z.string(),
  vin: z.string(),
  engineNumber: z.string(),
  ifta: z.string(),
  licenceNumber: z.string(),
  registrationExpiry: z.string(),
  cfn: z.string(),
  titleUploadPic: z.string(),
  character: z.string().min(1, {
    message: "Character must be at least 1 characters.",
  }),
  fleetNumber: z.string().min(1, {
    message: "Fleet number must be at least 1 characters.",
  }),
});
