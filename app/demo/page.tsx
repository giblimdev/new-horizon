"use client";

import React from "react";
import HeroForm from "@/components/componentsDemo/landing/HeroForm";
import HeroImage from "@/components/componentsDemo/landing/HeroImage";
import WhyChooseUs from "@/components/componentsDemo/landing/WhyChooseUs";
import HistoriqueNav from "@/components/componentsDemo/landing/HistoriqueNav";
import RodmapResa from "@/components/componentsDemo/landing/RodmapResa";
import AccomodationTypes from "@/components/componentsDemo/landing/AccomodationTypes";
import DestinationTypes from "@/components/componentsDemo/landing/DestinationTypes";
import City from "@/components/componentsDemo/landing/City";
import BeMember from "@/components/componentsDemo/landing/BeMember";
import InstallApp from "@/components/componentsDemo/landing/InstallApp";
import Landingpromo from "@/components/componentsDemo/landing/Landingpromo";

export default function Home() {
  // Exemple d'objet hotel (non utilisé dans ce composant, mais vous pouvez l'utiliser plus tard)

  return (
    <div className="max-w min-h-screen bg-gradient-to-br from-blue-50 to-purple-200 ">
      <div className="">
        <HeroImage />
      </div>

      {/* HeroForm Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <HeroForm />
        </div>
      </div>
      <div className="-mt-20">
        <WhyChooseUs />
      </div>
      <div>
        <HistoriqueNav />
      </div>
      <div>
        <div>
          <AccomodationTypes />
        </div>
        <div>
          <DestinationTypes />
        </div>
        <div>
          <City />
        </div>
        <div>
          <BeMember />
        </div>
        <div>
          <InstallApp />
        </div>
        <div>
          <Landingpromo />
        </div>
      </div>

      <div>
        <RodmapResa />{" "}
      </div>
    </div>
  );
}
