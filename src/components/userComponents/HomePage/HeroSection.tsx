"use client";

import Image from "next/image";
import PosterImage from "@/assets/images/06.jpg";
import { Button } from "../../ui/button";
import VideoPlayerLogo from "@/assets/images/video_player.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

import icon01 from "@/assets/images/icons 01.jpg";
import icon02 from "@/assets/images/icons 02.jpg";
import FindHotel from "./FindHotel";

function HeroSection() {
  return (
    <div className=" relative mb-16">
      <div className=" flex relative justify-between rounded-xl lg:flex-row flex-col">
        <div className="lg:px-10 xl:pt-15 flex-1 lg:pt-0 bg-[#FEFEFE]">
          <div className="mb-4">
            <span className="lg:text-[3.5rem] text-[2.3rem] font-extrabold block mb-4">
              Find the top Hotels nearby
            </span>
            <span className="text-gray-500 ">
              We bring you not only a stay option, but an experience in your
              budget to enjoy the luxury.
            </span>
          </div>
          <div className="flex">
            <Button className="bg-[#f0ecfc] text-[#5646dc] font-bold text-md mr-6 hover:text-white hover:bg-[#5646dc] p-5">
              Discover Now
            </Button>
            <div className="flex">
              <Image
                className="rounded-full relative bottom-4"
                src={VideoPlayerLogo}
                alt="video player"
                width={70}
                height={70}
              />
              <Button className="w-10 h-10 relative right-14 rounded-full bg-white hover:bg-gray-300 group flex  items-center">
                <FontAwesomeIcon icon={faPlay} className=" text-black " />
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex-1 relative">
          <div className="relative h-[500px] w-full">
            {/* Added fixed height */}
            <Image
              src={PosterImage}
              alt="Hotel Image"
              className="rounded-xl object-cover h-full w-full"
              priority
              fill
            />
          </div>

          <div className="bg-white absolute top-[-1rem] right-[-1rem] px-4 py-2 rounded-md w-40 bg-opacity-65 text-center flex flex-col items-center justify-center shadow-2xl z-5">
            <FontAwesomeIcon
              icon={faHeadphones}
              style={{ fontSize: 30 }}
              className="block mb-2 text-orange-600"
            />
            <span className="font-bold text-lg">24/7</span>
            <span className="font-bold text-lg">Guide supports</span>
          </div>
          <div className="absolute top-8 lg:flex flex-col gap-6 left-[-2.5rem] items-center hidden">
            <div className="w-[50] h-[50] rounded-full overflow-hidden border-4 border-white ">
              <Image
                src={icon01}
                alt="icon"
                className="object-cover w-full h-full "
              />
            </div>
            <div className="w-[80] h-[80] rounded-full overflow-hidden border-4 border-white">
              <Image
                src={icon02}
                alt="icon"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <FindHotel />
    </div>
  );
}

export default HeroSection;
