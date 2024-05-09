"use server";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { InferInsertModel, InferSelectModel, eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { revalidatePath } from "next/cache";
export type UserType = InferSelectModel<typeof user>;
type OmitId<T> = Omit<T, "id">;

export type InsertUserType = OmitId<InferInsertModel<typeof user>>;
export async function getData(): Promise<UserType[]> {
  try {
    const data: UserType[] = await db.select().from(user).orderBy(user.name);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch vehicle-type data");
  }
}

export async function addData(data: InsertUserType) {
  const id = createId();
  const completeData = { ...data, id };
  await db.insert(user).values(completeData);
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
}
export async function editData(data: UserType) {
  await db.update(user).set(data).where(eq(user.id, data.id));
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
}

export const deleteData = async (id: string) => {
  await db.delete(user).where(eq(user.id, id));
  revalidatePath("/locations/pismo-california/admin/vehicle-type");
};

export const findData = async (id: string) => {
  const data = await db.select().from(user).where(eq(user.id, id));
  return data[0];
};
