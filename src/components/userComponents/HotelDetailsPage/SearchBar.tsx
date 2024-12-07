"use client";

import { Input } from "@nextui-org/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";

interface Location {
  id: number;
  name: string;
}

const SearchBar = () => {
  const [location, setLocation] = useState("Select Location");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const locations: Location[] = [
    { id: 1, name: "New York" },
    { id: 2, name: "London" },
    { id: 3, name: "Paris" },
    { id: 4, name: "Los Angeles" },
    { id: 5, name: "Los Angeler" },
  ];

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => {
          const nextIndex =
            prev < filteredLocations.length - 1 ? prev + 1 : prev;
          ensureItemVisible(nextIndex);
          return nextIndex;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > -1 ? prev - 1 : -1));
        break;
      case "Enter":
        if (activeIndex >= 0) {
          setLocation(filteredLocations[activeIndex].name);
          setSearchTerm("");
          setActiveIndex(-1);
        }
        break;
    }
  };

  const ensureItemVisible = (index: number) => {
    const menuElement = menuRef.current;
    if (!menuElement) return;

    const item = menuElement.children[index + 2];
    if (item instanceof HTMLElement) {
      item.scrollIntoView({ block: "nearest" });
    }
  };

  return (
    <div className=" bg-[#f5f5f6] rounded-lg py-8 px-8 mb-12">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 mr-4">
          <label className="text-gray-500">Location</label>
          <div className="mt-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-center rounded-2xl py-4 text-md"
                >
                  {location}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent ref={menuRef} className="w-56">
                <Input
                  ref={inputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="mb-2"
                  placeholder="Search locations..."
                  autoFocus
                />
                {filteredLocations.map((loc, index) => (
                  <DropdownMenuCheckboxItem
                    key={loc.id}
                    onSelect={() => {
                      setLocation(loc.name);
                      setOpen(true);
                    }}
                    className={`${activeIndex === index ? "bg-accent" : ""}`}
                  >
                    {loc.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex-1 mr-4">
          <label className="text-gray-500">Check in-out</label>
          <div className="mt-2 ">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-center gap-2 rounded-2xl py-4 text-md",
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
        </div>
        <div className="flex-1 mr-4 ">
          <label className="text-gray-500">Guests</label>
          <Button className="w-full h-12 text-black border border-input whitespace-nowrap shadow-sm bg-background mt-2 rounded-2xl py-4 text-md">
            2-Guests 1-Rooms
          </Button>
        </div>
        <div className="rounded-2xl flex justify-center ">
          <Button className="py-6 px-8 rounded-2xl text-lg bg-blue-700 lg:relative top-8 mt-4 lg:mt-0">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
