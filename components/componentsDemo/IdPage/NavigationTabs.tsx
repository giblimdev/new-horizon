"use client";
import React, { useState } from "react";

const tabs = [
  "Vue d'ensemble",
  "Infos et tarifs",
  "Équipements",
  "Règles de la maison",
  "À savoir",
  "Commentaires clients (355)",
];

export default function NavigationTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="flex space-x-16 px-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            type="button"
            className={`relative pb-3 pt-2 text-base font-normal
              ${
                active === idx ? "text-black" : "text-gray-600 hover:text-black"
              }
              focus:outline-none transition-colors`}
            onClick={() => setActive(idx)}
            style={{ background: "none" }}
          >
            {tab}
            {active === idx && (
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 rounded"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
