import { NavigationMenuDemo } from "@/components/userComponents/HomePage/NavigationBar";
import Gallery from "@/components/userComponents/HotelDetailsPage/Gallery";
import RateCard from "@/components/userComponents/HotelDetailsPage/RateCard";
import SearchBar from "@/components/userComponents/HotelDetailsPage/SearchBar";
import AboutSection from "@/components/userComponents/HotelDetailsPage/AboutSection";
import Offers from "@/components/userComponents/HotelDetailsPage/Offers";

const page = () => {
  return (
    <div>
      <NavigationMenuDemo />
      <div className="xl:px-20 xl:py-8 py-2 lg:mx-12 md:mx-8 mx-2 ">
        <SearchBar />
        <Gallery />
        <div className="flex justify-between ">
          <div className="w-2/3">
            <AboutSection />
          </div>
          <div className="w-1/3">
            <div className="sticky top-[110px]">
              <RateCard />
              <Offers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
