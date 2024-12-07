import Image, { StaticImageData } from "next/image";

type cardProp = {
  src: StaticImageData;
  location: string;
  driveTime: string;
};

const ExploreNearbyCard = ({ src, location, driveTime }: cardProp) => {
  return (
    <div className=" mx-14 max-sm:mx-0 mb-8 ">
      <div className="relative w-32 h-32 rounded-full mb-2 ">
        <Image
          src={src}
          alt="Nearby City"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold text-lg text-center">{location}</h4>
        <p className="text-gray-600 text-center">{driveTime} min drive</p>
      </div>
    </div>
  );
};

export default ExploreNearbyCard;
