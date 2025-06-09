/*
  Warnings:

  - Added the required column `order` to the `HotelCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HotelCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "idCity" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "shortDescription" TEXT,
    "starRating" INTEGER NOT NULL,
    "overallRating" REAL,
    "ratingAdjective" TEXT,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "basePricePerNight" REAL NOT NULL,
    "regularPrice" REAL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "isPartner" BOOLEAN NOT NULL DEFAULT false,
    "promoMessage" TEXT,
    "imageMessage" TEXT,
    "cancellationPolicy" TEXT,
    "accommodationTypeId" TEXT,
    "destinationId" TEXT,
    "hotelGroupId" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "detailsId" TEXT,
    CONSTRAINT "HotelCard_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "hotel_details" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "HotelCard_accommodationTypeId_fkey" FOREIGN KEY ("accommodationTypeId") REFERENCES "accommodation_types" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "HotelCard_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "destinations" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "HotelCard_hotelGroupId_fkey" FOREIGN KEY ("hotelGroupId") REFERENCES "hotel_groups" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_HotelCard" ("accommodationTypeId", "basePricePerNight", "cancellationPolicy", "currency", "destinationId", "detailsId", "hotelGroupId", "id", "idCity", "imageMessage", "isPartner", "latitude", "longitude", "name", "overallRating", "promoMessage", "ratingAdjective", "regularPrice", "reviewCount", "shortDescription", "starRating") SELECT "accommodationTypeId", "basePricePerNight", "cancellationPolicy", "currency", "destinationId", "detailsId", "hotelGroupId", "id", "idCity", "imageMessage", "isPartner", "latitude", "longitude", "name", "overallRating", "promoMessage", "ratingAdjective", "regularPrice", "reviewCount", "shortDescription", "starRating" FROM "HotelCard";
DROP TABLE "HotelCard";
ALTER TABLE "new_HotelCard" RENAME TO "HotelCard";
CREATE TABLE "new_countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" INTEGER DEFAULT 100,
    "code" TEXT NOT NULL,
    "language" TEXT,
    "currency" TEXT DEFAULT '€',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_countries" ("code", "createdAt", "currency", "id", "language", "name", "order", "updatedAt") SELECT "code", "createdAt", "currency", "id", "language", "name", "order", "updatedAt" FROM "countries";
DROP TABLE "countries";
ALTER TABLE "new_countries" RENAME TO "countries";
CREATE UNIQUE INDEX "countries_code_key" ON "countries"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
