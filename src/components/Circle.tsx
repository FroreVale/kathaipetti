import Image from "next/image";

export default function Circle() {
  return (
    <div className="w-[301px] h-[301px] rounded-full border-4 border-[#8DCCE4] flex justify-center items-center">
      <div className="relative w-[284px] h-[284px] rounded-full border-4 border-black">
        <div className="absolute top-4 right-3 w-[274px] h-[274px] rounded-full border-[6px] border-white">
          <Image
            src="/bannerss.jpg"
            className="rounded-full w-full h-full object-cover"
            width={6048}
            height={4032}
            alt="Benefits"
          />
        </div>
      </div>
    </div>
  );
}
