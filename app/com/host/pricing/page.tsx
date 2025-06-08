"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  Zap,
  BarChart,
  Gift,
  Shield,
  PlusCircle,
  Star,
  Smartphone,
} from "lucide-react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("free");

  // Animation presets
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Pricing plans
  const plans = [
    {
      key: "free",
      name: "Offre Gratuite",
      price: "0€ / mois",
      badge: "Toujours disponible",
      color: "green",
      description:
        "Publiez votre hôtel gratuitement, recevez des réservations directes sans commission, profitez d’un tableau de bord basique et de la messagerie.",
    },
    {
      key: "premium",
      name: "Offre Premium",
      price: "À partir de 19€ / mois",
      badge: "Recommandé",
      color: "red",
      description:
        "Visibilité boostée, outils avancés (prix dynamique, check-in digital, analyses pro), 2 Boosts inclus/mois, garantie satisfait ou remboursé.",
    },
    {
      key: "gestion",
      name: "Gestion Pro",
      price: "3€ / réservation",
      badge: "Performance",
      color: "blue",
      description:
        "Centralisez vos annonces, automatisez la gestion, synchronisez vos calendriers, statistiques ultra-détaillées. Payez uniquement à la performance.",
    },
  ];

  // Premium benefits
  const premiumBenefits = [
    {
      icon: <BarChart size={24} />,
      title: "Taux de remplissage boosté",
      description: "+40% grâce aux outils de visibilité avancés.",
    },
    {
      icon: <Gift size={24} />,
      title: "Gain net par chambre",
      description: "+25€/nuit en moyenne grâce aux commissions évitées.",
    },
    {
      icon: <Shield size={24} />,
      title: "Sécurité renforcée",
      description: "Protection contre fraudes et annulations abusives.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Gestion Pro",
      description:
        "Centralisation, automatisations, synchronisation multi-canaux, reporting avancé.",
    },
  ];

  // Gestion Pro description
  const gestionProDesc = (
    <div className="bg-gray-900 border-l-4 border-red-600 p-6 rounded-xl my-8 flex items-start">
      <Smartphone className="text-red-500 mr-4 mt-1" size={36} />
      <div>
        <h3 className="text-xl font-bold mb-2">
          Nouveau : Gestion Pro Direct Horizon
        </h3>
        <p className="mb-2">
          <b>Libérez-vous de la gestion chronophage !</b> Notre application de
          gestion professionnelle (<b>3 €/réservation</b>) centralise toutes vos
          annonces, automatise vos tâches, synchronise vos calendriers sur tous
          les canaux et vous donne accès à des statistiques ultra-détaillées.
        </p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Centralisation multi-annonces et multi-canaux</li>
          <li>Automatisations avancées (prix, communication, check-in/out)</li>
          <li>Statistiques et reporting pro</li>
          <li>Support prioritaire</li>
        </ul>
        <div className="mt-2 text-sm text-gray-400">
          <b>Sans engagement.</b> Payez seulement si vous recevez des
          réservations via l’app Gestion Pro.
        </div>
      </div>
    </div>
  );

  // Onboarding steps
  const onboarding = [
    {
      num: 1,
      title: "Créez votre annonce gratuitement",
      desc: "Publiez votre hôtel sans frais, en moins de 8 minutes.",
      icon: <PlusCircle size={32} className="text-red-500 mx-auto mb-2" />,
    },
    {
      num: 2,
      title: "Proposez des offres et promotions",
      desc: "Attirez plus de voyageurs avec vos propres offres spéciales, même en version gratuite.",
      icon: <Gift size={32} className="text-yellow-400 mx-auto mb-2" />,
    },
    {
      num: 3,
      title: "Débloquez plus de puissance",
      desc: "Passez au Premium ou activez Gestion Pro pour aller plus loin (visibilité, automatisations, multi-annonces, statistiques avancées…).",
      icon: <Star size={32} className="text-amber-400 mx-auto mb-2" />,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Mon taux de remplissage a bondi de 40% grâce à Direct Horizon.",
      author: "Chloé, éco-lodge dans les Alpes",
    },
    {
      text: "Mes revenus nets/nuit sont passés de 58€ à 82€.",
      author: null,
    },
    {
      text: "La Gestion Pro a simplifié la vie de toute mon équipe : tout est centralisé, je gagne du temps et je paie seulement quand je reçois une réservation.",
      author: "Marc, hôtelier à Bordeaux",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white font-sans">
      <Head>
        <title>Direct Horizon | Tarifs Hôteliers</title>
        <meta
          name="description"
          content="Tarification transparente et agressive pour hôtels – Direct Horizon"
        />
      </Head>

      {/* Hero */}
      <div className="bg-gradient-to-r from-red-800 to-gray-900 py-20 px-4 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" {...fadeIn}>
          <span className="block mb-2">
            💥 DIRECT HORIZON – DITES ADIEU AUX COMMISSIONS
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          {...fadeIn}
        >
          Gardez 100% de vos revenus, investissez dans votre liberté, pas dans
          les poches des plateformes.
        </motion.p>
        <motion.div {...fadeIn}>
          <div className="inline-flex bg-red-700 px-6 py-3 rounded-full font-bold">
            ZÉRO COMMISSION SUR LES RÉSERVATIONS - TOUJOURS
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="flex border-b border-gray-700">
          {plans.map((plan) => (
            <motion.button
              key={plan.key}
              className={`py-4 px-6 text-lg font-bold flex items-center transition-colors duration-300 ease-in-out rounded-t-lg ${
                activeTab === plan.key
                  ? `text-${plan.color}-700 border-b-4 border-${plan.color}-600 bg-${plan.color}-50`
                  : "text-gray-400 border-b-4 border-transparent hover:text-red-600 hover:border-red-600"
              }`}
              onClick={() => setActiveTab(plan.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ borderBottomWidth: 0 }}
              animate={{ borderBottomWidth: activeTab === plan.key ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {plan.name}
              <span
                className={`ml-2 bg-${plan.color}-600 text-xs px-2 py-1 rounded font-semibold text-white shadow-sm`}
              >
                {plan.badge}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.key}
              className={`bg-gray-800 rounded-xl border-2 border-${plan.color}-600 p-8 text-center`}
              {...fadeIn}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div
                className={`text-3xl font-extrabold mb-4 text-${plan.color}-400`}
              >
                {plan.price}
              </div>
              <p className="mb-6">{plan.description}</p>
              {plan.key === "premium" && (
                <div className="mt-4 text-sm text-gray-300"></div>
              )}
              {plan.key === "gestion" && (
                <div className="mt-4 text-sm text-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>
        {activeTab === "gestion" && gestionProDesc}
      </div>

      {/* Premium Benefits */}
      {(activeTab === "premium" || activeTab === "gestion") && (
        <div className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="text-red-500">
                  Pourquoi passer au Premium ou à la Gestion Pro ?
                </span>
                <span className="block text-xl mt-2">
                  Investissez moins qu'une nuit annulée, gagnez en liberté et en
                  efficacité
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {premiumBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-800 border border-red-600 rounded-xl p-6"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-red-500 mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Garantie "Satisfait ou Remboursé"
                    </h3>
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-white text-red-700 rounded-full font-bold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Essai gratuit 30 jours
                    <Zap className="ml-2" fill="currentColor" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Onboarding Steps */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-red-400">
          Lancez-vous en 3 étapes simples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {onboarding.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center"
              {...fadeIn}
            >
              {step.icon}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="mb-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Comparison */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-400">
          Comparatif
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-center">
              Plateformes classiques
            </h3>
            <ul className="space-y-3">
              <li>Commissions 15-35% cachées</li>
              <li>Clients anonymes</li>
              <li>Support bot</li>
              <li>Avis non modérés</li>
              <li>Argent bloqué 15 jours</li>
              <li>Mise en avant payante limitée</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-red-600">
            <h3 className="text-xl font-bold mb-4 text-center text-red-400">
              Direct Horizon
            </h3>
            <ul className="space-y-3">
              <li>0% sur la mise en relation</li>
              <li>Voyageurs vérifiés</li>
              <li>Assistance humaine</li>
              <li>Avis équitables et constructifs</li>
              <li>Paiement en 24h</li>
              <li>Boosts & promos accessibles à tous</li>
              <li>
                Gestion Pro : payez seulement si vous recevez une réservation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black text-center">
        <h2 className="text-2xl font-bold mb-8 text-red-400">
          Ils ont choisi Direct Horizon
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <p className="text-lg mb-2">"{t.text}"</p>
              {t.author && (
                <span className="text-gray-400 text-sm">– {t.author}</span>
              )}
            </div>
          ))}
        </div>
        <blockquote className="mt-12 text-xl italic text-gray-300 max-w-2xl mx-auto">
          “Ici, vous n'êtes pas un numéro de contrat. Vous êtes un architecte
          d'expériences, un gardien de terroir, un rebelle qui vit de sa
          passion.” – Marco, hôte à Lisbonne
        </blockquote>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6">
              Passez en mode libéré – Créez votre profil hôtelier en 8 minutes
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Aucun engagement. Désactivez simplement vos autres plateformes
              quand vous êtes complet.
            </p>
            <a
              href="https://directhorizon.com/hotels-revolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2" fill="currentColor" />
                Commencer gratuitement
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">
          DIRECT HORIZON - Liberté, transparence, communauté et impact positif
        </p>
        <p className="text-sm mt-2">
          Zéro commission sur réservations - Toujours
        </p>
      </footer>
    </div>
  );
}
