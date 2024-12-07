import OffersCard from "@/components/OffersCard";
import Deal from "@/assets/images/best_details _01.jpg";

const Offers = () => {
  return (
    <div>
      <p className="text-3xl font-bold pb-2">Today's Best Deals</p>
      <OffersCard
        src={Deal}
        tagline="Travel Plan"
        content="Get up to $10,000 for lifetime limits"
      />
    </div>
  );
};

export default Offers;
