import HeroSection from "@/components/userComponents/HeroSection";
import { NavigationMenuDemo } from "@/components/userComponents/NavigationBar";
import Carousel from "@/components/userComponents/Carousel";
import Features from "@/components/userComponents/Features";
import FeaturedHotels from "@/components/userComponents/FeaturedHotels";
import Clients from "@/components/userComponents/Clients";
import ExploreNearby from "@/components/userComponents/ExploreNearby";

export default function Home() {
  return (
    <div className="">
      <NavigationMenuDemo />
      <div className="xl:px-24 xl:py-8 py-2 lg:mx-12 mx-8">
        <HeroSection />
        <Carousel />
        <Features />
        <FeaturedHotels />
        <Clients />
        <ExploreNearby />
      </div>
    </div>
  );
}
