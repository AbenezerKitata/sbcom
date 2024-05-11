"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Vehicle, deleteData } from "@/actions/actions.vehicle";
import { EditDialog } from "@/components/dialog-components/edit-dialog";
import { EditForm } from "./forms/edit.form";
import { DeleteDialog } from "@/components/dialog-components/delete-dialog";
// import { getData } from "@/actions/actions.vehicle-type";

export const columns: ColumnDef<Vehicle>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const Vehicle = row.original;

      return DropDown(Vehicle);
    },
  },
  {
    id: "fleetNumber",
    accessorKey: "fleetNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fleet Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-5">{row.getValue("fleetNumber")}</div>
    ),
  },

  {
    id: "seats",
    accessorKey: "seats",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Seats
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("seats")}</div>,
  },

  {
    id: "currentLocation",
    accessorKey: "currentLocation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Current Location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-5">{row.getValue("currentLocation")}</div>
    ),
  },
  {
    id: "character",
    accessorKey: "character",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Character
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("character")}</div>,
  },

  {
    id: "year",
    accessorKey: "year",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Year
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("year")}</div>,
  },

  {
    id: "color",
    accessorKey: "color",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Color
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("color")}</div>,
  },
  {
    id: "make",
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Make
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("make")}</div>,
  },
  {
    id: "subType",
    accessorKey: "subType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sub Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("subType")}</div>,
  },

  {
    id: "trim",
    accessorKey: "trim",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trim
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("trim")}</div>,
  },
  {
    id: "registrationExpiry",
    accessorKey: "registrationExpiry",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Registration Expiry
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-5">{row.getValue("registrationExpiry")}</div>
    ),
  },
  {
    id: "titleName",
    accessorKey: "titleName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-5">{row.getValue("titleName")}</div>,
  },
  {
    id: "vin",
    accessorKey: "vin",
    header: "Vin",
    cell: ({ row }) => <div>{row.getValue("vin")}</div>,
  },

  {
    id: "engineNumber",
    accessorKey: "engineNumber",
    header: "Engine Number",
    cell: ({ row }) => <div>{row.getValue("engineNumber")}</div>,
  },
  {
    id: "licenceNumber",
    accessorKey: "licenceNumber",
    header: "License Number",
    cell: ({ row }) => <div>{row.getValue("licenceNumber")}</div>,
  },

  {
    id: "cfn",
    accessorKey: "cfn",
    header: "CFN",
    cell: ({ row }) => <div>{row.getValue("cfn")}</div>,
  },
  {
    id: "ifta",
    accessorKey: "ifta",
    header: "IFTA",
    cell: ({ row }) => <div>{row.getValue("ifta")}</div>,
  },
];
export default function DropDown(Vehicle: Vehicle) {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);

  return (
    <DropdownMenu open={dropDownOpen} onOpenChange={setDropDownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className="capitalize"
          //   onClick={(e) => e.preventDefault()}
          onSelect={(e) => e.preventDefault()}
        >
          <EditDialog
            id={Vehicle.id}
            setDropDownOpen={setDropDownOpen}
            item="vehicle"
          >
            {({ setOpen, setDropDownOpen }) => (
              <EditForm
                id={Vehicle.id}
                setOpen={setOpen}
                setDropDownOpen={setDropDownOpen}
              />
            )}
          </EditDialog>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <DeleteDialog
            id={Vehicle.id}
            setDropDownOpen={setDropDownOpen}
            item="vehicle"
            deleteData={deleteData}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
