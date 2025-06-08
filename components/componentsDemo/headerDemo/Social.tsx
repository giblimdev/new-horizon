"use client";

import React from "react";
import { Heart, Globe, DollarSign, User } from "lucide-react";
import IsConnected from "./IsConnected";

function Social() {
  return (
    <div className="flex items-center space-x-4">
      {/* Favoris */}
      <button
        title="Favoris"
        className="p-2 rounded-full hover:bg-blue-50 transition"
      >
        <Heart className="w-5 h-5 text-red-500" />
      </button>

      {/* Langue */}
      <div className="flex items-center space-x-1">
        <select
          className="bg-transparent border-none text-sm focus:outline-none"
          aria-label="Choisir la langue"
          defaultValue="fr"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>

      {/* Devise */}
      <div className="flex items-center space-x-1">
        <select
          className="bg-transparent border-none text-sm focus:outline-none"
          aria-label="Choisir la devise"
          defaultValue="eur"
        >
          <option value="eur">€ EUR</option>
          <option value="usd">$ USD</option>
          <option value="gbp">£ GBP</option>
        </select>
      </div>

      {/* Connexion */}
      <button
        title="Se connecter"
        className="p-2 rounded-full hover:bg-blue-50 transition"
      >
        <IsConnected />
      </button>
    </div>
  );
}

export default Social;
