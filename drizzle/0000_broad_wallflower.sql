-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "vehicle_status" AS ENUM('UNAVAILABLE', 'AVAILABLE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "feetype" AS ENUM('PERCENTAGE', 'FLAT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "offertype" AS ENUM('ADVENTURE', 'FLEET');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"sessionToken" text NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Post" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"published" boolean DEFAULT false,
	"category" text,
	"authorId" text NOT NULL,
	"updatedById" text,
	"deletedById" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_tokens" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expiresAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "TaskPriority" (
	"id" text PRIMARY KEY NOT NULL,
	"tech" text,
	"priority" integer DEFAULT 0,
	"buggyID" text,
	"tagID" text,
	"description" text,
	"type" text,
	"date_broken" text,
	"pic" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Event" (
	"id" text PRIMARY KEY NOT NULL,
	"plannerName" text NOT NULL,
	"email" text NOT NULL,
	"phoneNumber" text NOT NULL,
	"eventName" text NOT NULL,
	"organization" text NOT NULL,
	"eventDate" text NOT NULL,
	"pickupTime" text NOT NULL,
	"dropoffTime" text NOT NULL,
	"nofppl" integer NOT NULL,
	"offeredServices" text[],
	"bookingType" text NOT NULL,
	"transportNotes" text,
	"pickupLocation" text,
	"dropoffLocation" text,
	"food" text,
	"addon" text[],
	"apparel" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Account" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp(3),
	"image" text,
	"role" integer DEFAULT 100 NOT NULL,
	"userName" text,
	"profilePic" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Adventure" (
	"id" text PRIMARY KEY NOT NULL,
	"vehicle" text,
	"seats" integer,
	"price" integer,
	"rideId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Fees" (
	"id" text PRIMARY KEY NOT NULL,
	"updated_at" text,
	"fee_name" text NOT NULL,
	"amount" integer NOT NULL,
	"percentage" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shuttleAssign" (
	"id" text PRIMARY KEY NOT NULL,
	"shuttle" text NOT NULL,
	"driver" text NOT NULL,
	"date" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resShuttle" (
	"id" text PRIMARY KEY NOT NULL,
	"res_id" text NOT NULL,
	"shuttleId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "new_veh" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"amount" integer NOT NULL,
	"attachedID" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Groups" (
	"id" text PRIMARY KEY NOT NULL,
	"groupName" text NOT NULL,
	"lead" text,
	"sweep" text,
	"dateTime" timestamp(3) NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UnattachedData" (
	"id" text PRIMARY KEY NOT NULL,
	"groupsId" text NOT NULL,
	"resId" text NOT NULL,
	"vehicleName" text,
	"qty" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "attached" (
	"id" text PRIMARY KEY NOT NULL,
	"dateTime" timestamp(3) NOT NULL,
	"res_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Location" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "PicsOfDay" (
	"id" text PRIMARY KEY NOT NULL,
	"theDay" text,
	"theList" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "callLog" (
	"id" text PRIMARY KEY NOT NULL,
	"res_id" text NOT NULL,
	"staff" text NOT NULL,
	"dateTime" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "SmartWaiver" (
	"id" serial PRIMARY KEY NOT NULL,
	"waiverId" text NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"autoTag" text NOT NULL,
	"createdOn" timestamp(3) NOT NULL,
	"dob" timestamp(3) NOT NULL,
	"expirationDate" text,
	"expired" boolean NOT NULL,
	"isMinor" boolean NOT NULL,
	"kiosk" boolean NOT NULL,
	"middleName" text,
	"prefillId" text,
	"tags" text[],
	"templateId" text NOT NULL,
	"title" text NOT NULL,
	"verified" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "License" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"locationId" text NOT NULL,
	"waiverId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Reservation" (
	"id" text PRIMARY KEY NOT NULL,
	"res_id" text NOT NULL,
	"res_email" text,
	"precalled" boolean DEFAULT false NOT NULL,
	"precalled_by" text,
	"notes" text,
	"called_at" timestamp(3),
	"changedLocation" boolean DEFAULT false NOT NULL,
	"whereChangedLocation" text,
	"noAnswer" boolean DEFAULT false NOT NULL,
	"noValidContact" boolean DEFAULT false NOT NULL,
	"checkinTime" timestamp(3),
	"checkoutTime" timestamp(3),
	"dropoffTime" timestamp(3),
	"landTime" timestamp(3),
	"launchTime" timestamp(3),
	"pickupTime" timestamp(3)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "additionalfees" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"fee_type" "feetype" NOT NULL,
	"fee_amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bookings" (
	"id" text PRIMARY KEY NOT NULL,
	"when_booked" timestamp(3) NOT NULL,
	"for_when" timestamp(3) NOT NULL,
	"number_of_ppl" integer NOT NULL,
	"offer_id" text NOT NULL,
	"total_cost" integer NOT NULL,
	"waiver_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discountrate" (
	"id" text PRIMARY KEY NOT NULL,
	"discount_value" integer NOT NULL,
	"code" varchar(255),
	"discount_type" "feetype" NOT NULL,
	"active" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "peakrate" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"peak_fee_amount" integer NOT NULL,
	"peak_fee_type" "feetype" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "offer" (
	"id" text PRIMARY KEY NOT NULL,
	"offer_name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicle" (
	"id" text PRIMARY KEY NOT NULL,
	"vehicleTypeId" text NOT NULL,
	"seats" integer NOT NULL,
	"title_name" text,
	"photo" text,
	"current_location" text,
	"color" text,
	"vin" text,
	"engine_number" text,
	"IFTA" text,
	"licence_number" text,
	"registration_expiry" timestamp(3),
	"cfn" text,
	"title_upload_pic" text,
	"character" text NOT NULL,
	"fleet_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "whoViewedPage" (
	"id" text PRIMARY KEY NOT NULL,
	"page" text NOT NULL,
	"staff" text DEFAULT 'no user name yet' NOT NULL,
	"dateTime" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "locations" (
	"id" text PRIMARY KEY NOT NULL,
	"location_name" varchar(255) NOT NULL,
	"coord_range_from" varchar(255) NOT NULL,
	"coord_range_to" varchar(255) NOT NULL,
	"location_open_status" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "additionalfees_offer" (
	"id" text PRIMARY KEY NOT NULL,
	"offer_id" text NOT NULL,
	"additionalfees_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discount_offer" (
	"id" text PRIMARY KEY NOT NULL,
	"offer_id" text NOT NULL,
	"discount_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "peakRate_offer" (
	"id" text PRIMARY KEY NOT NULL,
	"offer_id" text NOT NULL,
	"peak_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicleType" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"prefix" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicle_offer" (
	"id" text PRIMARY KEY NOT NULL,
	"offer_id" text NOT NULL,
	"vehicle_id" text NOT NULL,
	"base_rate" double precision
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Waivers" (
	"id" text PRIMARY KEY NOT NULL,
	"booking_id" text NOT NULL,
	"status" text NOT NULL,
	"reservationId" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "sessions_sessionToken_key" ON "sessions" ("sessionToken");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "Post_slug_key" ON "Post" ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "verification_tokens_token_key" ON "verification_tokens" ("token");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "verification_tokens_identifier_token_key" ON "verification_tokens" ("identifier","token");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "Account_provider_providerAccountId_key" ON "Account" ("provider","providerAccountId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "Reservation_res_id_key" ON "Reservation" ("res_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "public"."User"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Post" ADD CONSTRAINT "Post_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "public"."User"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "resShuttle" ADD CONSTRAINT "resShuttle_shuttleId_fkey" FOREIGN KEY ("shuttleId") REFERENCES "public"."shuttleAssign"("id") ON DELETE no action ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "new_veh" ADD CONSTRAINT "new_veh_attachedID_fkey" FOREIGN KEY ("attachedID") REFERENCES "public"."attached"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UnattachedData" ADD CONSTRAINT "UnattachedData_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "public"."Groups"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "License" ADD CONSTRAINT "License_waiverId_fkey" FOREIGN KEY ("waiverId") REFERENCES "public"."SmartWaiver"("waiverId") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "License" ADD CONSTRAINT "License_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "public"."vehicleType"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "additionalfees_offer" ADD CONSTRAINT "additionalfees_offer_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "public"."offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "additionalfees_offer" ADD CONSTRAINT "additionalfees_offer_additionalfees_id_fkey" FOREIGN KEY ("additionalfees_id") REFERENCES "public"."additionalfees"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discount_offer" ADD CONSTRAINT "discount_offer_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "public"."offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discount_offer" ADD CONSTRAINT "discount_offer_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "public"."discountrate"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peakRate_offer" ADD CONSTRAINT "peakRate_offer_peak_id_fkey" FOREIGN KEY ("peak_id") REFERENCES "public"."peakrate"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "peakRate_offer" ADD CONSTRAINT "peakRate_offer_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "public"."offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_offer" ADD CONSTRAINT "vehicle_offer_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicle"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_offer" ADD CONSTRAINT "vehicle_offer_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "public"."offer"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Waivers" ADD CONSTRAINT "Waivers_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "public"."bookings"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/