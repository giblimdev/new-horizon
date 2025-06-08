import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const tables = [
  {
    name: "User",
    fields: [
      "id",
      "name",
      "email",
      "emailVerified",
      "image",
      "createdAt",
      "updatedAt",
      "sessions",
      "accounts",
      "Address",
    ],
  },
  {
    name: "Session",
    fields: [
      "id",
      "userId",
      "token",
      "expiresAt",
      "ipAddress",
      "userAgent",
      "createdAt",
      "updatedAt",
      "user",
    ],
  },
  {
    name: "Account",
    fields: [
      "id",
      "userId",
      "accountId",
      "providerId",
      "accessToken",
      "refreshToken",
      "idToken",
      "accessTokenExpiresAt",
      "refreshTokenExpiresAt",
      "scope",
      "password",
      "createdAt",
      "updatedAt",
      "user",
    ],
  },
  {
    name: "Verification",
    fields: [
      "id",
      "identifier",
      "value",
      "expiresAt",
      "createdAt",
      "updatedAt",
    ],
  },
];

export default function TableAccordion() {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Gestion des tables Prisma
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {tables.map((table) => (
          <AccordionItem key={table.name} value={table.name}>
            <AccordionTrigger>
              <span className="font-semibold">{table.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                {table.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
