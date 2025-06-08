/*

	Airbnb	

	Hostelworld	

	HRS	
	Ostrovok	




*/

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiSearch, FiX } from "react-icons/fi";

export default function BookingLinks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const links = [
    {
      name: "Booking Better",
      url: "https://www.booking-better.com/",
      category: "Alternative",
    },
    { name: "Booking.com", url: "https://www.booking.com", category: "Géant" },
    { name: "Expedia.com", url: "https://www.expedia.com", category: "Géant" },
    { name: "Hotels.com", url: "https://www.hotels.com", category: "Géant" },
    {
      name: "Trivago",
      url: "https://www.trivago.fr/",
      category: "Comparateur",
    },
    {
      name: "Lastminute",
      url: "https://www.fr.lastminute.com/",
      category: "Dernière Minute",
    },
    {
      name: "Skyscanner",
      url: "https://www.skyscanner.fr/hotels",
      category: "Comparateur",
    },
    {
      name: "Kayak",
      url: "https://www.kayak.fr/hotels",
      category: "Comparateur",
    },
    {
      name: "Stayforlong",
      url: "https://www.stayforlong.fr/",
      category: "Alternative",
    },
    {
      name: "Logitravel",
      url: "https://www.logitravel.fr/hotels/",
      category: "Voyage",
    },
    {
      name: "eDreams",
      url: "https://www.edreams.fr/hotels/",
      category: "Voyage",
    },
    {
      name: "Staycation",
      url: "https://www.staycation.co/fr",
      category: "Alternative",
    },
    {
      name: "Agoda",
      url: "https://www.agoda.com/fr-fr/?cid=1844104&ds=qQTyMBy2A4RRyNam",
      category: "Géant",
    },
    { name: "Orbitz", url: "https://www.orbitz.com/", category: "Géant" },
    {
      name: "Travelocity",
      url: "https://www.travelocity.com/",
      category: "Géant",
    },
    { name: "Priceline", url: "https://www.priceline.com/", category: "Géant" },
    {
      name: "Hotwire",
      url: "https://www.hotwire.com/",
      category: "Dernière Minute",
    },
    {
      name: "Google Hotels",
      url: "https://www.google.com/travel/hotels",
      category: "Comparateur",
    },
  ];

  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const scaleUp = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
  };

  // Filtrer les liens basés sur la recherche
  const filteredLinks = links.filter(
    (link) =>
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir les catégories uniques
  const categories = [...new Set(links.map((link) => link.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-red-600">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-red-500">DIRECT HORIZON</span> - RESSOURCES
            </h1>
            <p className="text-gray-400 mt-2">
              Connais ton ennemi - Les plateformes de réservation
            </p>
          </div>

          <motion.button
            className={`mt-4 md:mt-0 px-6 py-2 flex items-center ${
              isSearching ? "bg-red-700" : "bg-red-600"
            } rounded-full font-bold transition`}
            onClick={() => setIsSearching(!isSearching)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSearching ? (
              <FiX className="mr-2" />
            ) : (
              <FiSearch className="mr-2" />
            )}
            {isSearching ? "Fermer" : "Rechercher"}
          </motion.button>
        </div>

        {/* Search Bar */}
        {isSearching && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher par nom ou catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 bg-gray-800 rounded-lg border border-red-600 focus:border-red-500 focus:outline-none"
              />
              <FiSearch className="absolute right-4 top-4 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    searchTerm === category ? "bg-red-600" : "bg-gray-800"
                  }`}
                  onClick={() => setSearchTerm(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
              <motion.button
                className="px-3 py-1 rounded-full text-sm bg-gray-800"
                onClick={() => setSearchTerm("")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tout afficher
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">
              {links.length}
            </div>
            <div className="text-gray-400">Plateformes répertoriées</div>
          </div>
          <div className="bg-gray-800 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">
              {categories.length}
            </div>
            <div className="text-gray-400">Catégories</div>
          </div>
          <div className="bg-gray-800 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">4</div>
            <div className="text-gray-400">Géants du secteur</div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 h-full hover:border-red-500 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center mr-3">
                        <span className="font-bold">{link.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-red-400 transition">
                        {link.name}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center">
                      <span className="px-2 py-1 bg-gray-700 text-xs rounded-full">
                        {link.category}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">
                        {link.url.replace("https://", "").replace("www.", "")}
                      </span>
                    </div>
                  </div>

                  <FiExternalLink className="text-gray-500 group-hover:text-red-500 transition" />
                </div>

                <div className="mt-6 flex justify-between">
                  <div className="text-sm text-gray-400">
                    Commission moyenne:
                    <span className="ml-1 text-red-400 font-bold">
                      {link.category === "Géant"
                        ? "15-30%"
                        : link.category === "Comparateur"
                        ? "10-20%"
                        : link.category === "Alternative"
                        ? "5-15%"
                        : "10-25%"}
                    </span>
                  </div>

                  <div
                    className={`px-2 py-1 text-xs rounded-full ${
                      link.category === "Géant"
                        ? "bg-red-900 text-red-300"
                        : link.category === "Alternative"
                        ? "bg-green-900 text-green-300"
                        : "bg-blue-900 text-blue-300"
                    }`}
                  >
                    {link.category === "Géant"
                      ? "Éviter"
                      : link.category === "Alternative"
                      ? "Alternative"
                      : "Comparer"}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Warning */}
        <div className="mt-12 p-6 bg-gradient-to-r from-red-900 to-red-800 rounded-xl border border-red-600">
          <div className="flex items-start">
            <div className="text-3xl mr-4">⚠️</div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Attention aux commissions cachées !
              </h3>
              <p>
                Les plateformes traditionnelles prennent jusqu'à 30% de
                commission sur chaque réservation. Chez Direct Horizon, nous
                proposons une alternative avec{" "}
                <span className="font-bold text-green-400">
                  0% de commission
                </span>
                et des prix directs avec les hôteliers.
              </p>
              <motion.button
                className="mt-4 px-4 py-2 bg-black rounded-lg font-bold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir notre solution
                <FiExternalLink className="ml-2" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>DIRECT HORIZON - La révolution des réservations sans commission</p>
          <p className="mt-2">
            Données mises à jour: {new Date().toLocaleDateString("fr-FR")}
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
