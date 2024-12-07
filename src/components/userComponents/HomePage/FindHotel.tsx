"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon, Search, MapPin, User } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

function FindHotel() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="relative w-full -mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4 hidden lg:block">
          Check Availability
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            {/* Location input */}
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Location
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 justify-start gap-2"
                  >
                    <MapPin className="h-5 w-5" />
                    Select location
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Popular locations</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>New York</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>London</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Paris</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Calendar input */}
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Check in - out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start gap-2",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="h-5 w-5" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd")} -{" "}
                          {format(date.to, "LLL dd")}
                        </>
                      ) : (
                        format(date.from, "LLL dd")
                      )
                    ) : (
                      "Select dates"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests input */}
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Guests & rooms
              </label>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12 justify-start gap-2"
                >
                  <User className="h-5 w-5" />2 Guests, 1 Room
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 h-12 w-12 p-0 rounded-full flex-shrink-0">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindHotel;
