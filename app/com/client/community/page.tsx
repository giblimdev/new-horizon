"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Shield,
  Gift,
  User,
  Check,
  BarChart,
  ArrowRight,
  Zap,
  Users,
  Star,
  AlertCircle,
} from "lucide-react";

export default function PriceWatchersCommunity() {
  const [activeStep, setActiveStep] = useState(1);

  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleUp = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
  };

  const processSteps = [
    {
      step: 1,
      title: "Détectez une offre douteuse",
      description:
        "Lors de vos recherches, repérez une différence de prix suspecte entre une plateforme et le prix direct",
      icon: <Eye size={36} className="text-amber-500" />,
    },
    {
      step: 2,
      title: "Signalez via l'application",
      description:
        "Capturez l'écran et envoyez le détail de l'offre en quelques secondes",
      icon: <AlertCircle size={36} className="text-red-500" />,
    },
    {
      step: 3,
      title: "Validation par l'hôtelier",
      description:
        "L'hôtelier confirme la commission réelle dans son backoffice",
      icon: <Check size={36} className="text-green-500" />,
    },
    {
      step: 4,
      title: "Crédits voyage offerts",
      description:
        "Recevez des crédits utilisables sur vos prochaines réservations",
      icon: <Gift size={36} className="text-purple-500" />,
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} className="text-blue-500" />,
      title: "Protection collective",
      description:
        "Chaque signalement protège des milliers de voyageurs potentiels",
    },
    {
      icon: <BarChart size={32} className="text-green-500" />,
      title: "Transparence totale",
      description:
        "Les données validées sont partagées pour éclairer toute la communauté",
    },
    {
      icon: <Users size={32} className="text-amber-500" />,
      title: "Pouvoir communautaire",
      description: "Ensemble, nous forçons l'industrie à plus d'honnêteté",
    },
  ];

  const testimonials = [
    {
      name: "Marie T.",
      role: "Veilleuse de prix",
      text: "En 3 signalements, j'ai gagné 45 $REBEL de crédits voyage. Mais surtout, j'ai aidé plusieurs hôteliers à révéler des commissions abusives!",
      credits: 45,
    },
    {
      name: "Hôtel du Parc",
      role: "Partenaire Direct Horizon",
      text: "Grâce aux veilleurs, nous avons pu prouver que Booking prenait 38% sur nos chambres premium. Nous avons ajusté nos prix en direct en conséquence.",
      credits: null,
    },
    {
      name: "Thomas L.",
      role: "Voyageur fréquent",
      text: "La communauté m'a sauvé plusieurs fois de mauvaises surprises. Et les crédits gagnés ont financé mon dernier week-end!",
      credits: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <span className="block mb-2">VEILLEURS DE PRIX</span>
            <span className="text-yellow-400">
              LA COMMUNAUTÉ QUI RÉVOLUTIONNE LE VOYAGE
            </span>
          </motion.h1>

          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="inline-flex items-center bg-black bg-opacity-30 px-6 py-3 rounded-full mb-8">
              <Users className="mr-2 text-yellow-400" />
              <span className="font-bold text-xl">
                Votre super-pouvoir : garantir des prix justes pour tous
              </span>
            </div>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Rejoignez notre armée de veilleurs et transformez chaque
              signalement en crédits voyage
            </p>

            <motion.button
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-full text-xl font-bold flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-2" fill="currentColor" />
              Devenir veilleur
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              COMMENT FONCTIONNE LA VEILLE COLLECTIVE ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Un système simple et récompensé pour garantir la transparence des
              prix
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border rounded-xl p-6 text-center ${
                  activeStep === step.step
                    ? "border-yellow-500"
                    : "border-gray-700"
                }`}
                onClick={() => setActiveStep(step.step)}
                whileHover={{ y: -5 }}
                style={{ cursor: "pointer" }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-gray-900 font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl p-8 border border-yellow-500">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="text-5xl font-bold text-yellow-400 mb-2">
                  {processSteps.find((s) => s.step === activeStep)?.step}
                </div>
                <div className="text-3xl font-bold">
                  {processSteps.find((s) => s.step === activeStep)?.title}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg mb-4">
                  {processSteps.find((s) => s.step === activeStep)?.description}
                </p>

                {activeStep === 1 && (
                  <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg">
                    <User className="text-blue-400 mr-2" />
                    <span>
                      Exemple: Une chambre à 120€ sur Booking, mais 85€ en
                      direct
                    </span>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg">
                    <ArrowRight className="text-green-400 mr-2" />
                    <span>
                      Notre système analyse automatiquement la différence
                    </span>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg">
                    <Check className="text-green-500 mr-2" />
                    <span>
                      "Oui, Booking prend 35% sur ce prix" - Hôtel du Parc
                    </span>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg">
                    <Gift className="text-purple-400 mr-2" />
                    <span>5-15€ de crédits par signalement validé</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              POURQUOI REJOINDRE LES VEILLEURS ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Plus qu'un système de récompense, un mouvement pour changer
              l'industrie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                whileHover={{ rotate: 1, y: -5 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl p-6 border border-yellow-500">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Système de Niveaux</h3>
                <p>Plus vous contribuez, plus vos récompenses augmentent!</p>
              </div>
              <div className="flex">
                <div className="text-center px-4 py-2">
                  <div className="text-sm text-gray-800">Veilleur</div>
                  <div className="text-2xl font-bold">5$REBEL/signalement</div>
                </div>
                <div className="text-center px-4 py-2 bg-yellow-500 rounded-lg">
                  <div className="text-sm text-gray-800">Gardiens</div>
                  <div className="text-2xl font-bold">10$REBEL/signalement</div>
                </div>
                <div className="text-center px-4 py-2">
                  <div className="text-sm text-gray-800">Sentinelle</div>
                  <div className="text-2xl font-bold">15$REBEL/signalement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">LES HÉROS DU QUOTIDIEN</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ils protègent la communauté et sont récompensés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black bg-opacity-30 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} />
                  ))}
                </div>

                <p className="italic mb-6">"{testimonial.text}"</p>

                <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>

                  {testimonial.credits && (
                    <div className="flex items-center bg-yellow-500 text-gray-900 px-3 py-1 rounded-full">
                      <Gift className="mr-1" size={16} />
                      <span className="font-bold">
                        {testimonial.credits}$REBEL
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              NOTRE IMPACT COLLECTIF
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Depuis le lancement de la communauté des veilleurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500">12,458</div>
              <div className="text-gray-400">Signalements</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500">€243,850</div>
              <div className="text-gray-400">Crédits distribués</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500">1,248</div>
              <div className="text-gray-400">Hôtels protégés</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500">72%</div>
              <div className="text-gray-400">Commission max détectée</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl p-6 border border-yellow-500">
            <div className="flex items-center">
              <Shield className="mr-4 text-yellow-400" size={36} />
              <div>
                <h3 className="text-xl font-bold mb-2">Notre engagement</h3>
                <p>
                  Chaque signalement validé est transformé en alerte publique
                  pour protéger l'ensemble des voyageurs. Les hôteliers peuvent
                  corriger leurs prix en direct grâce à ces informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-800 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              PRÊT À DEVENIR UN SUPER-HÉROS DU VOYAGE ?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez la communauté des veilleurs et transformez chaque voyage
              en mission
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-gray-900 text-yellow-400 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2" fill="currentColor" />
                Rejoindre les veilleurs
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-gray-900 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="mr-2" />
                Voir les alertes en cours
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-yellow-500">
        <p className="text-lg">
          DIRECT HORIZON - La puissance de la communauté contre les commissions
          abusives
        </p>
        <p className="text-sm mt-2">
          Ensemble, nous rendons le voyage plus juste et transparent
        </p>
      </footer>
    </div>
  );
}
