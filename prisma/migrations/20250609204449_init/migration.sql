/*
  Warnings:

  - You are about to alter the column `order` on the `HotelCard` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HotelCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "idCity" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
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
INSERT INTO "new_HotelCard" ("accommodationTypeId", "basePricePerNight", "cancellationPolicy", "currency", "destinationId", "detailsId", "hotelGroupId", "id", "idCity", "imageMessage", "isPartner", "latitude", "longitude", "name", "order", "overallRating", "promoMessage", "ratingAdjective", "regularPrice", "reviewCount", "shortDescription", "starRating") SELECT "accommodationTypeId", "basePricePerNight", "cancellationPolicy", "currency", "destinationId", "detailsId", "hotelGroupId", "id", "idCity", "imageMessage", "isPartner", "latitude", "longitude", "name", "order", "overallRating", "promoMessage", "ratingAdjective", "regularPrice", "reviewCount", "shortDescription", "starRating" FROM "HotelCard";
DROP TABLE "HotelCard";
ALTER TABLE "new_HotelCard" RENAME TO "HotelCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
