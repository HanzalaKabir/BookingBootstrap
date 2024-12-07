"use client";
import Image, { StaticImageData } from "next/image";
import HotelImage1 from "@/assets/images/hotel-detail 01.jpg";
import HotelImage2 from "@/assets/images/hotel-detail 02.jpg";
import HotelImage3 from "@/assets/images/hotel-detail 03.jpg";
import HotelImage4 from "@/assets/images/hotel-detail 04.jpg";
import HotelImage5 from "@/assets/images/hotel-detail 05.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExpandedImage from "./ExpandedImage";

const hotelImages = [
  HotelImage1,
  HotelImage2,
  HotelImage3,
  HotelImage4,
  HotelImage5,
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleExpandClick = (index: number) => {
    setIsExpanded(true);
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex max-sm:flex-col justify-center p-2 mb-8">
      <div className="relative max-sm:w-full max-sm:mb-2 max-sm:h-[10rem] w-[55%] h-[20rem] group">
        <Image
          src={HotelImage1}
          alt="Hotel Room"
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FontAwesomeIcon
            icon={faExpand}
            className="text-white text-2xl"
            onClick={() => handleExpandClick(0)}
          />
        </div>
      </div>
      <div className="flex flex-col max-sm:w-full max-sm:p-0 w-[45%] h-[20rem] pl-2">
        <div className="relative h-1/2 mb-1 group">
          <Image
            src={HotelImage2}
            alt="Hotel Room"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon
              icon={faExpand}
              className="text-white text-2xl"
              onClick={() => handleExpandClick(1)}
            />
          </div>
        </div>
        <div className="relative flex w-full h-1/2 mt-1">
          <div className="relative w-1/2 mr-1 group">
            <Image
              src={HotelImage3}
              alt="Hotel Room"
              fill
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FontAwesomeIcon
                icon={faExpand}
                className="text-white text-2xl"
                onClick={() => handleExpandClick(2)}
              />
            </div>
          </div>
          <div className="relative w-1/2 ml-1 group">
            <Image
              src={HotelImage4}
              alt="Hotel Room"
              fill
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <p
                className="text-white text-xl"
                onClick={() => handleExpandClick(3)}
              >
                View All
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isExpanded ? "block" : "hidden"}`}>
        <ExpandedImage
          image={hotelImages[currentImageIndex]}
          onClose={() => setIsExpanded(false)}
          images={hotelImages}
          currentImageIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </div>
  );
};

export default Gallery;
