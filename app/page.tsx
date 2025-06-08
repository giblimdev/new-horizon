"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
 
  CheckCircle,
  XCircle,
  Shield,
  Heart,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function page() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données réutilisables
  const comparisonData = {
    them: [
      {
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        text: "**+25% de frais surprise** à la caisse",
      },
      {
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        text: "**20% de commission** sur chaque réservation",
      },
      {
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        text: "**Algorithmes trompeurs** qui gonflent les prix",
      },
      {
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        text: "**Fausse urgence** pour vous faire payer plus",
      },
    ],
    us: [
      {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        text: "**0 FRAIS CACHÉS** - prix final immédiat",
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        text: "**0% DE COMMISSION** pour les hôtes",
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        text: "**Prix directs** sans manipulation",
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        text: "**Transparence totale** à chaque étape",
      },
    ],
  };

  const features = [
    {
      icon: <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />,
      title: "**Zéro Frais Clients**",
      description:
        "Ce que vous voyez est ce que vous payez - aucune surprise à la caisse.",
      borderColor: "border-blue-500/30",
    },
    {
      icon: <Heart className="h-16 w-16 text-green-400 mx-auto mb-6" />,
      title: "**0% Commission**",
      description:
        "Les hôtes gardent 100% du prix affiché - des tarifs plus justes pour tous.",
      borderColor: "border-green-500/30",
    },
    {
      icon: <Globe className="h-16 w-16 text-purple-400 mx-auto mb-6" />,
      title: "**Économie Réelle**",
      description:
        "Votre argent va directement aux hôtes, pas aux intermédiaires.",
      borderColor: "border-purple-500/30",
    },
  ];

  const testimonials = [
    {
      emoji: "😱",
      quote:
        "**ENFIN !** Une plateforme qui ne rajoute pas des frais à la dernière étape !",
      author: "- Sarah, Paris",
      color: "yellow",
    },
    {
      emoji: "🤯",
      quote: "J'ai **ÉCONOMISÉ 30%** en réservant directement chez l'hôte !",
      author: "- Marcus, Berlin",
      color: "green",
    },
    {
      emoji: "🔥",
      quote: "En tant qu'hôte, je gagne **30% DE PLUS** par réservation !",
      author: "- Elena, Rome",
      color: "purple",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <div className="text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black -z-50">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              animation: "pulse 6s infinite",
            }}
          />
        </div>

        {/* Hero Section */}
        <section className=" min-h-screen flex items-center justify-center px-4">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className=" rounded-3xl  bg-black p-5">
              <div className="mb-12">
                <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 animate-pulse">
                  STOP
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                  Aux <span className="text-red-500">FRAIS CACHÉS</span> des
                  plateformes
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-yellow-400">
                  **0 FRAIS AJOUTÉS** • **0% DE COMMISSION** • **100%
                  TRANSPARENCE**
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                {[
                  {
                    value: "0€",
                    title: "FRAIS CLIENTS",
                    description: "Aucun frais ajouté",
                    color: "red",
                  },
                  {
                    value: "0%",
                    title: "COMMISSION",
                    description: "Pour les hôtes",
                    color: "green",
                  },
                  {
                    value: "100%",
                    title: "DIRECT",
                    description: "Prix sans intermédiaire",
                    color: "purple",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-${stat.color}-600/20 backdrop-blur-sm rounded-2xl p-6 border border-${stat.color}-500/30`}
                  >
                    <div
                      className={`text-4xl font-black text-${stat.color}-400 mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold">{stat.title}</div>
                    <div className="text-sm text-gray-300">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-6">
                <Link href={"/com/client"}>
                  <button className="m-2 group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50">
                    <span className="relative">🔥 Espace Clients</span>
                  </button>
                </Link>
                <Link href={"/demo"}>
                  <button className="m-2 group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50">
                    <span className="relative">
                      🔥 ESSAYER LA DÉMO GRATUITE
                    </span>
                  </button>
                </Link>
                <Link href={"/com/host"}>
                  <button className="m-2 group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50">
                    <span className="relative">🔥 Espace Hébergeurs</span>
                  </button>
                </Link>

                <p className="text-lg text-gray-300 my-4">
                  **AUCUNE CARTE REQUISE** • **SANS ENGAGEMENT** • **100%
                  TRANSPARENT**
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="text-5xl font-black text-center mb-16">
              <span className="text-red-500">LES AUTRES</span> vs{" "}
              <span className="text-green-500">NOUS</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Them Column */}
              <div className="bg-red-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/50">
                <h3 className="text-3xl font-black text-red-400 mb-8 text-center">
                  🏢 PLATEFORMES CLASSIQUES
                </h3>

                <div className="space-y-6">
                  {comparisonData.them.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {item.icon}
                      <span className="text-xl">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Us Column */}
              <div className="bg-green-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-500/50">
                <h3 className="text-3xl font-black text-green-400 mb-8 text-center">
                  ⚡ DIRECTETHIC
                </h3>

                <div className="space-y-6">
                  {comparisonData.us.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {item.icon}
                      <span className="text-xl">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-white">
              Le voyage <strong>sans intermédiaire</strong>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-black/50 backdrop-blur-sm rounded-2xl p-8 border ${feature.borderColor} text-center`}
                >
                  {feature.icon}
                  <h3
                    className="text-2xl font-bold mb-4"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-black mb-16">
              CE QU'ILS DISENT DE NOUS
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-${testimonial.color}-500/30`}
                >
                  <div className="text-6xl mb-4">{testimonial.emoji}</div>
                  <p
                    className="text-xl font-semibold mb-4"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  <div className={`text-${testimonial.color}-400 font-bold`}>
                    {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-6xl font-black mb-8">
              PRÊT À VOYAGER <strong>SANS INTERMÉDIAIRE</strong> ?
            </h2>

            <p className="text-2xl mb-12 text-gray-300">
              <strong>0 FRAIS CACHÉS</strong> •{" "}
              <strong>0% DE COMMISSION</strong> •{" "}
              <strong>100% SATISFACTION</strong>
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🚀 <strong>ESSAYER GRATUITEMENT</strong>
              </button>

              <button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                💰 <strong>DEVENIR HÔTE</strong> (0% COMMISSION)
              </button>
            </div>

            <div className="mt-8 text-lg text-gray-400">
              **AUCUN ENGAGEMENT** • **SANS CARTE BANCAIRE** • **ESSAI
              IMMÉDIAT**
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto text-center">
        <Link href={"/com/invest"}>
          <button className="m-2 group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50">
            <span className="relative">🔥 Espace Investiseurs</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
