import CheckAvailibility from "@/components/userComponents/CheckAvailibility";
import FindHotel from "@/components/userComponents/FindHotel";
import { NavigationMenuDemo } from "@/components/userComponents/NavigationBar";

export default function Home() {
  return (
    <div className="px-36 py-8">
      <NavigationMenuDemo />
      <CheckAvailibility />
      <div className="relative bottom-48 z-50 pl-20 pr-48">
        <FindHotel />
      </div>
    </div>
  );
}
