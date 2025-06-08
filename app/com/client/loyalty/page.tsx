"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RebelLoyaltyProgram() {
  const [activeReward, setActiveReward] = useState(0);

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

  // Récompenses éthiques & expérientielles
  const rewards = [
    {
      title: "Crédit Voyage Sans Arnaque",
      icon: "💳",
      description:
        "15% de réduction, valable 1 an, applicable sur le prix final.",
      highlight:
        "Offre Transparence 100% : crédit applicable sur le prix final (frais/taxes inclus)",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Expérience Locale Exclusive",
      icon: "🌟",
      description:
        "Soirée chez l’hôte ou visite secret spot, valeur 50€, curatée par des experts locaux.",
      highlight: "Curatée par nos experts locaux (valeur 50€)",
      color: "from-amber-600 to-yellow-500",
    },
    {
      title: "Nuit Solidaire",
      icon: "❤️",
      description:
        "1 nuit offerte en éco-hébergement, 10% reversés à une asso locale, affichage transparent.",
      highlight:
        "10% reversés à une association locale + affichage transparent",
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "Statut VIP Community Builder",
      icon: "👑",
      description:
        "Badge exclusif, accès early, service client prioritaire 24/7.",
      highlight: "Service client prioritaire 24/7 (vrai humain, pas de bot)",
      color: "from-purple-600 to-fuchsia-500",
    },
  ];

  // Bonus de viralité
  const viralBonuses = [
    {
      referrals: "+5 filleuls",
      reward: "Nuit mystère (hébergement surprise 4★)",
    },
    {
      referrals: "+10 filleuls",
      reward: "Week-end éco-responsable (2 nuits + expérience locale)",
    },
    {
      referrals: "+15 filleuls",
      reward: "Devenir Ambassadeur (commission sur les résas des filleuls)",
    },
  ];

  // Clés de réussite
  const successKeys = [
    {
      icon: "📱",
      title: "Simplicité radicale",
      description: "Suivi en temps réel du compteur de filleuls dans l'appli",
    },
    {
      icon: "📢",
      title: "Preuves sociales",
      description: "Option de partage sur les réseaux sociaux",
    },
    {
      icon: "🛑",
      title: "Anti-gaspi numérique",
      description: "Limitation à 10 invitations/mois/parrain",
    },
    {
      icon: "🌳",
      title: "Cercle vertueux",
      description: "Chaque parrainage plante 1 arbre via Reforest'Action",
    },
    {
      icon: "🎁",
      title: "Avantage filleul",
      description: "-10% sur la 1ère réservation pour chaque filleul",
    },
  ];

  // Tableau des avantages multi-niveaux
  const circleTable = [
    {
      beneficiary: "VOTRE FILLEUL",
      immediate: [
        "✅ +5% de $REBEL sur sa 1ère résa",
        "✅ Accès prioritaire aux éco-lodges 🌿",
      ],
      extra: "Un guide voyage sur mesure",
    },
    {
      beneficiary: "VOUS (PARRAIN)",
      immediate: [
        "✅ 10% des $REBEL gagnés par votre filleul",
        "✅ 3% des $REBEL de vos liéoles",
        "✅ 100 $REBEL bonus à l'inscription",
      ],
      extra: "Palier Argent : 3 filleuls = 🎒 Sac éco-conçu",
    },
    {
      beneficiary: 'VOTRE "LIÉOLE"',
      immediate: [
        "✅ +5% de $REBEL sur sa 1ère résa",
        "✅ Session conseil avec un expert",
      ],
      extra: "Carte des Rebelles : 50 adresses secrètes vérifiées",
    },
  ];

  // Actions et récompenses
  const rebelActions = [
    {
      action: "Réservation directe",
      reward: "5% du montant en tokens (ex: 100€ = 50 $REBEL)",
    },
    { action: "Avis vérifié post-séjour", reward: "50 $REBEL par avis" },
    { action: "Complétion du profil", reward: "50 $REBEL (1x)" },
    { action: "Séjour éco-responsable", reward: "+10% de tokens" },
  ];

  // Utilisation des $REBEL
  const rebelUsage = [
    {
      icon: "💸",
      text: "Économiser sur vos voyages : 10 $REBEL = 1€ de réduction sur toute réservation.",
    },
    {
      icon: "🌱",
      text: "Soutenir des projets locaux : Donnez vos tokens à une école 🏫, un éco-lodge 🌱 ou un artisan partenaire (ex: 100 $REBEL = 1 kit scolaire).",
    },
    {
      icon: "💶",
      text: "Convertir en cash : Échangez vos tokens en euros (frais de 3% seulement hors frais bancaire) via notre plateforme sécurisée.",
    },
    {
      icon: "👑",
      text: 'Accéder à des avantages VIP : 500 $REBEL = Accès à des offres "secret spot" (hôtels insolites, prestations exclusives). 1 000 $REBEL = Atelier voyage avec un fondateur de Direct Horizon.',
    },
  ];

  // Super-pouvoirs du parrain
  const superPowers = [
    {
      title: "L'effet boule de neige",
      details: [
        "Votre filleul parraine → Vous gagnez 3% des tokens de vos liéoles",
        "Exemple : Votre filleul recrute Sophie → Elle dépense 200€ = 10 $REBEL → Vous empochez 1.3 $REBEL",
      ],
    },
    {
      title: "L'arme secrète communautaire",
      details: [
        'Groupe VIP "Cercles Rebelles" : Échangez avec les 5% parrains les plus actifs',
        "Rencontres exclusives : Dîners virtuels avec les fondateurs",
      ],
    },
    {
      title: "Vos récompenses phares",
      details: [
        "Niveau 1 → 3 filleuls actifs = bonus de 100 $REBEL 🌳",
        "Niveau 2 → 10 filleuls actifs = bonus de 1000 $REBEL ✈️",
        "Niveau 3 → 20 filleuls actifs = bonus de 10 000 $REBEL 🌎",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-purple-700 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <span className="block mb-2">🌟 PROGRAMME DE PARRAINAGE REBEL</span>
            <span className="text-purple-300">
              VOTRE RÉSEAU, VOTRE RÉVOLUTION !
            </span>
          </motion.h1>
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              REBEL CRYPTO – Votre aventure récompensée en tokens $REBEL
              (Polygon - ERC-20)
            </p>
            <p className="text-lg mb-4">
              Devenez un général de l'armée voyageuse et multipliez les
              avantages sur 3 générations de rebelles !
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pourquoi cette révolution vaut-elle le combat ? */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-3xl font-bold mb-6 text-orange-400 flex items-center gap-2">
            🚀 Pourquoi cette révolution vaut-elle le combat ?
          </motion.h2>
          <ul className="text-xl space-y-4">
            <li>
              🚀 Frappez au portefeuille des intermédiaires qui gonflent vos
              prix
            </li>
            <li>
              🚀 Étendez l'impact d'un tourisme où 100% des euros vont aux hôtes
              et projets locaux
            </li>
            <li>
              🚀 Gagnez à 3 niveaux : Votre filleul, votre "liéole" (son
              filleul), et VOUS !
            </li>
          </ul>
        </div>
      </section>

      {/* Le concept en 3 points */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-800 to-purple-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-black bg-opacity-30 rounded-xl p-8"
            {...scaleUp}
          >
            <div className="text-5xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Gagnez des $REBEL</h3>
            <p>À chaque réservation, chaque avis, chaque action engagée.</p>
          </motion.div>
          <motion.div
            className="bg-black bg-opacity-30 rounded-xl p-8"
            {...scaleUp}
          >
            <div className="text-5xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">
              Parrainez, Empilez les Gains
            </h3>
            <p>Votre réseau = vos récompenses.</p>
          </motion.div>
          <motion.div
            className="bg-black bg-opacity-30 rounded-xl p-8"
            {...scaleUp}
          >
            <div className="text-5xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Utilisez Librement</h3>
            <p>Réductions, dons éthiques, ou conversion en cash.</p>
          </motion.div>
        </div>
      </section>

      {/* Comment gagner des $REBEL ? */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-2">
            🔥 Comment gagner des $REBEL ?
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-xl">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-lg text-yellow-400">
                    Action
                  </th>
                  <th className="px-4 py-2 text-left text-lg text-yellow-400">
                    Récompense en $REBEL
                  </th>
                </tr>
              </thead>
              <tbody>
                {rebelActions.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-700">
                    <td className="px-4 py-2">{item.action}</td>
                    <td className="px-4 py-2">{item.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Le cercle vertueux */}
      <section className="py-16 px-4 bg-green-900 bg-opacity-80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-green-300">
            🔥 Le cercle vertueux : chaque rebelle compte
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-green-800 rounded-xl">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-lg text-green-200">
                    Bénéficiaire
                  </th>
                  <th className="px-4 py-2 text-left text-lg text-green-200">
                    Avantage immédiat
                  </th>
                  <th className="px-4 py-2 text-left text-lg text-green-200">
                    Récompense supplémentaire
                  </th>
                </tr>
              </thead>
              <tbody>
                {circleTable.map((row, idx) => (
                  <tr key={idx} className="border-b border-green-700">
                    <td className="px-4 py-2 font-bold">{row.beneficiary}</td>
                    <td className="px-4 py-2">
                      {row.immediate.map((txt, i) => (
                        <div key={i}>{txt}</div>
                      ))}
                    </td>
                    <td className="px-4 py-2">{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Structure visuelle du programme */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-gray-900 border-2 border-purple-500 rounded-xl p-8 w-full max-w-xs text-center">
              <div className="text-5xl mb-4">🧑‍🎤</div>
              <h3 className="text-xl font-bold mb-4">1 Parrain</h3>
              <p>Vous invitez vos amis à rejoindre Direct Horizon</p>
            </div>
            <div className="text-4xl text-purple-400 hidden md:block">→</div>
            <div className="text-4xl text-purple-400 md:hidden">↓</div>
            <div className="bg-gray-900 border-2 border-green-500 rounded-xl p-8 w-full max-w-xs text-center">
              <div className="text-5xl mb-4">🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑</div>
              <h3 className="text-xl font-bold mb-4">5 Filleuls validés</h3>
              <p>Inscription + première réservation réussie</p>
            </div>
            <div className="text-4xl text-yellow-400 hidden md:block">→</div>
            <div className="text-4xl text-yellow-400 md:hidden">↓</div>
            <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-8 w-full max-w-xs text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-4">Récompense immédiate</h3>
              <p>Choisissez parmi nos offres éthiques</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xl font-bold text-yellow-300">
            1 PARRAIN = 5 FILLEULS = RÉCOMPENSE IMMÉDIATE
          </div>
        </div>
      </section>

      {/* Récompenses éthiques & expérientielles */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
            RÉCOMPENSES ÉTHIQUES & EXPÉRIENTIELLES
          </h2>
          <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
            Choisissez la récompense qui vous correspond ou cumulez-les
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {rewards.map((reward, index) => (
              <motion.button
                key={index}
                className={`py-3 font-bold rounded-lg w-full ${
                  activeReward === index
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-800"
                }`}
                onClick={() => setActiveReward(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl mr-2">{reward.icon}</span>
                {reward.title}
              </motion.button>
            ))}
          </div>
          <motion.div
            className={`bg-gradient-to-r ${rewards[activeReward].color} rounded-xl p-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">{rewards[activeReward].icon}</div>
            <h3 className="text-2xl font-bold mb-4">
              {rewards[activeReward].title}
            </h3>
            <p className="text-xl mb-6">{rewards[activeReward].description}</p>
            <div className="bg-black bg-opacity-30 p-4 rounded-lg">
              <p className="font-bold">PLUS :</p>
              <p>{rewards[activeReward].highlight}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bonus de viralité */}
      <section className="py-16 px-4 bg-blue-900 bg-opacity-80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">
            BONUS DE VIRALITÉ
          </h2>
          <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
            Débloquez des avantages exceptionnels lorsque vous dépassez les 5
            filleuls
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {viralBonuses.map((bonus, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border-2 border-blue-500 rounded-xl p-6"
                {...scaleUp}
              >
                <div className="text-4xl font-bold text-blue-300 mb-4">
                  {bonus.referrals}
                </div>
                <p className="text-lg">{bonus.reward}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-900 bg-opacity-50 p-4 rounded-xl">
              <p className="text-xl font-bold">
                Devenez Ambassadeur à partir de 15 filleuls et gagnez des
                commissions sur leurs réservations !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Super-pouvoirs du parrain */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-700 to-purple-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-pink-200">
            💥 LES 3 SUPERS-POUVOIRS DU PARRAIN REBEL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {superPowers.map((power, idx) => (
              <motion.div
                key={idx}
                className="bg-black bg-opacity-30 rounded-xl p-6"
                {...scaleUp}
              >
                <h3 className="text-xl font-bold mb-3">{power.title}</h3>
                <ul className="space-y-2">
                  {power.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clés de réussite */}
      <section className="py-16 px-4 bg-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-200">
            CLÉS DE RÉUSSITE
          </h2>
          <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
            Nous avons conçu ce programme pour qu'il soit simple, éthique et
            efficace
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {successKeys.map((key, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 border border-green-500 rounded-xl p-4 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{key.icon}</div>
                <h3 className="font-bold mb-2">{key.title}</h3>
                <p className="text-sm">{key.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl p-6 text-center">
            <p className="text-xl font-bold">
              Chaque parrainage plante 1 arbre via notre partenariat avec
              Reforest'Action
            </p>
            <p className="mt-2">
              Votre impact positif est immédiat et mesurable
            </p>
            <div className="mt-4 inline-flex items-center bg-black bg-opacity-30 px-4 py-2 rounded-full">
              <span className="mr-2">🌍</span>
              <span>Déjà 2 458 arbres plantés par notre communauté</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comment déclencher la révolution ? */}
      <section className="py-16 px-4 bg-orange-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-orange-300 flex items-center gap-2">
            ⚡ Comment déclencher la révolution ? (3 clics)
          </h2>
          <ol className="list-decimal list-inside text-xl space-y-3">
            <li>Activez votre lien rebelle → Dans votre espace membre</li>
            <li>
              Partagez sans modération → Réseaux, mails, discussions de
              comptoir...
            </li>
            <li>
              Observez l'effet domino → Tableau de bord en temps réel avec :
              <ul className="ml-6 list-disc">
                <li>📊 Suivi de votre réseau (filleuls + liéoles)</li>
                <li>💰 Calcul automatique de vos gains</li>
                <li>🎯 Alertes de paliers débloqués</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Messaging impactant */}
      <section className="py-16 px-4 bg-purple-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-200">
            MESSAGING IMPACTANT
          </h2>
          <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
            Des messages clés pour promouvoir le programme
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                POUR LE PARRAIN
              </h3>
              <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                <p className="text-lg italic">
                  "Ce n'est pas un programme de parrainage.
                  <br />
                  C'est une armée qui fait tomber les intermédiaires parasites.
                  <br />
                  Votre prochain filleul sera-t-il le maillon qui fera tout
                  s'effondrer ?"
                </p>
              </div>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <p className="font-bold">Template SMS/Email :</p>
                <p className="mt-2">
                  "Parrainez 3 amis, offrez-leur 10% sur leur 1ère résa DIRECTE.
                  <br />
                  Vous gagnez une nuit offerte 🌟 → C'est ça, la révolution du
                  voyage !"
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-700 to-blue-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                POUR LE FILLEUL
              </h3>
              <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                <p className="text-lg italic">
                  "Rejoins la révolution du voyage éthique et gagne tes premiers
                  $REBEL dès ta première réservation !"
                </p>
              </div>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <p className="font-bold">Template SMS/Email :</p>
                <p className="mt-2">
                  "Votre ami vous offre 10% + 1 arbre planté.
                  <br />
                  Ensemble, vous dites NON aux commissions abusives.
                  <br />
                  Réservez en direct : le juste prix, des deux côtés ✊"
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <motion.button
              className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold hover:bg-red-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer mon parrainage
            </motion.button>
          </div>
        </div>
      </section>

      {/* Pourquoi ça change tout ? */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Pourquoi ça change tout ?
          </h2>
          <ul className="text-lg space-y-3">
            <li>
              • Vous sabotez le système : -35% de frais intermédiaires = +35% de
              pouvoir d'achat voyage
            </li>
            <li>
              • Vos gains ont du sens : 1 $REBEL gagné = 1€ investi dans le
              projet de votre choix 🏫
            </li>
            <li>
              • Votre réseau devient une force : 83% des rebelles trouvent leurs
              meilleures adresses via la communauté
            </li>
          </ul>
        </div>
      </section>

      {/* Utilisez vos $REBEL */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            💸 Utilisez vos $REBEL : liberté totale !
          </h2>
          <ul className="text-lg space-y-4">
            {rebelUsage.map((item, idx) => (
              <li key={idx}>
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.9 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              🚨 REJOIGNEZ L'INSURRECTION : OFFRE FONDATEUR !
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              👉 Générez votre lien & cumulez 100 $REBEL immédiats
            </p>
            <a
              href="https://directhorizon.com/parrainage-rebel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-400 text-black rounded-full text-xl font-bold hover:bg-yellow-300 transition"
            >
              Générer mon lien
            </a>
          </motion.div>
        </div>
      </section>

      {/* Garanties techniques */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            🔒 Garanties techniques
          </h2>
          <ul className="text-lg space-y-3">
            <li>
              • Token ERC-20 sur Polygon : Transactions rapides, frais
              dérisoires (&lt; 0.01$)
            </li>
            <li>
              • Portefeuille intégré : Consultez votre solde en temps réel dans
              votre espace membre.
            </li>
            <li>
              • Sécurité maximale : Smart contract audité par [Nom d’un auditor
              réputé, ex: CertiK].
            </li>
            <li>
              • Transparence : Toutes les transactions sont consultables sur
              [lien vers Polygonscan].
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">
          DIRECT HORIZON | Programme de Parrainage Rebelle
        </p>
        <p className="text-sm mt-2">
          Fait par des voyageurs, pour des voyageurs
        </p>
      </footer>
    </div>
  );
}
