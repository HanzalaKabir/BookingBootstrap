"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import WebsiteLogo from "../../assets/images/brand_logo.png";
import Image from "next/image";

export function MainNavigation() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <div className="flex justify-center items-center  ">
          <NavigationMenuItem>
            <div className="w-[50] h-[50] mr-4">
              <Link href="/" className="">
                <Image
                  src={WebsiteLogo}
                  alt="Brand Logo"
                  width={50}
                  height={50}
                  layout="responsive"
                  className=""
                />
              </Link>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <span className="font-bold text-3xl lg:text-4xl">Booking.com</span>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
