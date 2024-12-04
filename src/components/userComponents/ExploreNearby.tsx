import Nearby1 from "@/assets/images/nearby 01.jpg";
import Nearby2 from "@/assets/images/nearby 02.jpg";
import Nearby3 from "@/assets/images/nearby 03.jpg";
import Nearby4 from "@/assets/images/nearby 04.jpg";
import Nearby5 from "@/assets/images/nearby 05.jpg";
import Nearby6 from "@/assets/images/nearby 06.jpg";
import Nearby7 from "@/assets/images/nearby 07.jpg";
import Nearby8 from "@/assets/images/nearby 08.jpg";
import Nearby9 from "@/assets/images/nearby 09.jpg";
import Nearby10 from "@/assets/images/nearby 10.jpg";
import Image from "next/image";
import ExploreNearbyCard from "./ExploreNearbyCard";

const NearbyCities = [
  {
    src: Nearby1,
    location: "San Francisco",
    driveTime: "13",
  },
  {
    src: Nearby2,
    location: "San Francisco",
    driveTime: "25",
  },
  {
    src: Nearby3,
    location: "San Francisco",
    driveTime: "45",
  },
  {
    src: Nearby4,
    location: "San Francisco",
    driveTime: "60+",
  },
  {
    src: Nearby5,
    location: "San Francisco",
    driveTime: "35",
  },
  {
    src: Nearby6,
    location: "San Francisco",
    driveTime: "105+",
  },
  {
    src: Nearby7,
    location: "San Francisco",
    driveTime: "58",
  },
  {
    src: Nearby8,
    location: "San Francisco",
    driveTime: "56",
  },
  {
    src: Nearby9,
    location: "San Francisco",
    driveTime: "74",
  },
  {
    src: Nearby10,
    location: "San Francisco",
    driveTime: "74",
  },
];

const ExploreNearby = () => {
  return (
    <div className="">
      <h1 className="font-extrabold text-3xl text-center mb-10">
        Explore Nearby
      </h1>
      <div className="flex flex-wrap justify-center ">
        {NearbyCities.map((city, index) => (
          <ExploreNearbyCard
            key={index}
            src={city.src}
            location={city.location}
            driveTime={city.driveTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreNearby;
