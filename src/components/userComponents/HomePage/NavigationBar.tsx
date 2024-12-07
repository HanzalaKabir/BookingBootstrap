"use client";

import { BookingNavigation } from "./BookingNavigation";
import { MainNavigation } from "./MainNavigation";

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-center lg:justify-between mb-6 lg:px-[4rem] xl:px-[8rem] py-3 sticky top-0 z-20 bg-white min-h-[60px] shadow backdrop-blur-sm backdrop-filter ">
      <MainNavigation />
      <BookingNavigation />
    </div>
  );
}
