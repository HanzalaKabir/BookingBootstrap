"use client";
import { useRef } from "react";
import OffersCard from "../../OffersCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import promoImage1 from "@/assets/images/best_details _01.jpg";
import promoImage2 from "@/assets/images/best_details _02.jpg";
import promoImage3 from "@/assets/images/best_details _03.jpg";

const offers = [
  {
    src: promoImage1,
    tagline: "50% Discount",
    content: "Grab Now",
  },
  {
    src: promoImage2,
    tagline: "30% Discount",
    content: "Grab Now",
  },
  {
    src: promoImage3,
    tagline: "60% Discount",
    content: "Grab Now",
  },
  {
    src: promoImage1,
    tagline: "70% Discount",
    content: "Grab Now",
  },
  {
    src: promoImage1,
    tagline: "80% Discount",
    content: "Grab Now",
  },
];

const Carousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex justify-center text-center group pb-16">
      <ShadCarousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent className="px-4 py-4 ">
          {offers.map((offer, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 "
            >
              <div className="border border-gray-300 rounded-lg">
                <OffersCard
                  src={offer.src}
                  tagline={offer.tagline}
                  content={offer.content}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </ShadCarousel>
    </div>
  );
};

export default Carousel;
