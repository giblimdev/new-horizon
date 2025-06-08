-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_hotel_amenities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "order" INTEGER DEFAULT 100,
    "category" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_hotel_amenities" ("category", "createdAt", "description", "icon", "id", "name", "order", "updatedAt") SELECT "category", "createdAt", "description", "icon", "id", "name", "order", "updatedAt" FROM "hotel_amenities";
DROP TABLE "hotel_amenities";
ALTER TABLE "new_hotel_amenities" RENAME TO "hotel_amenities";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
