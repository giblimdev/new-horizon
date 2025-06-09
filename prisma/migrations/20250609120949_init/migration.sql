/*
  Warnings:

  - You are about to drop the column `isRequired` on the `accessibility_options` table. All the data in the column will be lost.
  - You are about to drop the column `annualRevenue` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `foundedYear` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `headquarters` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `marketCap` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `totalProperties` on the `hotel_groups` table. All the data in the column will be lost.
  - You are about to drop the column `totalRooms` on the `hotel_groups` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accessibility_options" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" INTEGER DEFAULT 100,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_accessibility_options" ("category", "code", "createdAt", "description", "icon", "id", "name", "order", "updatedAt") SELECT "category", "code", "createdAt", "description", "icon", "id", "name", "order", "updatedAt" FROM "accessibility_options";
DROP TABLE "accessibility_options";
ALTER TABLE "new_accessibility_options" RENAME TO "accessibility_options";
CREATE UNIQUE INDEX "accessibility_options_code_key" ON "accessibility_options"("code");
CREATE TABLE "new_hotel_groups" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" INTEGER DEFAULT 100,
    "description" TEXT,
    "website" TEXT,
    "logoUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_hotel_groups" ("createdAt", "description", "id", "logoUrl", "name", "order", "updatedAt", "website") SELECT "createdAt", "description", "id", "logoUrl", "name", "order", "updatedAt", "website" FROM "hotel_groups";
DROP TABLE "hotel_groups";
ALTER TABLE "new_hotel_groups" RENAME TO "hotel_groups";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
