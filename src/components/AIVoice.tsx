import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function AIVoice() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-56 h-56">
        <Image
          src="/bannerss.jpg"
          className="w-full h-full object-cover rounded-full"
          width={2347}
          height={4032}
          alt="Voice Image"
        />
      </div>
      <FaPlayCircle size={65} />
    </div>
  );
}
