import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">FastBooking</h3>
            <p className="text-gray-300 mb-4">
              Solution moderne et intuitive pour la gestion complète de vos
              hébergements et réservations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/demo"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Essayer la démo
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/com" className="text-gray-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/com/features"
                  className="text-gray-300 hover:text-white"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/com/about"
                  className="text-gray-300 hover:text-white"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Pages légales
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-gray-300 hover:text-white"
                  href="/legal/cgv"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/confidentialite"
                  className="text-gray-300 hover:text-white"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>contact@fastbooking.com</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 FastBooking. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
