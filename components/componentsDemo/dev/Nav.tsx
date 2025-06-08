import React from "react";
import LogsStatus from "./LogsStatus";
import SelectLang from "./SelectLang";
import Link from "next/link";

// Dictionnaire de traductions
const translations: Record<string, Record<string, string>> = {
  en: {
    accommodations: "Accommodations",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    Labeling: "Labeling",
    dev: "Dev",
    admin: "Admin",
    home: "FastBookInn"
  },
  fr: {
    accommodations: "Hébergements",
    aboutUs: "À Propos",
    contactUs: "Contact",
    Labeling: "Labelisation",
    dev: "Développement",
    admin: "Administration",
    home: "FastBookInn"
  },
  es: {
    accommodations: "Alojamientos",
    aboutUs: "Sobre Nosotros",
    contactUs: "Contacto",
    Labeling: "Etiquetado",
    dev: "Desarrollo",
    admin: "Administración",
    home: "FastBookInn"
  }
};

export default function Nav({ lang = "en" }: { lang?: string }) {
  // Récupère les traductions pour la langue sélectionnée
  const t = translations[lang] || translations.en;

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                {t.home}
              </Link>
            </div>
            
            <div className="md:flex space-x-8">
              <Link
                href="/accommodations"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.accommodations}
              </Link>
              <Link
                href="/AboutUs"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.aboutUs}
              </Link>
              <Link
                href="/contactUs"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.contactUs}
              </Link>
              <Link
                href="/label"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.Labeling}
              </Link>
              <Link
                href="/dev"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.dev}
              </Link>
              <Link
                href="/admin"
                className="text-gray-700 hover:text-blue-600"
              >
                {t.admin}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <LogsStatus />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}