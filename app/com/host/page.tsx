"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, BarChart, Shield, Calendar, Eye, Settings, 
  DollarSign, Headphones, Users, BadgePercent, Zap, Check, 
  Star
} from 'lucide-react';

export default function HostCommunication() {
  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scaleUp = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  const keyMessages = [
    {
      icon: <BarChart size={36} className="text-green-500" />,
      title: "Augmentez Vos Revenus Facilement",
      description: "Rentabilisez votre propriété sans effort et accédez à une nouvelle source de revenus grâce à la location",
      highlight: "Jusqu'à 45% de revenus supplémentaires vs les plateformes traditionnelles"
    },
    {
      icon: <Settings size={36} className="text-blue-500" />,
      title: "Gestion Simplifiée",
      description: "Des outils intuitifs pour gérer vos annonces, calendriers et réservations en un seul endroit",
      highlight: "Synchronisation automatique des calendriers sur tous les canaux"
    },
    {
      icon: <Eye size={36} className="text-amber-500" />,
      title: "Visibilité Accrue",
      description: "Touchez des milliers de voyageurs potentiels à la recherche d'un hébergement comme le vôtre",
      highlight: "Apparaissez dans 90% plus de recherches qu'avec les solutions classiques"
    },
    {
      icon: <Shield size={36} className="text-red-500" />,
      title: "Contrôle Total",
      description: "Vous définissez vos prix, vos disponibilités et vos règles de la maison",
      highlight: "Modification instantanée des paramètres à tout moment"
    },
    {
      icon: <DollarSign size={36} className="text-emerald-500" />,
      title: "Paiements Sécurisés et Rapides",
      description: "Recevez vos paiements en toute sécurité et en temps voulu",
      highlight: "Virements garantis sous 48h après le départ du client"
    },
    {
      icon: <Headphones size={36} className="text-purple-500" />,
      title: "Support Dédié",
      description: "Notre équipe est là pour vous accompagner à chaque étape",
      highlight: "Assistance 7j/7 en moins de 15 minutes"
    },
    {
      icon: <Users size={36} className="text-cyan-500" />,
      title: "Communauté d'Hôtes",
      description: "Rejoignez une communauté d'hôtes passionnés et partagez vos expériences",
      highlight: "Événements exclusifs et masterclasses mensuelles"
    },
    {
      icon: <BadgePercent size={36} className="text-yellow-500" />,
      title: "Commission Ultrafine",
      description: "Profitez de notre modèle économique révolutionnaire",
      highlight: "Seulement 3% de commission vs 15-30% ailleurs"
    }
  ];

  const testimonials = [
    {
      name: "Marie D.",
      property: "Villa Provençale",
      text: "Direct Horizon a transformé ma gestion locative. Mes revenus ont augmenté de 40% en 3 mois, et je passe 70% moins de temps à gérer les réservations!",
      rating: 5
    },
    {
      name: "Thomas L.",
      property: "Appartement Parisien",
      text: "Enfin une plateforme qui respecte vraiment les propriétaires. Les paiements sont rapides, l'interface est intuitive, et le support est réactif. Je ne reviendrai plus jamais aux géants du secteur.",
      rating: 5
    },
    {
      name: "Sophie et Marc",
      property: "Gîte Normand",
      text: "La communauté d'hôtes est incroyable. Nous avons appris énormément des autres propriétaires et doublé notre taux d'occupation grâce à leurs conseils.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <span className="block mb-2">PROPRIÉTAIRES D'HÉBERGEMENTS</span>
            <span className="text-red-400">MAXIMISEZ VOS REVENUS AVEC DIRECT HORIZON</span>
          </motion.h1>
          
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              La plateforme qui vous rend le contrôle de votre activité locative et booste votre rentabilité
            </p>
            
            <motion.button
              className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-2" fill="currentColor" />
              Commencer gratuitement
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              POURQUOI CHOISIR DIRECT HORIZON ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Nous avons révolutionné la location touristique pour les propriétaires comme vous
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-xl p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl font-bold text-red-500 mb-4">0%</div>
              <h3 className="text-xl font-bold mb-3">Commission Réservation</h3>
              <p className="text-gray-400">
                Gardez 100% du prix de la nuit. Toujours.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-xl p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl font-bold text-red-500 mb-4">+45%</div>
              <h3 className="text-xl font-bold mb-3">Revenus Supplémentaires</h3>
              <p className="text-gray-400">
                En moyenne pour nos propriétaires actifs
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-xl p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl font-bold text-red-500 mb-4">-70%</div>
              <h3 className="text-xl font-bold mb-3">Temps de Gestion</h3>
              <p className="text-gray-400">
                Grâce à nos outils automatisés
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-600 rounded-xl p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl font-bold text-red-500 mb-4">24/7</div>
              <h3 className="text-xl font-bold mb-3">Support Propriétaires</h3>
              <p className="text-gray-400">
                Assistance directe en moins de 15 minutes
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Messages */}
      <div className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              VOTRE SUCCÈS, NOTRE MISSION
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour transformer votre propriété en machine à revenus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyMessages.map((message, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    {message.icon}
                  </div>
                  <h3 className="text-xl font-bold">{message.title}</h3>
                </div>
                
                <p className="mb-4">{message.description}</p>
                
                <div className="flex items-center bg-black bg-opacity-30 p-3 rounded-lg border-l-4 border-red-500">
                  <Zap className="text-yellow-400 mr-2" size={20} />
                  <span className="font-medium">{message.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              CE QUE DISENT NOS PROPRIÉTAIRES
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ils ont libéré leur potentiel locatif avec Direct Horizon
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
                    <Star 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      size={20}
                    />
                  ))}
                </div>
                
                <p className="italic mb-6">"{testimonial.text}"</p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-300">{testimonial.property}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>




      {/* How It Works */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              COMMENT ÇA MARCHE ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Votre propriété en ligne en 3 étapes simples
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Créez votre annonce</h3>
              <p className="mb-4">
                Ajoutez votre propriété, des photos professionnelles et détaillez vos services
              </p>
              <div className="text-sm text-gray-400">5 minutes en moyenne</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Configurez votre calendrier</h3>
              <p className="mb-4">
                Définissez vos disponibilités et tarifs en quelques clics
              </p>
              <div className="text-sm text-gray-400">Synchronisation instantanée</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Recevez des réservations</h3>
              <p className="mb-4">
                Commencez à accueillir des voyageurs et à générer des revenus
              </p>
              <div className="text-sm text-gray-400">Premier paiement sous 48h</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">PRÊT À TRANSFORMER VOTRE PROPRIÉTÉ ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez la révolution des propriétaires libérés des commissions abusives
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
        <p className="text-lg">DIRECT HORIZON - La plateforme des propriétaires libres</p>
        <p className="text-sm mt-2">Zéro commission sur réservations • Paiements rapides • Support 24/7</p>
      </footer>
    </div>
  );
}