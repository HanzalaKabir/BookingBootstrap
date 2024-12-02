"use client";

import { BookingNavigation } from "./BookingNavigation";
import { MainNavigation } from "./MainNavigation";

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-between mb-16">
      <MainNavigation />
      <BookingNavigation />
    </div>
  );
}
