import Image from "next/image";

export default function Feature({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="relative w-sm sm:w-md h-[442px] ">
      <Image
        src={imageSrc}
        alt={title}
        width={2347}
        height={4032}
        className="rounded-4xl w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 max-w-sm">
        <h3 className="text-[#FFBB12] font-semibold text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">{title}</h3>
        <p className="text-white text-[20px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">{description}</p>
      </div>
    </div>
  );
}
