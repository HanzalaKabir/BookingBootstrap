"use client";
import { useRef } from "react";
import CarouselCard from "./CarouselCard";
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
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {offers.map((offer, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <CarouselCard
                src={offer.src}
                tagline={offer.tagline}
                content={offer.content}
              />
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
