import { db } from "@/drizzle/db";
import { vehicleType } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getData = async () => {
  try {
    const data = await db.select().from(vehicleType).orderBy(vehicleType.name);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addData = async (
  id: string,
  name: string,
  prefix: string,
  description: string
) => {
  await db.insert(vehicleType).values({
    id: id,
    name: name,
    prefix: prefix,
    description: description,
  });
};

export const editData = async (
  id: string,
  name: string,
  prefix: string,
  description: string
) => {
  await db
    .update(vehicleType)
    .set({
      name: name,
      prefix: prefix,
      description: description,
    })
    .where(eq(vehicleType.id, id));
};

export const deleteData = async (id: string) => {
  await db.delete(vehicleType).where(eq(vehicleType.id, id));
};
