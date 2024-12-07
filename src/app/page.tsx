import HeroSection from "@/components/userComponents/HomePage/HeroSection";
import { NavigationMenuDemo } from "@/components/userComponents/HomePage/NavigationBar";
import Carousel from "@/components/userComponents/HomePage/Carousel";
import Features from "@/components/userComponents/HomePage/Features";
import FeaturedHotels from "@/components/userComponents/HomePage/FeaturedHotels";
import Clients from "@/components/userComponents/HomePage/Clients";
import ExploreNearby from "@/components/userComponents/HomePage/ExploreNearby";
import DownloadApp from "@/components/userComponents/HomePage/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <div>
        <NavigationMenuDemo />
        <div className="overflow-x-hidden">
          <div className="xl:px-24 xl:py-8 py-2 lg:mx-12 mx-8">
            <HeroSection />
            <Carousel />
            <Features />
            <FeaturedHotels />
            <Clients />
            <ExploreNearby />
          </div>
          <DownloadApp />
          <Footer />
        </div>
      </div>
    </>
  );
}
