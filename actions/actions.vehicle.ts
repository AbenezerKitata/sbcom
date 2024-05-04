"use server";
import { db } from "@/drizzle/db";
import { vehicle } from "@/drizzle/schema";
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { revalidatePath } from "next/cache";

export type Vehicle = InferSelectModel<typeof vehicle>;
type OmitId<T> = Omit<T, "id">;

export type InsertVehicle = OmitId<InferInsertModel<typeof vehicle>>;
export async function getData() {
  try {
    const data: Vehicle[] = await db
      .select()
      .from(vehicle)
      .orderBy(vehicle.titleName);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch vehicle data ");
  }
}

export async function addData(data: InsertVehicle) {
  const id = createId();
  const completeData = { ...data, id };
  // change the registrationExpiry to a timestamp
  completeData.registrationExpiry = completeData?.registrationExpiry
    ? new Date(completeData.registrationExpiry).toISOString()
    : null;
  await db.insert(vehicle).values(completeData);
  revalidatePath("/locations/pismo-california/admin/vehicle");
}
export async function editData(data: Vehicle) {
  // change the registrationExpiry to a timestamp
  data.registrationExpiry = data?.registrationExpiry
    ? new Date(data.registrationExpiry).toISOString()
    : null;
  await db.update(vehicle).set(data).where(eq(vehicle.id, data.id));
  revalidatePath("/locations/pismo-california/admin/vehicle");
}

export const deleteData = async (id: string) => {
  await db.delete(vehicle).where(eq(vehicle.id, id));
  revalidatePath("/locations/pismo-california/admin/vehicle");
};

export const findData = async (id: string) => {
  const data = await db.select().from(vehicle).where(eq(vehicle.id, id));
  return data[0];
};
