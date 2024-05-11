import {
  pgTable,
  uniqueIndex,
  foreignKey,
  pgEnum,
  text,
  timestamp,
  boolean,
  integer,
  serial,
  varchar,
  doublePrecision,
  date,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { year } from "drizzle-orm/mysql-core";

export const feetype = pgEnum("feetype", ["PERCENTAGE", "FLAT"]);
export const offertype = pgEnum("offertype", ["ADVENTURE", "FLEET"]);

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey().notNull(),
    sessionToken: text("sessionToken").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    expires: timestamp("expires", { precision: 3, mode: "string" }).notNull(),
  },
  (table) => {
    return {
      sessionTokenKey: uniqueIndex("sessions_sessionToken_key").on(
        table.sessionToken
      ),
    };
  }
);

export const post = pgTable(
  "Post",
  {
    id: text("id").primaryKey().notNull(),
    slug: text("slug"),
    title: text("title").notNull(),
    body: text("body").notNull(),
    published: boolean("published").default(false),
    category: text("category"),
    authorId: text("authorId")
      .notNull()
      .references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" }),
    updatedById: text("updatedById").references(() => user.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    deletedById: text("deletedById").references(() => user.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
  },
  (table) => {
    return {
      slugKey: uniqueIndex("Post_slug_key").on(table.slug),
    };
  }
);

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    id: text("id").primaryKey().notNull(),
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expiresAt: timestamp("expiresAt", {
      precision: 3,
      mode: "string",
    }).notNull(),
  },
  (table) => {
    return {
      tokenKey: uniqueIndex("verification_tokens_token_key").on(table.token),
      identifierTokenKey: uniqueIndex(
        "verification_tokens_identifier_token_key"
      ).on(table.identifier, table.token),
    };
  }
);

export const taskPriority = pgTable("TaskPriority", {
  id: text("id").primaryKey().notNull(),
  tech: text("tech"),
  priority: integer("priority").default(0),
  buggyId: text("buggyID"),
  tagId: text("tagID"),
  description: text("description"),
  type: text("type"),
  dateBroken: text("date_broken"),
  pic: text("pic"),
});

export const event = pgTable("Event", {
  id: text("id").primaryKey().notNull(),
  plannerName: text("plannerName").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phoneNumber").notNull(),
  eventName: text("eventName").notNull(),
  organization: text("organization").notNull(),
  eventDate: text("eventDate").notNull(),
  pickupTime: text("pickupTime").notNull(),
  dropoffTime: text("dropoffTime").notNull(),
  nofppl: integer("nofppl").notNull(),
  offeredServices: text("offeredServices").array(),
  bookingType: text("bookingType").notNull(),
  transportNotes: text("transportNotes"),
  pickupLocation: text("pickupLocation"),
  dropoffLocation: text("dropoffLocation"),
  food: text("food"),
  addon: text("addon").array(),
  apparel: text("apparel").array(),
});

export const account = pgTable(
  "Account",
  {
    id: text("id").primaryKey().notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: integer("expires_at"),
    tokenType: text("token_type"),
    scope: text("scope"),
    idToken: text("id_token"),
    sessionState: text("session_state"),
  },
  (table) => {
    return {
      providerProviderAccountIdKey: uniqueIndex(
        "Account_provider_providerAccountId_key"
      ).on(table.provider, table.providerAccountId),
    };
  }
);

export const user = pgTable(
  "User",
  {
    id: text("id").primaryKey().notNull(),
    name: text("name"),
    email: text("email"),
    emailVerified: timestamp("emailVerified", { precision: 3, mode: "string" }),
    image: text("image"),
    role: integer("role").default(100).notNull(),
    userName: text("userName"),
    profilePic: text("profilePic"),
    location: text("location"),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
    };
  }
);

export const adventure = pgTable("Adventure", {
  id: text("id").primaryKey().notNull(),
  vehicle: text("vehicle"),
  seats: integer("seats"),
  price: integer("price"),
  rideId: text("rideId"),
});

export const fees = pgTable("Fees", {
  id: text("id").primaryKey().notNull(),
  updatedAt: text("updated_at"),
  feeName: text("fee_name").notNull(),
  amount: integer("amount").notNull(),
  percentage: integer("percentage"),
});

export const shuttleAssign = pgTable("shuttleAssign", {
  id: text("id").primaryKey().notNull(),
  shuttle: text("shuttle").notNull(),
  driver: text("driver").notNull(),
  date: timestamp("date", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const resShuttle = pgTable("resShuttle", {
  id: text("id").primaryKey().notNull(),
  resId: text("res_id").notNull(),
  shuttleId: text("shuttleId")
    .notNull()
    .references(() => shuttleAssign.id, { onUpdate: "cascade" }),
});

export const newVeh = pgTable("new_veh", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  amount: integer("amount").notNull(),
  attachedId: text("attachedID")
    .notNull()
    .references(() => attached.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});

export const groups = pgTable("Groups", {
  id: text("id").primaryKey().notNull(),
  groupName: text("groupName").notNull(),
  lead: text("lead"),
  sweep: text("sweep"),
  dateTime: timestamp("dateTime", { precision: 3, mode: "string" }).notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" }).notNull(),
});

export const unattachedData = pgTable("UnattachedData", {
  id: text("id").primaryKey().notNull(),
  groupsId: text("groupsId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade", onUpdate: "cascade" }),
  resId: text("resId").notNull(),
  vehicleName: text("vehicleName"),
  qty: integer("qty"),
});

export const attached = pgTable("attached", {
  id: text("id").primaryKey().notNull(),
  dateTime: timestamp("dateTime", { precision: 3, mode: "string" }).notNull(),
  resId: text("res_id").notNull(),
});

export const location = pgTable("Location", {
  id: text("id").primaryKey().notNull(),
  name: text("name"),
  description: text("description"),
});

export const picsOfDay = pgTable("PicsOfDay", {
  id: text("id").primaryKey().notNull(),
  theDay: text("theDay"),
  theList: text("theList"),
});

export const callLog = pgTable("callLog", {
  id: text("id").primaryKey().notNull(),
  resId: text("res_id").notNull(),
  staff: text("staff").notNull(),
  dateTime: timestamp("dateTime", { precision: 3, mode: "string" }).notNull(),
});

export const smartWaiver = pgTable("SmartWaiver", {
  id: serial("id").primaryKey().notNull(),
  waiverId: text("waiverId").notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  autoTag: text("autoTag").notNull(),
  createdOn: timestamp("createdOn", { precision: 3, mode: "string" }).notNull(),
  dob: timestamp("dob", { precision: 3, mode: "string" }).notNull(),
  expirationDate: text("expirationDate"),
  expired: boolean("expired").notNull(),
  isMinor: boolean("isMinor").notNull(),
  kiosk: boolean("kiosk").notNull(),
  middleName: text("middleName"),
  prefillId: text("prefillId"),
  tags: text("tags").array(),
  templateId: text("templateId").notNull(),
  title: text("title").notNull(),
  verified: boolean("verified").notNull(),
});

export const license = pgTable("License", {
  id: text("id").primaryKey().notNull(),
  name: text("name"),
  description: text("description"),
  locationId: text("locationId")
    .notNull()
    .references(() => location.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  waiverId: text("waiverId").references(() => smartWaiver.waiverId, {
    onDelete: "set null",
    onUpdate: "cascade",
  }),
});

export const reservation = pgTable(
  "Reservation",
  {
    id: text("id").primaryKey().notNull(),
    resId: text("res_id").notNull(),
    resEmail: text("res_email"),
    precalled: boolean("precalled").default(false).notNull(),
    precalledBy: text("precalled_by"),
    notes: text("notes"),
    calledAt: timestamp("called_at", { precision: 3, mode: "string" }),
    changedLocation: boolean("changedLocation").default(false).notNull(),
    whereChangedLocation: text("whereChangedLocation"),
    noAnswer: boolean("noAnswer").default(false).notNull(),
    noValidContact: boolean("noValidContact").default(false).notNull(),
    checkinTime: timestamp("checkinTime", { precision: 3, mode: "string" }),
    checkoutTime: timestamp("checkoutTime", { precision: 3, mode: "string" }),
    dropoffTime: timestamp("dropoffTime", { precision: 3, mode: "string" }),
    landTime: timestamp("landTime", { precision: 3, mode: "string" }),
    launchTime: timestamp("launchTime", { precision: 3, mode: "string" }),
    pickupTime: timestamp("pickupTime", { precision: 3, mode: "string" }),
  },
  (table) => {
    return {
      resIdKey: uniqueIndex("Reservation_res_id_key").on(table.resId),
    };
  }
);

export const additionalfees = pgTable("additionalfees", {
  id: text("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  feeType: feetype("fee_type").notNull(),
  feeAmount: integer("fee_amount").notNull(),
});

export const bookings = pgTable("bookings", {
  id: text("id").primaryKey().notNull(),
  whenBooked: timestamp("when_booked", {
    precision: 3,
    mode: "string",
  }).notNull(),
  forWhen: timestamp("for_when", { precision: 3, mode: "string" }).notNull(),
  numberOfPpl: integer("number_of_ppl").notNull(),
  offerId: text("offer_id").notNull(),
  totalCost: integer("total_cost").notNull(),
  waiverId: text("waiver_id"),
});

export const discountrate = pgTable("discountrate", {
  id: text("id").primaryKey().notNull(),
  discountValue: integer("discount_value").notNull(),
  code: varchar("code", { length: 255 }),
  discountType: feetype("discount_type").notNull(),
  active: boolean("active").default(false),
});

export const peakrate = pgTable("peakrate", {
  id: text("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  peakFeeAmount: integer("peak_fee_amount").notNull(),
  peakFeeType: feetype("peak_fee_type").notNull(),
});

export const offer = pgTable("offer", {
  id: text("id").primaryKey().notNull(),
  offerName: varchar("offer_name", { length: 255 }).notNull(),
});

export const vehicleStatusEnum = pgEnum("vehicle_status_enum", [
  "REPAIR",
  "AVAILABLE",
  "MAINTENANCE",
  "RETIRED",
]);

// Note:
// - Procedure shall be saving every status change in the vehicle_status table
// - Later on, we can use this table to track the vehicle status changes
export const vehicleStatus = pgTable("vehicleStatus", {
  id: text("id").primaryKey().notNull(),
  vehicle_id: text("vehicle_id")
    .notNull()
    .references(() => vehicle.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  status: vehicleStatusEnum("status").notNull().default("AVAILABLE"),
  notes: text("notes"),
  return_date: date("return_date"),
  updated_at: timestamp("updated_at", {
    precision: 3,
    mode: "string",
  }).notNull(),
  updated_by: text("updated_by").notNull(),
});

export const vehicle = pgTable("vehicle", {
  id: text("id").primaryKey().notNull(),
  vehicleTypeId: text("vehicleTypeId")
    .notNull()
    .references(() => vehicleType.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  seats: integer("seats").notNull(),
  year: text("year"),
  titleName: text("title_name"),
  photo: text("photo"),
  currentLocation: text("current_location"),
  color: text("color"),
  vin: text("vin"),
  engineNumber: text("engine_number"),
  ifta: text("IFTA"),
  licenceNumber: text("licence_number"),
  registrationExpiry: timestamp("registration_expiry", {
    precision: 3,
    mode: "string",
  }),
  cfn: text("cfn"),
  titleUploadPic: text("title_upload_pic"),
  character: text("character").notNull(),
  fleetNumber: text("fleet_number").notNull(),
  subType: text("sub_type"),
});

export const whoViewedPage = pgTable("whoViewedPage", {
  id: text("id").primaryKey().notNull(),
  page: text("page").notNull(),
  staff: text("staff").default("no user name yet").notNull(),
  dateTime: timestamp("dateTime", { precision: 3, mode: "string" }).notNull(),
});

export const locations = pgTable("locations", {
  id: text("id").primaryKey().notNull(),
  locationName: varchar("location_name", { length: 255 }).notNull(),
  coordRangeFrom: varchar("coord_range_from", { length: 255 }).notNull(),
  coordRangeTo: varchar("coord_range_to", { length: 255 }).notNull(),
  locationOpenStatus: boolean("location_open_status").notNull(),
});

export const additionalfeesOffer = pgTable("additionalfees_offer", {
  id: text("id").primaryKey().notNull(),
  offerId: text("offer_id")
    .notNull()
    .references(() => offer.id, { onDelete: "restrict", onUpdate: "cascade" }),
  additionalfeesId: text("additionalfees_id")
    .notNull()
    .references(() => additionalfees.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
});

export const discountOffer = pgTable("discount_offer", {
  id: text("id").primaryKey().notNull(),
  offerId: text("offer_id")
    .notNull()
    .references(() => offer.id, { onDelete: "restrict", onUpdate: "cascade" }),
  discountId: text("discount_id")
    .notNull()
    .references(() => discountrate.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
});

export const peakRateOffer = pgTable("peakRate_offer", {
  id: text("id").primaryKey().notNull(),
  offerId: text("offer_id")
    .notNull()
    .references(() => offer.id, { onDelete: "restrict", onUpdate: "cascade" }),
  peakId: text("peak_id")
    .notNull()
    .references(() => peakrate.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
});

export const vehicleType = pgTable("vehicleType", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  prefix: text("prefix"),
  description: text("description"),
});

export const vehicleOffer = pgTable("vehicle_offer", {
  id: text("id").primaryKey().notNull(),
  offerId: text("offer_id")
    .notNull()
    .references(() => offer.id, { onDelete: "restrict", onUpdate: "cascade" }),
  vehicleId: text("vehicle_id")
    .notNull()
    .references(() => vehicle.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  baseRate: doublePrecision("base_rate"),
});

export const waivers = pgTable("Waivers", {
  id: text("id").primaryKey().notNull(),
  bookingId: text("booking_id")
    .notNull()
    .references(() => bookings.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
  status: text("status").notNull(),
  reservationId: text("reservationId"),
});
