import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import GooglePlayDownload from "@/assets/images/google-play.svg";
import AppleStoreDownload from "@/assets/images/app-store.svg";

const DownloadApp = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:flex-wrap justify-around bg-[#f5f5f6] p-5 px-10">
      <div className="flex max-md:flex-col max-lg:justify-center mb-5">
        <div className="flex rounded-xl bg-white max-md:w-full max-md:mb-5 w-1/3 p-4 mr-4 justify-center">
          <div className="flex items-center justify-center mr-3">
            <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
          </div>
          <div>
            <p className="font-bold mb-2">24x7 Help</p>
            <p className="text-gray-600 text-sm">
              If we fall short of your expectation in any way, let us know
            </p>
          </div>
        </div>
        <div className="flex rounded-xl bg-white max-md:w-full w-1/3 p-4 justify-center">
          <div className="flex items-center justify-center mr-3">
            <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
          </div>
          <div>
            <p className="font-bold mb-2">Payment Trust</p>
            <p className="text-gray-600 text-sm">
              All refunds come with no questions asked guarantee
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-2xl flex justify-center mb-4">
          Download Now
        </p>
        <div className="flex justify-center max-sm:flex-col">
          <div className="relative w-[150px] h-[50px] rounded-lg mr-2 max-sm:mb-4">
            <Image
              src={GooglePlayDownload}
              fill
              alt="Google Play"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="relative w-[150px] h-[50px] rounded-lg">
            <Image
              src={AppleStoreDownload}
              fill
              alt="App Store"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
