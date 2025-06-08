"use client";
import React from "react";

export default function RebelPage() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-white">
        {/* Titre principal */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
            💥 $REBEL : LA CRYPTO QUI RÉVOLUTIONNE VOS VOYAGES
          </h1>
          <p className="italic text-yellow-200">
            Token ERC-20 sur Polygon – Frais quasi-nuls, Transactions éclair
          </p>
        </section>

        {/* Pourquoi $REBEL */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🔍 POURQUOI $REBEL ? L'ESSENCE EN 3 POINTS
          </h2>
          <ol className="list-decimal list-inside mt-4 space-y-3 text-white">
            <li>
              <span className="font-bold text-yellow-200">
                Votre pouvoir d'achat = votre pouvoir de changement :
              </span>{" "}
              Chaque token finance des projets locaux ET vos économies.
            </li>
            <li>
              <span className="font-bold text-yellow-200">
                Transparence radicale :
              </span>{" "}
              Toutes les transactions traçables sur Polygonscan.
            </li>
            <li>
              <span className="font-bold text-yellow-200">
                Liberté sans frontières :
              </span>{" "}
              Échangez, donnez, convertissez – sans banques intermédiaires.
            </li>
          </ol>
        </section>

        {/* Fonctionnement Technique */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            ⚙️ FONCTIONNEMENT TECHNIQUE : SIMPLE COMME BONJOUR
          </h2>
          <table className="w-full mt-4 text-left border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Élément
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Détails
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Blockchain
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Polygon (réseau écologique 99% moins gourmand qu'Ethereum ♻️)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Portefeuille intégré
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Sécurisé dans votre espace membre → Aucune extension requise
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Sécurité
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Smart contract audité par CertiK – Voir le rapport complet
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Adresse du contrat
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  0x4a8fREBEL... (copiez-collez dans Metamask pour vérifier)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Utiliser $REBEL */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            💎 UTILISER $REBEL : 4 FAÇONS CONCRÈTES
          </h2>
          <ol className="list-decimal list-inside mt-4 space-y-4 text-white">
            <li>
              <span className="font-bold text-yellow-200">
                Payer vos voyages :
              </span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  10 $REBEL = 1€ de réduction sur toute réservation Direct
                  Horizon.
                </li>
                <li>
                  <span className="italic">
                    Exemple : 1 000 $REBEL = 100€ de réduction sur ton séjour à
                    Ushuaia.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-yellow-200">
                Soutenir des causes locales :
              </span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Don direct en 1 clic :</li>
                <li>→ 100 $REBEL = 1 kit scolaire 🎒</li>
                <li>→ 500 $REBEL = 5 arbres plantés 🌳</li>
                <li>
                  Bonus : Pour chaque don &gt; 10 000 $REBEL, Direct Horizon
                  ajoute +10%.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-yellow-200">
                Convertir en euros :
              </span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Taux : 100 $REBEL = 10€ (moins 3% de frais de traitement).
                </li>
                <li>Minimum : 500 $REBEL → Recevez 48.50€ sur votre compte.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-yellow-200">
                Accéder à l'écosystème VIP :
              </span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>500 $REBEL : Dégustation de vins avec un hôte toscan 🍷</li>
                <li>
                  1 000 $REBEL : Cours de surf avec un champion balinais 🏄‍♂️
                </li>
                <li>
                  5 000 $REBEL : Voyage-testeur pour évaluer de nouvelles
                  pépites ✨
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Burn Mechanism */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🔥 MÉCANISME DE BRÛLAGE ("BURN") : NOTRE ARME ANTI-INFLATION
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>
              Les tokens ont une durée de vie pour ne pas devenir un objet de
              spéculation.
            </li>
            <li>
              Objectif : favoriser l’utilisation des tokens → Augmenter la
              valeur utile de chaque $REBEL.
            </li>
          </ul>
        </section>

        {/* Impact */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🌍 IMPACT : VOS TOKENS CHANGENT LE MONDE (VRAIMENT)
          </h2>
          <table className="w-full mt-4 text-left border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Projet financé
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Seuil de $REBEL
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Impact réel
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  École au Sénégal 🏫
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  250 000 $REBEL
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  1 salle de classe rénovée
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Reforestation Amazonie 🌳
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  500 000 $REBEL
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  5 000 arbres plantés
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Artisans Bali 🎨
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  100 000 $REBEL
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  10 ateliers préservant la culture
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-yellow-300">
            → Vous votez pour le prochain projet via l’app ! 10 $REBEL = 1 vote.
          </p>
        </section>

        {/* Implémentation Technique */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🛠 Implémentation Technique
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Wallet intégré avec seed sécurisée + récupération sociale</li>
            <li>Aucune vente initiale : gains uniquement par actions</li>
            <li>Conversion auto en € pour grand public</li>
            <li>Mini tutoriels vidéos dans l'app</li>
          </ul>
        </section>

        {/* Mot du fondateur */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-xl font-bold text-yellow-300 mb-3">
            📣 LE MOT DU FONDATEUR
          </h2>
          <blockquote className="italic text-white border-l-4 border-yellow-300 pl-4">
            « $REBEL n’est pas seulement une crypto.
            <br />
            C’est un coup de poing dans l’éco-système du tourisme.
            <br />
            Chaque token est une balle dans le barillet contre les
            intermédiaires.
            <br />
            Votre portefeuille est votre vote quotidien pour un monde meilleur.
            »
            <br />
            <span className="block mt-2 font-bold">
              – Léa Martin, Co-fondatrice
            </span>
          </blockquote>
        </section>

        {/* Call to Action */}
        <section className="bg-yellow-600/20 p-6 rounded-lg text-center border border-yellow-500/30">
          <h2 className="text-xl font-bold text-yellow-300">
            🚀 PRÊT À REJOINDRE L'ÉCOSYSTÈME ?
          </h2>
          <a
            href="https://directhorizon.com/rebel-wallet"
            className="inline-block mt-4 px-8 py-4 bg-yellow-400 text-black rounded-full text-xl font-bold hover:bg-yellow-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            💎 Accéder à mon portefeuille $REBEL
          </a>
          <p className="mt-4 text-sm text-yellow-200">
            Avertissement : $REBEL est un token utilitaire, non destiné à la
            spéculation. Valeur indicative : 10 $REBEL = 1€.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            ❓ QUESTIONS FRÉQUENTES (FAQ REBEL)
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-white">
            <li>
              <span className="font-bold">
                Comment transférer mes $REBEL vers Metamask ?
              </span>
              <br />
              Voir tuto.
            </li>
            <li>
              <span className="font-bold">
                Les tokens peuvent-ils prendre de la valeur ?
              </span>
              <br />
              Non, ce n’est pas un investissement. Leur valeur utilitaire est
              fixe : 10 $REBEL = 1€ chez Direct Horizon.
            </li>
            <li>…</li>
          </ul>
        </section>

        {/* Campagne Lancement */}
        <section className="bg-yellow-600/20 p-6 rounded-lg text-center border border-yellow-500/30">
          <h2 className="text-xl font-bold text-yellow-300">
            🔥 Campagne Lancement
          </h2>
          <p className="mt-2 text-lg font-medium text-white">
            Parrainez 3 amis avant le{" "}
            <strong className="text-yellow-300">30/06</strong> →{" "}
            <strong className="text-yellow-300">500 $REBEL</strong> (50 €) +
            badge "Founding Rebel"
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/20 text-center text-white">
          En résumé :{" "}
          <strong>Polygon = rapidité ⚡ + low cost 💰 + éco-friendly 🌱</strong>
          <br />
          <span className="text-yellow-300">
            Besoin d'un prototype testnet Mumbai ? On vous guide 🚀
          </span>
        </footer>
      </div>
    </div>
  );
}
