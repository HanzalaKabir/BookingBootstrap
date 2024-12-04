import { DottedLines, Star } from "@/assets/images/ExportedSVGs";
import PosterImage from "@/assets/images/07.jpg";
import {
  faUtensils,
  faStopwatch,
  faShield,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row my-2 mb-4">
      <div className="relative h-[625px] w-full lg:w-2/3 xl:1/2 mr-20 mb-8">
        <Star className="absolute top-[-2.2rem] left-[-2.3rem] fill-yellow-400 z-10" />
        <div className=" h-full w-full rounded-2xl z-5">
          <Image
            src={PosterImage}
            fill
            alt="Hotel Image"
            className="h-full w-full object-cover  rounded-2xl"
          />
        </div>
        <div className="absolute right-[-5rem]  bottom-[-2.5rem] lg:right-[-2.5rem] -z-10 hidden md:block ">
          <DottedLines className="fill-blue-200" />
        </div>
      </div>
      <div className="relative w-full lg:w-2/3 xl:1/2 p-1">
        <h1 className="text-5xl font-extrabold  mb-12 max-sm:text-3xl">
          The Best Holidays Start Here!
        </h1>
        <p className="text-base text-gray-600 mb-12">
          Book your hotel with us and don't forget to grab an awesome hotel deal
          to save massive on your stay.
        </p>
        <div className="flex max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full  mr-2">
            <div className="p-6">
              <FontAwesomeIcon icon={faUtensils} color="green" size="2x" />
              <h4 className="font-bold text-lg">Quality Food</h4>
              <p className="text-base text-gray-600">
                Departure defective arranging rapturous did. Conduct denied
                adding worthy little.
              </p>
            </div>
            <div className="p-6">
              <FontAwesomeIcon icon={faStopwatch} color="brown" size="2x" />
              <h4 className="font-bold text-lg">Quick Services</h4>
              <p className="text-base text-gray-600">
                Supposing so be resolving breakfast am or perfectly.
              </p>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full space-y-6 ">
            <div className="p-6">
              <FontAwesomeIcon icon={faShield} color="blue" size="2x" />
              <h4 className="font-bold text-lg">High Security</h4>
              <p className="text-base text-gray-600">
                Arranging rapturous did believe him all had supported.
              </p>
            </div>
            <div className="p-6">
              <FontAwesomeIcon
                icon={faBoltLightning}
                color="orange"
                size="2x"
              />
              <h4 className="font-bold text-lg">24 Hours Alert</h4>
              <p className="text-base text-gray-600">
                Rapturous did believe him all had supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
