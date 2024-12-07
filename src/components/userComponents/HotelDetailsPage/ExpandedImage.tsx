import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

type ExpandedImageCardProps = {
  image: StaticImageData | null;
  onClose: () => void;
  images: StaticImageData[];
  currentImageIndex: number;
  onNavigate: (index: number) => void;
};

const ExpandedImage = ({
  image,
  onClose,
  images,
  currentImageIndex,
  onNavigate,
}: ExpandedImageCardProps) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-7xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex items-center">
          <button
            className={`text-white text-2xl px-4 ${
              currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              currentImageIndex > 0 && onNavigate(currentImageIndex - 1)
            }
            disabled={currentImageIndex === 0}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="relative w-full h-[80vh]">
            <Image
              src={image}
              alt="Expanded Image"
              fill
              className="object-contain"
            />
          </div>
          <button
            className={`text-white text-2xl px-4 ${
              currentImageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() =>
              currentImageIndex < images.length - 1 &&
              onNavigate(currentImageIndex + 1)
            }
            disabled={currentImageIndex === images.length - 1}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedImage;
