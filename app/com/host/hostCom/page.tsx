"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Check,
  Star,
  BarChart,
  Shield,
  Calendar,
  Eye,
  Settings,
  DollarSign,
  Headphones,
  Users,
  BadgePercent,
  ArrowUpRight,
} from "lucide-react";

export default function HostFeatures() {
  // Animation presets
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Chiffres-clés
  const keyStats = [
    {
      value: "0%",
      label: "Commission sur la mise en relation",
      desc: "Gardez 100% du prix de la nuit. Toujours.",
      color: "text-red-500",
    },
    {
      value: "+45%",
      label: "Revenus supplémentaires",
      desc: "En moyenne pour nos hôtes actifs",
      color: "text-red-500",
    },
    {
      value: "-70%",
      label: "Temps de gestion",
      desc: "Grâce à nos outils automatisés",
      color: "text-red-500",
    },
    {
      value: "24/7",
      label: "Support propriétaires",
      desc: "Assistance directe en moins de 15 minutes",
      color: "text-red-500",
    },
    {
      value: "+90%",
      label: "Visibilité",
      desc: "Apparaissez dans 90% plus de recherches qu’avec les solutions classiques",
      color: "text-red-500",
    },
  ];

  // Features familles
  const features = [
    {
      icon: <BarChart size={36} className="text-green-500" />,
      title: "Augmentez vos revenus sans effort",
      desc: "Rentabilisez votre propriété grâce à la location directe, sans commission.",
      highlight: "Exemple : 100€/nuit = 100€ nets pour vous",
    },
    {
      icon: <Settings size={36} className="text-blue-500" />,
      title: "Gestion centralisée & synchronisation multi-canaux",
      desc: "Gérez annonces, calendriers, réservations et tarifs sur tous les canaux (Airbnb, Booking, etc.) depuis un seul espace.",
      highlight:
        "Synchronisation automatique, anti-doublons, modification instantanée",
    },
    {
      icon: <Eye size={36} className="text-amber-500" />,
      title: "Visibilité et mise en avant accessibles à tous",
      desc: "Boosts, promotions et badges à la carte pour tous les hôtes, même en version gratuite.",
      highlight:
        'Mise en avant géolocalisée, badge "Coup de cœur", promos $REBEL',
    },
    {
      icon: <Shield size={36} className="text-red-500" />,
      title: "Contrôle total & sécurité",
      desc: "Définissez vos prix, disponibilités, règles de la maison et conditions d’accueil. Contrat digital, check-in sécurisé, assurance dommages.",
      highlight:
        "Modification instantanée, alertes proactives, garantie Hôte Serein",
    },
    {
      icon: <DollarSign size={36} className="text-emerald-500" />,
      title: "Paiements rapides & transparents",
      desc: "Virements sous 24h après arrivée du client ou paiement crypto sans frais. Cash-flow en temps réel, export comptable 1 clic.",
      highlight: "Premier paiement sous 48h, 0% frais cachés",
    },
    {
      icon: <Headphones size={36} className="text-purple-500" />,
      title: "Support humain 24/7",
      desc: "Assistance dédiée par des experts, réponse en moins de 15 minutes, 7j/7.",
      highlight: "Accompagnement personnalisé à chaque étape",
    },
    {
      icon: <Users size={36} className="text-cyan-500" />,
      title: "Communauté & réseau d’hôtes",
      desc: "Groupes locaux, échanges de bonnes pratiques, événements exclusifs et masterclass mensuelles.",
      highlight: "Rejoignez #HôtesProvence et bien d’autres",
    },
    {
      icon: <Star size={36} className="text-yellow-400" />,
      title: "Programme REBEL Hôte",
      desc: "Gagnez des $REBEL à chaque réservation, avis 5★, ou parrainage. Utilisez-les pour des services, des améliorations ou du cash.",
      highlight: "100 $REBEL = 10€ cash ou -10% sur services",
    },
    {
      icon: <BarChart size={36} className="text-indigo-400" />,
      title: "Statistiques & recommandations",
      desc: "Tableaux de bord intelligents, comparatif marché, analyse annulations, recommandations personnalisées.",
      highlight: 'Ex : "Augmentez votre prix de 12€ ce weekend"',
    },
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Marie D.",
      property: "Villa Provençale",
      text: "Direct Horizon a transformé ma gestion locative. Mes revenus ont augmenté de 40% en 3 mois, et je passe 70% moins de temps à gérer les réservations!",
      rating: 5,
    },
    {
      name: "Thomas L.",
      property: "Appartement Parisien",
      text: "Enfin une plateforme qui respecte vraiment les propriétaires. Les paiements sont rapides, l'interface est intuitive, et le support est réactif. Je ne reviendrai plus jamais aux géants du secteur.",
      rating: 5,
    },
    {
      name: "Sophie et Marc",
      property: "Gîte Normand",
      text: "La communauté d'hôtes est incroyable. Nous avons appris énormément des autres propriétaires et doublé notre taux d'occupation grâce à leurs conseils.",
      rating: 5,
    },
  ];

  // Onboarding étapes
  const onboarding = [
    {
      num: 1,
      title: "Créez votre annonce",
      desc: "Ajoutez votre propriété, des photos professionnelles et détaillez vos services.",
      sub: "5 minutes en moyenne",
    },
    {
      num: 2,
      title: "Configurez votre calendrier",
      desc: "Définissez vos disponibilités, tarifs et règles de la maison en quelques clics.",
      sub: "Synchronisation instantanée sur tous les canaux",
    },
    {
      num: 3,
      title: "Recevez des réservations",
      desc: "Commencez à accueillir des voyageurs et à générer des revenus.",
      sub: "Premier paiement sous 48h",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeIn}
          >
            <span className="block mb-2">
              🌟 DIRECT HORIZON : VOTRE PORTE D'ENTRÉE VERS UN HÉBERGEMENT LIBRE
              ET RENTABLE
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            {...fadeIn}
          >
            (Oubliez les commissions – Ici, 100% de vos revenus restent dans
            votre poche)
          </motion.p>
          <motion.div {...fadeIn}>
            <div className="inline-flex bg-red-700 px-6 py-3 rounded-full font-bold">
              ZÉRO COMMISSION SUR LES RÉSERVATIONS - TOUJOURS
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chiffres-clés */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {keyStats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-xl p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className={`text-5xl font-bold mb-4 ${stat.color}`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              TOUT CE DONT VOUS AVEZ BESOIN POUR RÉUSSIR
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Toutes les fonctionnalités essentielles, sans commission, sans
              compromis.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">{f.icon}</div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                </div>
                <p className="mb-4">{f.desc}</p>
                <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg border-l-4 border-red-500">
                  <Zap className="text-yellow-400 mr-2" size={20} />
                  <span className="font-medium">{f.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Onboarding */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              COMMENT ÇA MARCHE ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Votre propriété en ligne en 3 étapes simples
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onboarding.map((step, idx) => (
              <motion.div
                className="text-center"
                key={idx}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="mb-4">{step.desc}</p>
                <div className="text-sm text-gray-400">{step.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="py-16 px-4 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              CE QUE DISENT NOS PROPRIÉTAIRES
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ils ont libéré leur potentiel locatif avec Direct Horizon
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-black bg-opacity-30 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * idx }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                      size={20}
                    />
                  ))}
                </div>
                <p className="italic mb-6">"{t.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-gray-300">{t.property}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6">
              PRÊT À TRANSFORMER VOTRE PROPRIÉTÉ ?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez la révolution des propriétaires libérés des commissions
              abusives
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2" fill="currentColor" />
                Commencer gratuitement
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpRight className="mr-2" />
                Voir une démo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">
          DIRECT HORIZON - La plateforme des propriétaires libres
        </p>
        <p className="text-sm mt-2">
          Zéro commission sur réservations • Paiements rapides • Support 24/7
        </p>
      </footer>
    </div>
  );
}
