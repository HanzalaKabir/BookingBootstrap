import Image, { StaticImageData } from "next/image";

type CardProps = {
  src: StaticImageData;
  tagline: string;
  content: string;
};

const CarouselCard = ({ src, tagline, content }: CardProps) => {
  return (
    <div className="flex border-2 border-gray-200 rounded-lg mx-6 ">
      <div className="relative w-1/2 h-[125]">
        <Image
          src={src}
          alt="promo-image"
          className="rounded-l-lg object-cover"
          fill
          width={0}
          height={0}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col p-4 w-1/2 items-center justify-center">
        <span className="text-lg font-semibold mb-2">{tagline}</span>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default CarouselCard;
