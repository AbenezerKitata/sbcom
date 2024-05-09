import { getData } from "@/actions/actions.user";
import React from "react";
import UserTable from "./table";

export default async function UserPage() {
  const data = await getData();
  return (
    <div>
      <UserTable data={data} />
    </div>
  );
}
