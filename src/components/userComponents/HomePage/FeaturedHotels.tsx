import FeaturedHotelCard from "./FeaturedHotelCard";
import featuredHotelImage01 from "@/assets/images/hotel-suggestions 01.jpg";
import featuredHotelImage02 from "@/assets/images/hotel-suggestions 02.jpg";
import featuredHotelImage03 from "@/assets/images/hotel-suggestions 03.jpg";
import featuredHotelImage04 from "@/assets/images/hotel-suggestions 04.jpg";

const featuredHotels = [
  {
    src: featuredHotelImage01,
    location: "New York",
    hotelName: "Baga Comfort",
    price: 455,
    rating: 4.5,
  },
  {
    src: featuredHotelImage02,
    location: "California",
    hotelName: "New Apollo Hotel",
    price: 585,
    rating: 4.8,
  },
  {
    src: featuredHotelImage03,
    location: "Los Angeles",
    hotelName: "New Age Hotel",
    price: 385,
    rating: 4.6,
  },
  {
    src: featuredHotelImage04,
    location: "Chicago",
    hotelName: "Helios Beach Resort",
    price: 665,
    rating: 4.8,
  },
];

const FeaturedHotels = () => {
  return (
    <div className="mb-12">
      <h1 className="flex justify-center font-extrabold  text-3xl md:text-6xl mb-8">
        Featured Hotels
      </h1>
      <div>
        <div className="flex flex-wrap justify-around max-sm:flex-col max-sm:justify-center ">
          {featuredHotels.map((hotel, index) => (
            <FeaturedHotelCard
              key={index}
              src={hotel.src}
              price={hotel.price}
              location={hotel.location}
              rating={hotel.rating}
              hotelName={hotel.hotelName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
