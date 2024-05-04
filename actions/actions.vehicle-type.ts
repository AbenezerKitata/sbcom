"use server";
import { db } from "@/drizzle/db";
import { vehicleType } from "@/drizzle/schema";
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { revalidatePath } from "next/cache";
export type VehicleType = InferSelectModel<typeof vehicleType>;
type OmitId<T> = Omit<T, "id">;

export type InsertVehicleType = OmitId<InferInsertModel<typeof vehicleType>>;
export async function getData(): Promise<VehicleType[]> {
  try {
    const data: VehicleType[] = await db
      .select()
      .from(vehicleType)
      .orderBy(vehicleType.name);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch vehicle-type data");
  }
}

export async function addData(data: InsertVehicleType) {
  const id = createId();
  const completeData = { ...data, id };
  await db.insert(vehicleType).values(completeData);
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
}
export async function editData(data: VehicleType) {
  await db.update(vehicleType).set(data).where(eq(vehicleType.id, data.id));
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
}

export const deleteData = async (id: string) => {
  await db.delete(vehicleType).where(eq(vehicleType.id, id));
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
};

export const findData = async (id: string) => {
  const data = await db
    .select()
    .from(vehicleType)
    .where(eq(vehicleType.id, id));
  return data[0];
};
