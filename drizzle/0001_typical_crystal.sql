DO $$ BEGIN
 CREATE TYPE "vehicle_status_enum" AS ENUM('REPAIR', 'AVAILABLE', 'MAINTENANCE', 'RETIRED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicleStatus" (
	"id" text PRIMARY KEY NOT NULL,
	"vehicle_id" text NOT NULL,
	"status" "vehicle_status_enum" DEFAULT 'AVAILABLE' NOT NULL,
	"notes" text,
	"return_date" date,
	"updated_at" timestamp(3) NOT NULL,
	"updated_by" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";
--> statement-breakpoint
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";
--> statement-breakpoint
ALTER TABLE "Post" DROP CONSTRAINT "Post_updatedById_fkey";
--> statement-breakpoint
ALTER TABLE "Post" DROP CONSTRAINT "Post_deletedById_fkey";
--> statement-breakpoint
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";
--> statement-breakpoint
ALTER TABLE "resShuttle" DROP CONSTRAINT "resShuttle_shuttleId_fkey";
--> statement-breakpoint
ALTER TABLE "new_veh" DROP CONSTRAINT "new_veh_attachedID_fkey";
--> statement-breakpoint
ALTER TABLE "UnattachedData" DROP CONSTRAINT "UnattachedData_groupsId_fkey";
--> statement-breakpoint
ALTER TABLE "License" DROP CONSTRAINT "License_waiverId_fkey";
--> statement-breakpoint
ALTER TABLE "License" DROP CONSTRAINT "License_locationId_fkey";
--> statement-breakpoint
ALTER TABLE "vehicle" DROP CONSTRAINT "vehicle_vehicleTypeId_fkey";
--> statement-breakpoint
ALTER TABLE "additionalfees_offer" DROP CONSTRAINT "additionalfees_offer_offer_id_fkey";
--> statement-breakpoint
ALTER TABLE "additionalfees_offer" DROP CONSTRAINT "additionalfees_offer_additionalfees_id_fkey";
--> statement-breakpoint
ALTER TABLE "discount_offer" DROP CONSTRAINT "discount_offer_offer_id_fkey";
--> statement-breakpoint
ALTER TABLE "discount_offer" DROP CONSTRAINT "discount_offer_discount_id_fkey";
--> statement-breakpoint
ALTER TABLE "peakRate_offer" DROP CONSTRAINT "peakRate_offer_peak_id_fkey";
--> statement-breakpoint
ALTER TABLE "peakRate_offer" DROP CONSTRAINT "peakRate_offer_offer_id_fkey";
--> statement-breakpoint
ALTER TABLE "vehicle_offer" DROP CONSTRAINT "vehicle_offer_vehicle_id_fkey";
--> statement-breakpoint
ALTER TABLE "vehicle_offer" DROP CONSTRAINT "vehicle_offer_offer_id_fkey";
--> statement-breakpoint
ALTER TABLE "Waivers" DROP CONSTRAINT "Waivers_booking_id_fkey";
--> statement-breakpoint
ALTER TABLE "shuttleAssign" ALTER COLUMN "date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Groups" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "location" text;--> statement-breakpoint
ALTER TABLE "vehicle" ADD COLUMN "year" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_User_id_fk" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_updatedById_User_id_fk" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_deletedById_User_id_fk" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "resShuttle" ADD CONSTRAINT "resShuttle_shuttleId_shuttleAssign_id_fk" FOREIGN KEY ("shuttleId") REFERENCES "shuttleAssign"("id") ON DELETE no action ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "new_veh" ADD CONSTRAINT "new_veh_attachedID_attached_id_fk" FOREIGN KEY ("attachedID") REFERENCES "attached"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UnattachedData" ADD CONSTRAINT "UnattachedData_groupsId_Groups_id_fk" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "License" ADD CONSTRAINT "License_locationId_Location_id_fk" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "License" ADD CONSTRAINT "License_waiverId_SmartWaiver_waiverId_fk" FOREIGN KEY ("waiverId") REFERENCES "SmartWaiver"("waiverId") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_vehicleTypeId_vehicleType_id_fk" FOREIGN KEY ("vehicleTypeId") REFERENCES "vehicleType"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "additionalfees_offer" ADD CONSTRAINT "additionalfees_offer_offer_id_offer_id_fk" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "additionalfees_offer" ADD CONSTRAINT "additionalfees_offer_additionalfees_id_additionalfees_id_fk" FOREIGN KEY ("additionalfees_id") REFERENCES "additionalfees"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discount_offer" ADD CONSTRAINT "discount_offer_offer_id_offer_id_fk" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discount_offer" ADD CONSTRAINT "discount_offer_discount_id_discountrate_id_fk" FOREIGN KEY ("discount_id") REFERENCES "discountrate"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peakRate_offer" ADD CONSTRAINT "peakRate_offer_offer_id_offer_id_fk" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peakRate_offer" ADD CONSTRAINT "peakRate_offer_peak_id_peakrate_id_fk" FOREIGN KEY ("peak_id") REFERENCES "peakrate"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_offer" ADD CONSTRAINT "vehicle_offer_offer_id_offer_id_fk" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_offer" ADD CONSTRAINT "vehicle_offer_vehicle_id_vehicle_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Waivers" ADD CONSTRAINT "Waivers_booking_id_bookings_id_fk" FOREIGN KEY ("booking_id") REFERENCES "bookings"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicleStatus" ADD CONSTRAINT "vehicleStatus_vehicle_id_vehicle_id_fk" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
