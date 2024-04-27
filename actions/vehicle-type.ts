import { db } from "@/drizzle/db";
import { vehicleType } from "@/drizzle/schema";
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm";

export type VehicleType = InferSelectModel<typeof vehicleType>;
export type InsertVehicleType = InferInsertModel<typeof vehicleType>;
export async function getData() {
  try {
    const data: VehicleType[] = await db
      .select()
      .from(vehicleType)
      .orderBy(vehicleType.name);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
}

export async function addData(data: InsertVehicleType) {
  await db.insert(vehicleType).values(data);
}
export async function editData(data: InsertVehicleType) {
  await db.update(vehicleType).set(data).where(eq(vehicleType.id, data.id));
}

export const deleteData = async (id: string) => {
  await db.delete(vehicleType).where(eq(vehicleType.id, id));
};
