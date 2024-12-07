"use client";
import HotelPartner1 from "@/assets/images/hotel-partner 01.svg";
import HotelPartner2 from "@/assets/images/hotel-partner 02.svg";
import HotelPartner3 from "@/assets/images/hotel-partner 03.svg";
import HotelPartner4 from "@/assets/images/hotel-partner 04.svg";
import HotelPartner5 from "@/assets/images/hotel-partner 05.svg";
import HotelPartner6 from "@/assets/images/hotel-partner 06.svg";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="flex flex-wrap justify-around mb-16">
      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner4}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>
      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner3}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>
      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner2}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>
      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner1}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>

      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner5}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>
      <div className="filter grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={HotelPartner6}
          alt="hotel-partner"
          width={130}
          height={130}
        />
      </div>
    </div>
  );
};

export default Clients;
