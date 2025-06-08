"use client";
import React from "react";

// Correction : index signature pour TypeScript
const labelColors: Record<string, string> = {
  "Work Place Suite":
    "from-blue-100 via-blue-300 to-blue-500 border-blue-400 text-blue-900",
  "Family Nest":
    "from-yellow-50 via-orange-200 to-orange-400 border-orange-300 text-orange-900",
  "Romantic Choice":
    "from-pink-100 via-pink-300 to-pink-500 border-pink-400 text-pink-900",
  "Leisure Landing":
    "from-green-50 via-green-200 to-green-400 border-green-300 text-green-900",
  "Gilded Gateway":
    "from-yellow-100 via-yellow-300 to-yellow-500 border-yellow-400 text-yellow-900",
  "Historical & Culture Hosting":
    "from-purple-100 via-purple-300 to-purple-500 border-purple-400 text-purple-900",
  ecoHosting:
    "from-green-100 via-green-400 to-emerald-600 border-emerald-400 text-green-900",
  "Inclusive Place":
    "from-indigo-100 via-indigo-300 to-indigo-500 border-indigo-400 text-indigo-900",
  "Adventure Base":
    "from-orange-100 via-orange-300 to-orange-500 border-orange-400 text-orange-900",
  "Urban Oasis":
    "from-gray-100 via-gray-300 to-gray-500 border-gray-400 text-gray-900",
  "Pet Haven":
    "from-yellow-100 via-yellow-300 to-yellow-500 border-yellow-400 text-yellow-900",
  "Wellness Retreat":
    "from-teal-100 via-teal-300 to-teal-500 border-teal-400 text-teal-900",
  "Digital Detox Cabin":
    "from-blue-100 via-blue-300 to-blue-500 border-blue-400 text-blue-900",
  "Bord de Mer":
    "from-cyan-100 via-cyan-300 to-cyan-500 border-cyan-400 text-cyan-900",
  Montagne:
    "from-gray-100 via-gray-300 to-gray-500 border-gray-400 text-gray-900",
  Campagne:
    "from-green-100 via-green-300 to-green-500 border-green-400 text-green-900",
  Désert:
    "from-yellow-100 via-yellow-300 to-yellow-500 border-yellow-400 text-yellow-900",
  Urbain:
    "from-blue-100 via-blue-300 to-blue-500 border-blue-400 text-blue-900",
};

const labels = [
  {
    name: "Work Place Suite",
    description:
      "Où la productivité rencontre le confort. Nos suites sont conçues pour le voyageur d'affaires moderne, offrant un espace de travail ergonomique, une connectivité sans faille et des services qui facilitent votre succès.",
    icon: "💼",
  },
  {
    name: "Family Nest",
    description:
      "Créez des souvenirs inoubliables dans nos nids familiaux. Des espaces conçus pour le bonheur des petits et des grands, avec des activités et des équipements qui font de chaque séjour une aventure familiale.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    name: "Romantic Choice",
    description:
      "Laissez l'amour s'épanouir dans nos retraites romantiques. Des chambres élégantes, des dîners intimes et des vues à couper le souffle pour une escapade où chaque moment est une célébration de l'amour.",
    icon: "❤️",
  },
  {
    name: "Leisure Landing",
    description:
      "Plongez dans un monde de détente et de bien-être. Nos havres de paix sont conçus pour apaiser l'esprit et revitaliser le corps, avec des spas luxueux, des piscines scintillantes et des jardins sereins.",
    icon: "🌴",
  },
  {
    name: "Gilded Gateway",
    description:
      "Entrez dans un monde d'opulence et de raffinement. Nos portails dorés ouvrent sur des suites somptueuses, des services de conciergerie personnalisés et des expériences gastronomiques qui ravivent les sens.",
    icon: "🏰",
  },
  {
    name: "Historical & Culture Hosting",
    description:
      "Voyagez à travers le temps dans nos demeures historiques. Chaque pierre raconte une histoire, chaque détail révèle un héritage. Offrez à vos invités une immersion dans le passé et la culture locale.",
    icon: "🏛️",
  },
  {
    name: "ecoHosting",
    description:
      "Rejoignez notre mouvement pour un tourisme durable. Nos refuges écologiques sont conçus pour minimiser l'impact environnemental et maximiser le respect de la nature. Offrez à vos clients une expérience authentique et responsable.",
    icon: "🌿",
  },
  {
    name: "Inclusive Place",
    description:
      "Ouvrez vos portes à tous les voyageurs. Nos espaces inclusifs sont conçus pour accueillir la diversité et célébrer l'unicité. Offrez à chacun un sentiment d'appartenance et de confort.",
    icon: "🌈",
  },
  {
    name: "Adventure Base",
    description:
      "Lancez-vous dans l'aventure depuis nos bases d'exploration. Nos hébergements sont le point de départ idéal pour les passionnés de plein air, avec des équipements de sport, des conseils d'experts et un accès privilégié aux merveilles naturelles.",
    icon: "⛰️",
  },
  {
    name: "Urban Oasis",
    description:
      "Trouvez la sérénité au cœur de la ville. Nos oasis urbaines offrent un refuge paisible, des jardins luxuriants et des espaces de détente où le temps s'arrête. Offrez à vos clients une pause bienvenue dans l'effervescence citadine.",
    icon: "🏙️",
  },
  {
    name: "Pet Haven",
    description:
      "Accueillez les compagnons à quatre pattes avec chaleur et attention. Nos refuges pour animaux offrent des espaces sécurisés, des équipements adaptés et des services qui facilitent la vie des propriétaires. Faites de chaque séjour une expérience inoubliable pour les animaux et leurs maîtres.",
    icon: "🐾",
  },
  {
    name: "Wellness Retreat",
    description:
      "Revitalisez le corps et l'esprit dans nos retraites de bien-être. Nos programmes holistiques combinent des soins de spa, des cours de yoga, une cuisine saine et des activités qui nourrissent l'âme. Offrez à vos clients une transformation profonde.",
    icon: "🧘",
  },
  {
    name: "Digital Detox Cabin",
    description:
      "Échappez à la frénésie numérique dans nos cabanes de déconnexion. Sans Wi-Fi ni distractions, nos refuges isolés vous invitent à renouer avec la nature et à retrouver la paix intérieure. Offrez à vos clients une expérience de déconnexion authentique.",
    icon: "📵",
  },
  {
    name: "Bord de Mer",
    description:
      "Plages de sable fin, vagues apaisantes et couchers de soleil inoubliables. Nos hébergements en bord de mer offrent une évasion totale pour les amoureux de l'océan.",
    icon: "🌊",
  },
  {
    name: "Montagne",
    description:
      "Panoramas à couper le souffle, air pur et activités en pleine nature. Nos hébergements en montagne sont parfaits pour les amateurs de randonnée, de ski ou de tranquillité.",
    icon: "🏔️",
  },
  {
    name: "Campagne",
    description:
      "Authenticité, calme et immersion dans la nature. Nos hébergements en campagne vous invitent à découvrir la vie rurale et à vous ressourcer loin de l'agitation urbaine.",
    icon: "🌾",
  },
  {
    name: "Désert",
    description:
      "Dépaysement total, vastes étendues et nuits étoilées. Nos hébergements dans le désert offrent une expérience unique, entre sérénité et aventure.",
    icon: "🏜️",
  },
  {
    name: "Urbain",
    description:
      "Dynamisme des villes, culture et proximité des attractions. Nos hébergements urbains sont idéalement situés pour explorer les trésors de la ville.",
    icon: "🏢",
  },
];

const whyLabels = [
  "Se différencier de la concurrence",
  "Répondre aux attentes des clients",
  "Améliorer la crédibilité et la confiance",
  "Valoriser des engagements spécifiques",
  "Augmenter la visibilité et l'attractivité",
  "Justifier un prix plus élevé",
  "Fidéliser une clientèle niche",
  "Améliorer l'image de marque",
  "Faciliter le marketing et la communication",
  "Répondre aux tendances du marché",
  "Obtenir des certifications officielles",
  "Créer une expérience client mémorable",
];

const Labels: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredLabels = labels.filter((label) =>
    label.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Nos Labels d’Hébergement
      </h1>
      <input
        type="text"
        placeholder="🔎 Rechercher un label..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLabels.map((label) => (
          <div
            key={label.name}
            className={`relative border-2 rounded-xl shadow-lg bg-gradient-to-br ${
              labelColors[label.name] ||
              "from-white to-gray-100 border-gray-200 text-gray-800"
            } p-6 hover:scale-105 transition-transform duration-300 group`}
          >
            <div className="absolute -top-5 -right-5 text-5xl drop-shadow opacity-80">
              {label.icon}
            </div>
            <h2 className="text-xl font-extrabold mb-2 tracking-tight">
              {label.name}
            </h2>
            <p className="text-md opacity-90 mb-2">{label.description}</p>
          </div>
        ))}
      </div>
      <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-md mt-12">
        <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 via-blue-500 to-purple-400 bg-clip-text text-transparent">
          Pourquoi labelliser son hébergement ?
        </h1>
        <div className="space-y-4">
          {whyLabels.map((title, i) => (
            <div
              key={i}
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(90deg, rgba(255,255,255,0.7) 60%, ${
                  [
                    "#fde68a",
                    "#a7f3d0",
                    "#fca5a5",
                    "#c7d2fe",
                    "#f9fafb",
                    "#fcd34d",
                    "#fbbf24",
                    "#f472b6",
                    "#f3f4f6",
                    "#d1fae5",
                    "#fca5a5",
                    "#fbcfe8",
                  ][i % 12]
                } 100%)`,
              }}
            >
              <h2 className="text-lg font-semibold mb-1">
                {i + 1}. {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labels;
