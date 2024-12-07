import Image from "next/image";
import Link from "next/link";
import WebsiteLogo from "@/assets/images/brand_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="text-white bg-black lg:px-12 lg:py-5 xl:px-32 xl:py-8 py-2 ">
      <div className="flex justify-between">
        <div className="w-1/4">
          <div className="flex items-center pb-4 ">
            <div className="w-[50] h-[50] mr-4 rounded-full">
              <Link href="/" className="">
                <Image
                  src={WebsiteLogo}
                  alt="Brand Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-full"
                />
              </Link>
            </div>
            <span className="font-bold text-">Booking.com</span>
          </div>
          <div className="text-gray-300">
            <p className="mb-2">
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>
            <p className="flex mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+1234 568 963</span>
            </p>
            <p className="flex">
              <FontAwesomeIcon icon={faMailBulk} className="mr-2" />
              <span>example@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around w-2/3">
          <div>
            <p className="font-bold text-xl pb-3">Page</p>
            <ul className="text-gray-300 [&>li]:py-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>News and Blog</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-3">Link</p>
            <ul className="text-gray-300 [&>li]:py-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>News and Blog</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-3">Global Site</p>
            <ul className="text-gray-300 [&>li]:py-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>News and Blog</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl pb-3">Booking</p>
            <ul className="text-gray-300 [&>li]:py-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>News and Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
