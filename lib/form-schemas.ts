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
  subType: z.string().min(1, {
    message: "Sub type must be at least 1 characters.",
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

export const UserFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  role: z.coerce.number(),
  userName: z.string().nullable(),
  emailVerified: z.string().nullable(),
  image: z.string().nullable(),
  profilePic: z.string().nullable(),
  location: z.string().nullable(),
});
