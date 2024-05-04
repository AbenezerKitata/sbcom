import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1>Admin Page</h1>
      <div>
        <ul>
          <li className="hover:underline hover:text-amber-600 text-xs mb-2">
            {" "}
            <Link
              className="flex gap-2"
              href="/locations/pismo-california/admin/vehicle-type"
              target="_blank"
            >
              Create a new vehicle type
              <ExternalLink className="w-4 h-4" />
            </Link>
          </li>
          <li className="hover:underline hover:text-amber-600 text-xs mb-2">
            {" "}
            <Link
              className="flex gap-2"
              href="/locations/pismo-california/admin/vehicle"
              target="_blank"
            >
              Create a new vehicle
              <ExternalLink className="w-4 h-4" />
            </Link>
          </li>
        </ul>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default AdminPage;
