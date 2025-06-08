"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Story() {
  // Animation for section transitions
  const sectionVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  // Animation for cards and CTA
  const cardVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    whileHover: { scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" },
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-900 via-purple-900 to-blue-700">
      <Head>
        <title>Direct Horizon - Le Voyage en Direct</title>
      </Head>

      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center bg-gradient-to-tr from-blue-700 via-yellow-400 to-purple-900"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl">
            LE VOYAGE EN DIRECT,
            <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
              COMME IL DEVRAIT TOUJOURS ÊTRE
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-6 drop-shadow">
            🌍 Et si chaque euro de votre voyage allait VRAIMENT dans votre
            aventure ?
          </p>
          <motion.button
            className="mt-8 px-10 py-4 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-700 text-black font-bold rounded-full text-lg shadow-2xl hover:from-green-400 hover:to-blue-600 transition-all duration-200"
            whileHover={{ scale: 1.08, boxShadow: "0 0 32px #FFD70099" }}
            whileTap={{ scale: 0.98 }}
          >
            Rejoignez le Mouvement
          </motion.button>
        </div>
      </motion.section>

      {/* L'Étincelle */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-purple-900 via-blue-800 to-blue-900 shadow-lg"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-300 drop-shadow">
            L’ÉTINCELLE : ON EN A MARRE D’ÊTRE PLUMÉS
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-white contrast-150 drop-shadow">
            Nous, voyageurs, on a ouvert les yeux. Les plateformes qu’on
            utilisait pour booker nos escapades ?{" "}
            <span className="font-bold text-blue-300">
              Des machines à cash qui siphonnent jusqu’à 35% de chaque
              réservation
            </span>
            . Des frais opaques, des prix gonflés, des hôtes asphyxiés. Ça
            suffit.
            <br />
            <br />
            On s’est dit : le voyage, c’est pas un business pour algorithmes
            voraces. L’hospitalité, c’est pas une vache à lait. Et nous, on
            n’est pas des portefeuilles sur pattes.
          </p>
        </div>
      </motion.section>

      {/* La Révolte */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-800 via-purple-900 to-purple-700"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-green-300 drop-shadow">
            DIRECT HORIZON : LA RÉVOLTE QUI LIBÈRE
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-white contrast-150 drop-shadow">
            On est cinq. Cinq rêveurs qui en ont ras-le-bol des vieilles règles.
            <br />
            Des baroudeurs qui ont dormi partout, du hamac bancal à l’hôtel 5
            étoiles.
            <br />
            <span className="italic text-green-200">
              Notre mantra ? « La tech doit casser les chaînes, pas en créer. »
            </span>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "✅ Zéro Commissions",
                desc: "Jusqu’à 30% d’économie pour vous et les hôtes.",
                color: "from-green-400 to-green-600",
              },
              {
                title: "✅ Chat 100% humain",
                desc: "Parlez direct à l’hôtelier. Négociez le prix, créez un séjour sur mesure.",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "✅ Avis clean",
                desc: "Seuls ceux qui ont séjourné parlent. Les faux commentaires ? On les dégage.",
                color: "from-yellow-300 to-yellow-500",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${card.color} text-black contrast-200`}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                variants={cardVariants}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Votre Voyage, Vos Règles */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-black drop-shadow">
            VOTRE VOYAGE, VOS RÈGLES
          </h2>
          <p className="text-lg mb-6 text-black drop-shadow">
            Chez Direct Horizon, on envoie valser les algorithmes standardisés.
            Faites la recherche qui vous correspond.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg contrast-200"
              whileHover={{ scale: 1.06, y: -6 }}
            >
              <div className="text-4xl mb-2">🎒</div>
              <div className="font-bold mb-1 text-black">Aventurier</div>
              <p className="text-center text-black">
                Qui dort sous les étoiles ?
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg contrast-200"
              whileHover={{ scale: 1.06, y: -6 }}
            >
              <div className="text-4xl mb-2">🏨</div>
              <div className="font-bold mb-1 text-black">Pro du luxe</div>
              <p className="text-center text-black">
                Du calme et du Wi-Fi qui claque ?
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg contrast-200"
              whileHover={{ scale: 1.06, y: -6 }}
            >
              <div className="text-4xl mb-2">💼</div>
              <div className="font-bold mb-1 text-black">Digital nomad</div>
              <p className="text-center text-black">Zoom à 3h du mat’ ?</p>
            </motion.div>
          </div>
          <ul className="list-disc list-inside text-lg space-y-2 mb-4 text-black">
            <li>Des promos négociées en direct avec les hôtes.</li>
            <li>
              Des pépites engagées : éco-lodges, familles locales, projets qui
              ont du sens.
            </li>
            <li>
              Des solutions pro : chambres work friendly, bureaux ergonomiques,
              salles de réunion gratuites, connexion en titane.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Le Mouvement */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-tr from-purple-900 via-yellow-300 to-green-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-black drop-shadow">
            LE MOUVEMENT, C’EST MAINTENANT
          </h2>
          <p className="text-lg mb-6 text-black drop-shadow">
            On construit un monde meilleur :{" "}
            <span className="font-bold">
              « devenez un voyageur constructeur, pas un touriste consommateur »
            </span>
            <br />
            <span className="block mt-4">
              Impact local concret :{" "}
              <span className="italic">
                Chaque réservation soutient directement des projets locaux :
                écoles, initiatives éco-responsables, ou artisans qui préservent
                leur culture. Votre voyage devient une histoire qui profite à
                tous.
              </span>
            </span>
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-4 text-black">
            <li>
              Un monde où les intermédiaires opaques se prennent une claque.{" "}
              <span className="italic">« on réinvente le circuit court »</span>
            </li>
            <li>Où l’hospitalité redevient une histoire d’humains.</li>
            <li>
              Où votre budget voyage finance vos souvenirs, pas des actionnaires
              en costard.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Voyageur Fondateur */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-400 via-purple-900 to-yellow-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-black drop-shadow">
            DEVENEZ VOYAGEUR FONDATEUR
          </h2>
          <div className="text-lg mb-6 text-black">Pourquoi ?</div>
          <ul className="list-disc list-inside pl-6 mt-2 space-y-1 mb-6 text-black">
            <li>Parce que vous en avez marre des frais cachés.</li>
            <li>
              Parce que vous voulez parler à de vrais hôtes, pas à des bots.
            </li>
            <li>
              Parce que chaque euro économisé, c’est un cocktail en plus sous
              les tropiques.
            </li>
          </ul>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="bg-yellow-300 rounded-xl p-6 text-center shadow-lg contrast-200"
              whileHover={{ scale: 1.07, rotate: 2 }}
            >
              <div className="text-3xl mb-2">🔑</div>
              <div className="font-bold mb-1 text-black">
                Accès exclusif à la bêta
              </div>
            </motion.div>
            <motion.div
              className="bg-blue-400 rounded-xl p-6 text-center shadow-lg contrast-200"
              whileHover={{ scale: 1.07, rotate: -2 }}
            >
              <div className="text-3xl mb-2">💬</div>
              <div className="font-bold mb-1 text-black">
                Un mot à dire sur les prochaines features
              </div>
            </motion.div>
            <motion.div
              className="bg-purple-900 rounded-xl p-6 text-center shadow-lg contrast-200"
              whileHover={{ scale: 1.07, rotate: 1 }}
            >
              <div className="text-3xl mb-2">💸</div>
              <div className="font-bold mb-1 text-white">
                Crédits voyage offerts dès votre première résa
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bougez-vous */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-900 text-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-black drop-shadow">
          BOUGEZ-VOUS : VOYAGEZ LIBRE EN 3 COUPS
        </h2>
        <ol className="list-decimal list-inside text-lg max-w-2xl mx-auto mb-8 space-y-2 text-black">
          <li>
            <span className="font-bold">Rejoignez la bande</span> →{" "}
            <a
              href="https://directhorizon.com"
              className="underline text-purple-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              directhorizon.com
            </a>{" "}
            en 3 clics.
          </li>
          <li>
            <span className="font-bold">Créez votre profil</span> → Balancez vos
            envies, vos galères, vos besoins pro ou perso. Le blog est ouvert.
          </li>
          <li>
            <span className="font-bold">Réservez en direct</span> → Chopez de la
            crypto pour vos futurs voyages.
            <br />
            <span className="italic">
              « Avec la crypto gagnée sur vos réservations, financez vos
              prochains voyages ou échangez-la pour des services exclusifs.
              Votre fidélité est récompensée, sans conditions tordues. »
            </span>
          </li>
        </ol>
      </motion.section>

      {/* Le mot du commencement */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-900 via-blue-400 to-yellow-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-300 drop-shadow">
            LE MOT DU COMMENCEMENT
          </h2>
          <p className="text-xl italic mb-6 text-yellow-300">
            Direct Horizon, c’est la fin des plateformes qui vous prennent pour
            des portefeuilles ambulants.
            <br />
            C’est le début d’un dialogue cash entre vous et ceux qui vous
            ouvrent leur porte.
            <br />✨ Rejoignez les rebelles qui choisissent l’humain, l’éthique,
            et la liberté.
          </p>
        </div>
      </motion.section>

      {/* Les arguments qui tapent fort */}
      <motion.section
        className="py-16 px-4 md:px-16 bg-gradient-to-r from-green-400 via-yellow-300 to-purple-900"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6 text-green-300 drop-shadow">
            LES ARGUMENTS QUI TAPENT FORT
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3 text-white contrast-200">
            <li>
              <span className="font-bold text-yellow-300">
                Transparence totale
              </span>{" "}
              : « Le prix que vous voyez ? C’est le VRAI prix. Zéro commission
              planquée. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">Liberté max</span> :
              « Négociez direct avec l’hôtelier. Faites baisser la note. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">
                Communauté béton
              </span>{" "}
              : « Un groupe privé pour partager vos plans avec des voyageurs
              vérifiés. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">
                Économies qui comptent
              </span>{" "}
              : « la réduction c’est pour vous ; l’absence de comm’ exorbitante
              c’est pour l’établissement. Tout le monde y gagne. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">Voyage éthique</span>{" "}
              : « Soutenez des hôtes qui respectent l’environnement et les
              communautés locales, pour un voyage qui a du sens. »
            </li>
          </ul>
          <p className="mt-8 text-center text-2xl font-extrabold text-blue-300 drop-shadow">
            « Voyager comme vous êtes. Voyager éthique. Voyager libre. »
          </p>
          <div className="mt-8 text-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-900 text-black rounded-full text-xl font-bold shadow-xl hover:from-green-400 hover:to-blue-600 transition-all duration-200"
              whileHover={{ scale: 1.08, boxShadow: "0 0 32px #7FFF0099" }}
              whileTap={{ scale: 0.98 }}
            >
              Rejoignez le mouvement
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-blue-900 via-blue-400 to-purple-900 text-center border-t-2 border-yellow-300">
        <p className="text-lg font-bold text-yellow-300">
          DIRECT HORIZON – Le voyage en direct, éthique et libre
        </p>
        <p className="text-sm mt-2 text-blue-200">
          Fait par des voyageurs, pour des voyageurs
        </p>
      </footer>
    </div>
  );
}
