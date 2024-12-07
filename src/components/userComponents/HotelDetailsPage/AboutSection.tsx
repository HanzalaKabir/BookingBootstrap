import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSwimmingPool,
  faSnowflake,
  faBowlFood,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <div className="mr-12 ">
      <p className="font-bold text-4xl mb-5">About This Hotel</p>
      <hr className="mb-5" />
      <p className="text-2xl font-semibold mb-5">Main Highlights</p>
      <div className="flex mb-5 ">
        <div className="bg-[#f5f5f6] p-4 rounded-xl text-lg  mr-5">
          <FontAwesomeIcon icon={faWifi} />
        </div>{" "}
        <div className="bg-[#f5f5f6] p-4 rounded-xl text-lg  mr-5">
          <FontAwesomeIcon icon={faSwimmingPool} />
        </div>
        <div className="bg-[#f5f5f6] p-4 rounded-xl text-lg  mr-5">
          <FontAwesomeIcon icon={faSnowflake} />
        </div>
        <div className="bg-[#f5f5f6] p-4 rounded-xl text-lg  mr-5">
          <FontAwesomeIcon icon={faBowlFood} />
        </div>
      </div>
      <div className="mb-3">
        <p className="text-gray-600 mb-4">
          Demesne far-hearted suppose venture excited see had has. Dependent on
          so extremely delivered by. Yet no jokes worse her why.{" "}
          <strong>
            Bed one supposing breakfast day fulfilled off depending questions.
          </strong>
        </p>
        <p className="text-gray-600 mb-4">
          Delivered dejection necessary objection do Mr prevailed. Mr feeling
          does chiefly cordial in do. Water timed folly right aware if oh truth.
          Large above be to means. Dashwood does provide stronger is.
        </p>
        <p className="text-gray-600 mb-4">
          We focus a great deal on the understanding of behavioral psychology
          and influence triggers which are crucial for becoming a well rounded
          Digital Marketer. We understand that theory is important to build a
          solid foundation, we understand that theory alone isn't going to get
          the job done so that's why this rickets is packed with practical
          hands-on examples that you can follow step by step.
        </p>
        <p className="text-gray-600 mb-4">
          Behavioral psychology and influence triggers which are crucial for
          becoming a well rounded Digital Marketer. We understand that theory is
          important to build a solid foundation, we understand that theory alone
          isn't going to get the job done so that's why this tickets is packed
          with practical hands-on examples that you can follow step by step.
        </p>
      </div>
      <div className="mb-5">
        <p className="font-bold text-xl">Advantages</p>
        <p className="flex">
          <FontAwesomeIcon icon={faCheck} />
          <span>Every hotel staff to have Proper PPT kit for COVID-19</span>
        </p>
        <p className="flex">
          <FontAwesomeIcon icon={faCheck} />
          <span>
            Every staff member wears face masks and gloves at all service times.
          </span>
        </p>
        <p className="flex">
          <FontAwesomeIcon icon={faCheck} />
          <span>
            Hotel staff ensures to maintain social distancing at all times.
          </span>
        </p>
        <p className="flex">
          <FontAwesomeIcon icon={faCheck} />
          <span>anThe hotel has In-Room Dining options available</span>
        </p>
      </div>
      <div>
        <p className="font-bold text-4xl">Amenities</p>
        <hr />
        <div></div>
      </div>
    </div>
  );
};

export default AboutSection;
