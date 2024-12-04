"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGlobe, faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import profilePicture from "../../assets/images/user_profile.jpg";

export function BookingNavigation() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/",
      icon: faHome,
      label: "Hotels",
    },
    {
      href: "/upcoming",
      icon: faPlaneDeparture,
      label: "Flights",
    },
    {
      href: "/upcoming",
      icon: faGlobe,
      label: "Tours",
    },
    {
      href: "/upcoming",
      icon: faCar,
      label: "Cabs",
    },
  ];

  return (
    <NavigationMenu className="hidden 2xl:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link
              href={item.href}
              className={`
            ${navigationMenuTriggerStyle()}
            ${
              pathname === item.href
                ? "bg-indigo-100 text-indigo-800"
                : "hover:bg-gray-100"
            }
            flex items-center
          `}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-1" />
              <span className="text-lg">{item.label}</span>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href={"#"}>
            <span className="inline-block">
              <FontAwesomeIcon
                icon={faBell}
                className="mr-1 rounded-sm  p-2 bg-gray-200"
                size="lg"
              />
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div className="w-[40] h-[40]">
            <Link href={"#"}>
              <Image
                className="rounded"
                src={profilePicture}
                alt="profile picture"
                layout="responsive"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
