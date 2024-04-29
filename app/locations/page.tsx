import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const LocationsPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Locations Page</h1>
      <div>
        <ul>
          <li className="hover:underline hover:text-blue-600 text-xs">
            {" "}
            <Link
              className="flex gap-2"
              href="/locations/pismo-california"
              target="_blank"
            >
              Pismo California
              <ExternalLink className="w-4 h-4" />
            </Link>
          </li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationsPage;
