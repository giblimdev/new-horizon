"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Map, Heart, Shield, Star, Zap, Check, 
  Sun, Mountain, Home, Utensils, Sparkles, Leaf,
  Users, MessageSquare, Gift, ArrowRight,
  Download
} from 'lucide-react';

export default function TravelerCommunication() {
  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scaleUp = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 }
  };

  const keyMessages = [
    {
      icon: <Globe size={36} className="text-blue-500" />,
      title: "Découvrez des lieux uniques",
      description: "Votre prochaine aventure commence ici. Explorez des hébergements authentiques pour des séjours inoubliables.",
      highlight: "Plus de 5 000 perles rares sélectionnées à la main"
    },
    {
      icon: <Zap size={36} className="text-yellow-500" />,
      title: "Simplicité et Facilité",
      description: "Réservez votre escapade en quelques clics. Trouvez l'hébergement parfait, où que vous soyez, quand vous le voulez.",
      highlight: "Processus de réservation 70% plus rapide que la concurrence"
    },
    {
      icon: <Shield size={36} className="text-green-500" />,
      title: "Confiance et Sécurité",
      description: "Voyagez l'esprit tranquille grâce à nos paiements sécurisés et nos profils vérifiés.",
      highlight: "Assurance annulation incluse sur toutes les réservations"
    },
    {
      icon: <Gift size={36} className="text-purple-500" />,
      title: "Pour Tous les Goûts et Budgets",
      description: "Que vous cherchiez un appartement cosy en ville, une villa avec piscine ou une cabane insolite, nous avons ce qu'il vous faut.",
      highlight: "Économisez jusqu'à 30% vs les plateformes traditionnelles"
    },
    {
      icon: <Sparkles size={36} className="text-pink-500" />,
      title: "Inspiration Garantie",
      description: "Laissez-vous inspirer par nos collections et nos recommandations pour votre prochaine destination.",
      highlight: "Des guides locaux exclusifs dans chaque hébergement"
    },
    {
      icon: <Heart size={36} className="text-red-500" />,
      title: "Expérience Utilisateur Optimale",
      description: "Une application intuitive pour une recherche et une réservation sans tracas.",
      highlight: "Notée 4.9/5 sur les stores"
    }
  ];

  const nicheSpecializations = [
    {
      icon: <Leaf size={32} className="text-green-500" />,
      title: "Hébergements éco-responsables",
      description: "Tourisme durable avec engagements vérifiés"
    },
    {
      icon: <Sun size={32} className="text-yellow-500" />,
      title: "Séjours bien-être",
      description: "Retraites yoga, spas naturels et détente"
    },
    {
      icon: <Mountain size={32} className="text-amber-700" />,
      title: "Aventures en plein air",
      description: "Randonnées, sports extrêmes et nature"
    },
    {
      icon: <Utensils size={32} className="text-red-500" />,
      title: "Expériences gastronomiques",
      description: "Dégustations, cours de cuisine et tables d'hôtes"
    },
    {
      icon: <Home size={32} className="text-blue-500" />,
      title: "Cabines insolites",
      description: "Yourtes, cabanes dans les arbres, péniches"
    },
    {
      icon: <Users size={32} className="text-purple-500" />,
      title: "Télétravail inspirant",
      description: "Espaces dédiés avec connexion haut débit et vue imprenable"
    }
  ];

  const differentiationPoints = [
    {
      icon: <div className="text-3xl font-bold">💯</div>,
      title: "Transparence Radicale des Prix",
      description: "Prix Final 100% Visible Dès l'Instant 1 (pas de frais cachés, taxes incluses)",
      comparison: "Chez nous, le prix affiché = le prix payé. Chez les autres, +25% à la caisse."
    },
    {
      icon: <div className="text-3xl font-bold">⚖️</div>,
      title: "Éthique & Équité",
      description: "Commissions réduites pour les hôtes (3x moins de frais qu'ailleurs)",
      comparison: "Garantie de prix stables même en période de forte demande"
    },
    {
      icon: <div className="text-3xl font-bold">🗺️</div>,
      title: "Expérience Locale Authentique",
      description: "Sélection manuelle par des experts du territoire",
      comparison: "Guide numérique intégré avec bonnes adresses secrètes des hôtes"
    },
    {
      icon: <div className="text-3xl font-bold">🤖</div>,
      title: "Technologie Humaine",
      description: "Service client proactif avec assistance en temps réel (humain, pas de bot)",
      comparison: "Algorithme Anti-Surcharge: Pas de suggestions sur-touristiques"
    },
    {
      icon: <div className="text-3xl font-bold">🌱</div>,
      title: "Engagement Écologique",
      description: "Score Carbone Visible pour chaque réservation",
      comparison: "Compensation CO₂ intégrée au prix"
    }
  ];

  const technicalFeatures = [
    {
      icon: <Map size={32} className="text-blue-400" />,
      title: "Carte interactive",
      description: "Découvrez les expériences gratuites autour de votre hébergement"
    },
    {
      icon: <Shield size={32} className="text-red-400" />,
      title: "Mode SOS Voyageur",
      description: "Assistance 24/7 pour imprévus (retard, perte de clés...)"
    },
    {
      icon: <Star size={32} className="text-yellow-400" />,
      title: "Historique perso",
      description: "Sauvegarde de vos critères préférés pour retrouver des perles rares"
    },
    {
      icon: <MessageSquare size={32} className="text-green-400" />,
      title: "Conciergerie virtuelle",
      description: "Réservation d'activités et restaurants directement dans l'app"
    }
  ];

  const socialProof = [
    {
      text: "Grâce à Direct Horizon, j'ai économisé 120€ sur mon week-end et découvert une petite auberge familiale absolument délicieuse!",
      author: "Marie L.",
      location: "Bretagne"
    },
    {
      text: "Enfin une plateforme transparente! Pas de mauvaise surprise à la réservation, et l'hébergement correspondait exactement aux photos.",
      author: "Thomas P.",
      location: "Provence"
    },
    {
      text: "Le mode SOS m'a sauvé la mise quand j'ai perdu mes clés à minuit. L'assistance a répondu en 2 minutes!",
      author: "Sophie D.",
      location: "Pyrénées"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <span className="block mb-2">VOYAGEZ AUTREMENT</span>
          <span className="text-red-400">AVEC DIRECT HORIZON</span>
        </motion.h1>
        
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            La plateforme qui révolutionne le voyage avec transparence, éthique et authenticité
          </p>
          
          <div className="inline-flex items-center bg-black bg-opacity-30 px-6 py-3 rounded-full mb-8">
            <Zap className="mr-2 text-yellow-400" />
            <span className="font-bold text-xl">Prix transparents • Hébergements authentiques • Impact positif</span>
          </div>
          
          <motion.button
            className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="mr-2" />
            Découvrir nos pépites
          </motion.button>
        </motion.div>
      </div>

      {/* Key Messages */}
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
              Une expérience de voyage transformée, de la recherche au séjour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyMessages.map((message, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {message.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{message.title}</h3>
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

      {/* Niche Specialization */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              NOTRE UNIVERS DE VOYAGE
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Nous ne faisons pas tout, mais ce que nous faisons, nous le faisons exceptionnellement bien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nicheSpecializations.map((niche, index) => (
              <motion.div 
                key={index}
                className="bg-black bg-opacity-30 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                whileHover={{ rotate: 1, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {niche.icon}
                  </div>
                  <h3 className="text-xl font-bold">{niche.title}</h3>
                </div>
                <p>{niche.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-3">Pourquoi cette spécialisation ?</h3>
            <p className="max-w-3xl mx-auto">
              Les géants du voyage tentent de satisfaire tout le monde et finissent par ne satisfaire personne.
              Nous nous concentrons sur les voyageurs en quête d'authenticité, de sens et d'expériences mémorables.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Differentiation Points */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              COMMENT NOUS DÉFIONS LES GÉANTS
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Nos points de rupture stratégiques face à Booking, Expedia et Airbnb
            </p>
          </motion.div>

          <div className="space-y-8">
            {differentiationPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <p className="mt-2">{point.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-black bg-opacity-30 p-4 rounded-lg mt-4">
                  <ArrowRight className="text-yellow-400 mr-2" size={20} />
                  <span className="font-medium">{point.comparison}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">
              NOTRE DIFFÉRENCIATION TECHNIQUE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500 rounded-xl p-6 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-900 to-emerald-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              CE QUE DISENT NOS VOYAGEURS
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ils ont vécu la différence Direct Horizon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialProof.map((testimonial, index) => (
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
                      className="text-yellow-400" 
                      size={20}
                    />
                  ))}
                </div>
                
                <p className="italic mb-6">"{testimonial.text}"</p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-300">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Advertising Example */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              NOTRE ENGAGEMENT EN UNE ACCROCHE
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Le message qui résume notre combat
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-8 border border-red-600">
            <div className="text-center mb-6">
              <div className="inline-block bg-black bg-opacity-30 px-4 py-2 rounded-full mb-4">
                <span className="text-red-400 font-bold">Publicité Direct Horizon</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                "Fatigué des frais cachés et des logements bondés ?"
              </h3>
              
              <p className="text-xl mb-6">
                Notre appli vous montre le vrai prix, les vraies perles, et reverse 80% aux hôtes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-black bg-opacity-30 rounded-full">#TourismeEthique</span>
                <span className="px-3 py-1 bg-black bg-opacity-30 rounded-full">#Transparence</span>
                <span className="px-3 py-1 bg-black bg-opacity-30 rounded-full">#VoyageDifférent</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-black bg-opacity-20 rounded-lg">
              <h4 className="font-bold mb-2">Pourquoi ça marche ?</h4>
              <p>
                Cette accroche résume notre positionnement en alternative consciente qui résout les frustrations concrètes causées par les géants.
                Elle cible spécifiquement la niche des voyageurs éco-responsables, un marché en croissance de +20% par an.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">PRÊT À VOYAGER AUTREMENT ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez la révolution des voyageurs éclairés
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="mr-2" />
                Explorer nos destinations
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" />
                Télécharger l'app
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">DIRECT HORIZON - Le voyage réinventé</p>
        <p className="text-sm mt-2">Transparence • Authenticité • Éthique</p>
      </footer>
    </div>
  );
}