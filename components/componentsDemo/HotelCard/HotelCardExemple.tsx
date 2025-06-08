"use client";
import React from "react";

function HotelCard() {
  const allImages = [
    "/cardHotel/card1.png",
    "/cardHotel/card2.png",
    "/cardHotel/card3.png",
    "/cardHotel/card4.png",
    "/cardHotel/vagoda.png",
    "/cardHotel/vbing.png",
    "/cardHotel/vbooking.png",
    "/cardHotel/vexpedia.png",
    "/cardHotel/vgoogle.png",
    "/cardHotel/vhostelworld.png",
    "/cardHotel/vhotel.png",
    "/cardHotel/vhotwire.png",
    "/cardHotel/vhrs.png",
    "/cardHotel/vkayak.png",
    "/cardHotel/vlastminute.png",
    "/cardHotel/vorbitz.png",
    "/cardHotel/vostrovok.png",
    "/cardHotel/vpriceline.png",
    "/cardHotel/vskyscanner.png",
    "/cardHotel/vtrivago.png",
  ];

  // Fonction pour déterminer le type d'image
  const getImageType = (imagePath: string | string[]) => {
    return imagePath.includes("card") ? "card" : "platform";
  };

  // Fonction pour extraire le nom
  const getImageName = (imagePath: string, type: string) => {
    const fileName = imagePath.split("/").pop() ?? "";

    if (type === "card") {
      return `Carte ${fileName.replace("card", "").replace(".png", "")}`;
    } else {
      return (
        fileName.replace(".png", "").replace("v", "").charAt(0).toUpperCase() +
        fileName.replace(".png", "").replace("v", "").slice(1)
      );
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4">
        {allImages.map((imagePath, index) => {
          const imageType = getImageType(imagePath);
          const imageName = getImageName(imagePath, imageType);
          const isCard = imageType === "card";

          return (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col ${
                isCard ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`${
                  isCard ? "h-32" : "h-16"
                } flex items-center justify-center p-4`}
              >
                <img
                  src={imagePath}
                  alt={imageName}
                  className={`${
                    isCard
                      ? "w-full h-full object-cover"
                      : "w-12 h-12 object-contain"
                  } hover:scale-110 transition-transform duration-300`}
                  onError={(e) => {
                    e.currentTarget.src = isCard
                      ? "/placeholder-card.jpg"
                      : "/placeholder-logo.jpg";
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotelCard;
