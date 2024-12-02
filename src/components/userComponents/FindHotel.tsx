"use client";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon } from "lucide-react";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

function FindHotel() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="rounded ">
      <div>
        <span className="font-bold text-lg">Check Availibility </span>
      </div>
      <div className="flex flex-row p-8  shadow-2xl shadow-gray-300 rounded-lg relative bg-white flex-wrap">
        <div className="flex">
          <LocationOnIcon fontSize="large" />
          <DropdownMenu>
            <span className=" text-gray-600 absolute left-24 top-5 bg-white">
              Location
            </span>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="py-6 px-10 rounded-lg mx-4  text-md"
              >
                Select Location
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex mr-2">
          <CalendarIcon size={35} className="mr-5" />
          <div className="relative">
            <span className=" text-gray-600 absolute  bg-white left-3 top-[-0.7rem] z-10">
              Dates
            </span>
            <div className="grid gap-2 ">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[17rem] justify-start text-left font-normal py-6 px-8 text-md",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
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
        </div>
        <div className="flex">
          <PersonOutlineOutlinedIcon fontSize="large" className="mr-2" />
          <div className="relative">
            <span className=" text-gray-600 absolute  bg-white left-3 top-[-0.7rem] z-10">
              Guests & Rooms
            </span>
            <Button
              id="guests"
              variant={"outline"}
              className={cn("w-[13rem] justify-star font-normal py-6 text-md ")}
            >
              3 Guests 1 Room
            </Button>
          </div>
        </div>

        <Button className="relative left-[3.8rem] bg-purple-800 rounded-full text-white w-15 h-15 ">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default FindHotel;
