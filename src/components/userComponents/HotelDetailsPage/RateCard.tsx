import { Button } from "@/components/ui/button";

const RateCard = () => {
  return (
    <div className="border border-gray-400 rounded-2xl p-4 mb-4">
      <div className="flex mb-3 justify-between ">
        <div className="">
          <span className="text-gray-400 block">Price Starts at</span>
          <span className="text-2xl font-bold block">$3,500</span>
        </div>
        <div className="=">
          <span className="font-semibold block text-md">1 room per night</span>
          <span className="text-gray-400 text-sm block">
            + $285 taxes & fees
          </span>
        </div>
      </div>
      <div className="mb-3">
        <span className="text-md block">4.5 ⭐</span>
        <span className="text-md block">Free breakfast available</span>
      </div>
      <div>
        <Button className="w-full text-white bg-purple-600">
          View 10 rooms
        </Button>
      </div>
    </div>
  );
};

export default RateCard;
