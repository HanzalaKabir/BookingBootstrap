"use client";

import { BookingNavigation } from "./BookingNavigation";
import { MainNavigation } from "./MainNavigation";

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-center  2xl:justify-between mb-6 px-[8rem] pt-[1rem] sticky top-0 z-20 bg-white ">
      <MainNavigation />
      <BookingNavigation />
    </div>
  );
}
