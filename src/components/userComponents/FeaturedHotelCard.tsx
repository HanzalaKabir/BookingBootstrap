import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type HotelDetails = {
  src: StaticImageData;
  location: string;
  hotelName: string;
  price: number;
  rating: number;
};

const FeaturedHotelCard = ({
  src,
  location,
  hotelName,
  price,
  rating,
}: HotelDetails) => {
  return (
    <div className="flex flex-col rounded-2xl   max-md:justify-center mb-8">
      <div className="sm:w-[300px] md:w-[320px] lg:w-[225px] ">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[400px] w-full transform transition-transform duration-500 hover:scale-110">
            <Image
              src={src}
              alt="Hotel Image"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="font-extrabold text-lg">{hotelName}</h1>
          <div className="flex justify-between text-green-600 font-semibold ">
            <p>${price}/starting at</p>
            <p className="flex">
              {rating}
              <Star className="text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedHotelCard;
