"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Search,
  X,
  AlertTriangle,
  BookOpen,
  BarChart2,
  Shield,
} from "lucide-react";
import HeaderNav from "@/components/componentsDemo/headerDemo/headerDemo";

export default function BookingLinks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const links = [
    {
      name: "Booking Better",
      url: "https://www.booking-better.com/",
      category: "Alternative",
      commission: "5-15%",
      description: "Plateforme émergente avec engagement éthique",
      risk: "Moyen",
    },
    {
      name: "Booking.com",
      url: "https://www.booking.com",
      category: "Géant",
      commission: "15-30%",
      description: "Leader mondial avec pratiques commerciales agressives",
      risk: "Élevé",
    },
    {
      name: "Expedia.com",
      url: "https://www.expedia.com",
      category: "Géant",
      commission: "20-30%",
      description: "Conglomérat avec forte pression sur les hôteliers",
      risk: "Élevé",
    },
    {
      name: "Hotels.com",
      url: "https://www.hotels.com",
      category: "Géant",
      commission: "15-25%",
      description: "Filiale d'Expedia avec modèle de récompenses",
      risk: "Élevé",
    },
    {
      name: "Trivago",
      url: "https://www.trivago.fr/",
      category: "Comparateur",
      commission: "10-20%",
      description: "Méta-moteur appartenant à Booking Holdings",
      risk: "Moyen",
    },
    {
      name: "Lastminute",
      url: "https://www.fr.lastminute.com/",
      category: "Dernière Minute",
      commission: "15-25%",
      description: "Spécialiste des offres de dernière minute",
      risk: "Moyen",
    },
    {
      name: "Skyscanner",
      url: "https://www.skyscanner.fr/hotels",
      category: "Comparateur",
      commission: "10-20%",
      description: "Comparateur indépendant (appartient à Trip.com)",
      risk: "Modéré",
    },
    {
      name: "Kayak",
      url: "https://www.kayak.fr/hotels",
      category: "Comparateur",
      commission: "10-20%",
      description: "Méta-moteur appartenant à Booking Holdings",
      risk: "Moyen",
    },
    {
      name: "Stayforlong",
      url: "https://www.stayforlong.fr/",
      category: "Alternative",
      commission: "5-15%",
      description: "Plateforme spécialisée dans les longs séjours",
      risk: "Faible",
    },
    {
      name: "Logitravel",
      url: "https://www.logitravel.fr/hotels/",
      category: "Voyage",
      commission: "15-25%",
      description: "TO spécialisé dans les voyages organisés",
      risk: "Moyen",
    },
    {
      name: "eDreams",
      url: "https://www.edreams.fr/hotels/",
      category: "Voyage",
      commission: "15-25%",
      description: "Groupe européen avec programme de fidélité",
      risk: "Moyen",
    },
    {
      name: "Staycation",
      url: "https://www.staycation.co/fr",
      category: "Alternative",
      commission: "5-15%",
      description: "Plateforme éco-responsable pour séjours locaux",
      risk: "Faible",
    },
    {
      name: "Agoda",
      url: "https://www.agoda.com/fr-fr/?cid=1844104&ds=qQTyMBy2A4RRyNam",
      category: "Géant",
      commission: "15-25%",
      description: "Filiale asiatique de Booking Holdings",
      risk: "Élevé",
    },
    {
      name: "Orbitz",
      url: "https://www.orbitz.com/",
      category: "Géant",
      commission: "15-25%",
      description: "Filiale d'Expedia pour le marché nord-américain",
      risk: "Élevé",
    },
    {
      name: "Travelocity",
      url: "https://www.travelocity.com/",
      category: "Géant",
      commission: "15-25%",
      description: "Filiale d'Expedia avec garantie de prix",
      risk: "Élevé",
    },
    {
      name: "Priceline",
      url: "https://www.priceline.com/",
      category: "Géant",
      commission: "15-25%",
      description: "Filiale de Booking Holdings avec système d'enchères",
      risk: "Élevé",
    },
    {
      name: "Hotwire",
      url: "https://www.hotwire.com/",
      category: "Dernière Minute",
      commission: "15-25%",
      description: "Filiale d'Expedia pour les offres opaques",
      risk: "Moyen",
    },
    {
      name: "Google Hotels",
      url: "https://www.google.com/travel/hotels",
      category: "Comparateur",
      commission: "10-20%",
      description: "Solution de Google intégrée à son moteur de recherche",
      risk: "Modéré",
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
      link.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir les catégories uniques
  const categories = [...new Set(links.map((link) => link.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans p-4 md:p-8">
      <HeaderNav />
      
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
              <span className="text-red-500">DIRECT HORIZON</span> - GUIDE DES
              PLATEFORMES
            </h1>
            <p className="text-gray-400 mt-2">
              Connais ton ennemi - Les commissions cachées démasquées
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
              <X className="mr-2" size={18} />
            ) : (
              <Search className="mr-2" size={18} />
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
                placeholder="Rechercher par nom, catégorie ou description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 bg-gray-800 rounded-lg border border-red-600 focus:border-red-500 focus:outline-none"
              />
              <Search
                className="absolute right-4 top-4 text-gray-400"
                size={20}
              />
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">
              {links.length}
            </div>
            <div className="text-gray-400">Plateformes analysées</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">€2.4M+</div>
            <div className="text-gray-400">Commissions annuelles</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-500">4</div>
            <div className="text-gray-400">Géants dominants</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-500">0%</div>
            <div className="text-gray-400">Commission Direct Horizon</div>
          </div>
        </div>

        {/* Industry Analysis */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-6 mb-8 border border-red-600">
          <div className="flex items-start">
            <BarChart2 className="mr-4 mt-1 text-red-300" size={32} />
            <div>
              <h3 className="text-xl font-bold mb-2">Analyse du Marché</h3>
              <p>
                Les 4 géants (Booking Holdings, Expedia Group, Airbnb et
                Trip.com) contrôlent{" "}
                <span className="font-bold text-red-300">85%</span> du marché
                mondial des réservations en ligne. Cette concentration permet
                des commissions allant jusqu'à{" "}
                <span className="font-bold text-red-300">30%</span> qui sont
                répercutées sur les voyageurs et les hôteliers.
              </p>
            </div>
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
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                          link.risk === "Élevé"
                            ? "bg-red-900"
                            : link.risk === "Moyen"
                            ? "bg-amber-900"
                            : "bg-green-900"
                        }`}
                      >
                        <span className="font-bold">{link.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-red-400 transition">
                        {link.name}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          link.category === "Géant"
                            ? "bg-red-900 text-red-300"
                            : link.category === "Alternative"
                            ? "bg-green-900 text-green-300"
                            : "bg-blue-900 text-blue-300"
                        }`}
                      >
                        {link.category}
                      </span>

                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          link.risk === "Élevé"
                            ? "bg-red-800 text-red-100"
                            : link.risk === "Moyen"
                            ? "bg-amber-800 text-amber-100"
                            : "bg-green-800 text-green-100"
                        }`}
                      >
                        Risque: {link.risk}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-gray-400">
                      {link.description}
                    </p>
                  </div>

                  <ExternalLink
                    className="text-gray-500 group-hover:text-red-500 transition"
                    size={18}
                  />
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-400">Commission: </span>
                    <span className="ml-1 font-bold text-red-400">
                      {link.commission}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500">
                    {link.url.replace("https://", "").replace("www.", "")}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Alternative Solution */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-900 to-emerald-800 rounded-xl border border-green-600">
          <div className="flex items-start">
            <Shield className="mr-4 mt-1 text-green-300" size={32} />
            <div>
              <h3 className="text-xl font-bold mb-2">
                La Solution Direct Horizon
              </h3>
              <p className="mb-4">
                Chez Direct Horizon, nous proposons une alternative radicale
                avec{" "}
                <span className="font-bold text-green-300">
                  0% de commission
                </span>
                sur les réservations. Notre modèle transparent permet :
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Des économies de 15-30% pour les voyageurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Des revenus plus élevés pour les hôteliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Une relation directe sans intermédiaires</span>
                </li>
              </ul>

              <motion.button
                className="mt-4 px-4 py-2 bg-black rounded-lg font-bold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rejoindre la révolution
                <ExternalLink className="ml-2" size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            <BookOpen className="mr-2" size={16} />
            DIRECT HORIZON - Guide des commissions et pratiques du secteur
          </p>
          <p className="mt-2">
            Données actualisées: {new Date().toLocaleDateString("fr-FR")}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            *Estimations basées sur des données publiques et des témoignages
            d'hôteliers
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
