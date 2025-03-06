"use client";

import Feature from "@/components/Feature";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <div className="font-poppins">
        {/* Navbar */}
        <nav>
          <div className="bg-black flex justify-center rounded-t-2xl">
            <div className="text-white flex-1 flex justify-between items-center gap-4 p-5 max-w-6xl">
              <Image width={100} height={100} alt="logo" src="/logo.png" />

              <div className="hidden sm:flex justify-between gap-4 lg:max-w-96 max-w-72 flex-1 text-[#F7F7FA] font-semibold text-[20px]">
                <a href="">Home</a>
                <a href="">Why Us</a>
                <a href="">About</a>
              </div>

              <button className="hidden sm:inline-block uppercase font-bold px-12 py-5 bg-[#E74C3C] rounded-2xl">
                Notify me
              </button>

              <button className="sm:hidden" onClick={() => setIsOverlayOpen(true)}>
                <Menu
                  size={40}
                  color="#F7F7FA"
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Overlay */}
        {isOverlayOpen && (
          <div className="bg-black fixed inset-0 flex flex-col gap-12 justify-center items-center text-[#F7F7FA] font-semibold text-2xl z-10">
              <button className="absolute top-5 right-5" onClick={() => setIsOverlayOpen(false)}>
                <X size={40} color="white" />
              </button>
              <a href="">Home</a>
              <a href="">Why Us</a>
              <a href="">About</a>
              <button className="uppercase font-bold px-12 py-5 bg-[#E74C3C] rounded-2xl">Notify Me</button>
          </div>
        )}


        {/* Banner */}
        <section className="mt-3.5 relative">
          <Image
            src="/banner.jpg"
            alt="Banner"
            width={6048}
            height={4032}
            priority
            className="hidden md:block min-h-[calc(100vh-120px)] object-cover w-full"
          />
          <Image
            src="/bannerss.jpg"
            alt="Banner"
            width={6048}
            height={4032}
            priority
            className="block md:hidden min-h-[calc(100vh-120px)] object-cover w-full"
          />
          <div className="absolute lg:top-36 lg:left-36 top-20 sm:left-20 left-12">
            <h1 className="text-[#FFCD03] font-black lg:text-4xl text-3xl lg:max-w-lg max-w-60 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Bringing storytelling back and screen-free and heartfelt!
            </h1>
            <h2 className="text-white font-bold lg:text-3xl text-2xl lg:max-w-sm max-w-52 mt-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Stories in the voices of loved ones sparking imagination &
              connection.
            </h2>
          </div>
        </section>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-black font-semibold sm:text-3xl mt-8 text-center px-6 text-2xl ">
          <h2>AI-Powered Storytelling – In the Voice of Loved Ones, Connecting Kids to Their Roots with a Free Toy Player & Parent App</h2>
        </div>

        {/* Features */}
        {/* <div className="max-w-6xl mx-auto mt-8">
          <Feature title="Personalization"/>
          <Feature title=""/>
          <Feature title=""/>
        </div> */}
      </div>
    </>
  );
}
