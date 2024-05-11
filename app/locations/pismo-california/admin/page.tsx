import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  const links = [
    {
      name: "Manage vehicle types",
      href: "/locations/pismo-california/admin/vehicle-type",
    },
    {
      name: "Manage vehicles",
      href: "/locations/pismo-california/admin/vehicle",
    },
    {
      name: "Manage users",
      href: "/locations/pismo-california/admin/user",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-5">
      <h1>Admin Page</h1>
      <ul>
        {links.map((link, idx) => (
          <li
            className="hover:underline hover:text-amber-600 text-xs mb-2"
            key={idx}
          >
            {" "}
            <Link className="flex gap-2" href={link.href} target="_blank">
              {link.name}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </li>
        ))}
      </ul>
      <footer>Footer</footer>
    </div>
  );
};

export default AdminPage;
