"use client";

import AIVoice from "@/components/AIVoice";
import Circle from "@/components/Circle";
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

              <button
                className="sm:hidden"
                onClick={() => setIsOverlayOpen(true)}
              >
                <Menu size={40} color="#F7F7FA" />
              </button>
            </div>
          </div>
        </nav>

        {/* Overlay */}
        {isOverlayOpen && (
          <div className="bg-black fixed inset-0 flex flex-col gap-12 justify-center items-center text-[#F7F7FA] font-semibold text-2xl z-10">
            <button
              className="absolute top-5 right-5"
              onClick={() => setIsOverlayOpen(false)}
            >
              <X size={40} color="white" />
            </button>
            <a href="">Home</a>
            <a href="">Why Us</a>
            <a href="">About</a>
            <button className="uppercase font-bold px-12 py-5 bg-[#E74C3C] rounded-2xl">
              Notify Me
            </button>
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
            <h3 className="text-white font-bold lg:text-3xl text-2xl lg:max-w-sm max-w-52 mt-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Stories in the voices of loved ones sparking imagination &
              connection.
            </h3>
          </div>
        </section>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-black font-semibold sm:text-3xl mt-8 text-center px-6 text-2xl ">
          <h2>
            AI-Powered Storytelling – In the Voice of Loved Ones, Connecting
            Kids to Their Roots with a Free Toy Player & Parent App
          </h2>
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-col justify-center items-center 2xl:flex-row gap-8">
          <Feature
            title="Personalization"
            description="Any story, in any voice bring storytelling to life with loved ones voices"
            imageSrc="/bannerss.jpg"
          />
          <Feature
            title="Screen free edutainment"
            description="A magical way for kids to enjoy storytelling, tailored to their likes and parents' choices"
            imageSrc="/bannerss.jpg"
          />
          <Feature
            title="Curated content"
            description="Handpicked stories from India and around the world, available in regional languages for every age group up to 8 years"
            imageSrc="/bannerss.jpg"
          />
        </div>

        {/* Voices */}
        <section>
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-black font-semibold sm:text-3xl mt-8 text-center px-6 text-2xl">
            <h2>One Story, Many Voices – Hear, Experience & Connect</h2>
          </div>
          <div className="max-w-lg mx-auto mt-6 text-center text-black text-xl px-6">
            <p>
              Bring stories to life with voices your child loves—yours,
              grandparents’ and more!
            </p>
          </div>

          {/* Voices & Storing */}
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-8 w-fit mx-auto p-4">
            {/* Stories */}
            <div className="relative w-xs h-[300px]">
              <Image
                src="/pig1.png"
                alt="Peppa Pig"
                width={234}
                height={234}
                className="absolute top-0 left-0 w-9/12"
              />
              <div className="absolute top-32 left-16 px-3 py-2 border-dashed border-2 rounded-2xl w-9/12">
                <Image
                  src="/pig2.png"
                  alt="Peppa Pig"
                  width={215}
                  height={153}
                  className="w-full"
                />
              </div>
            </div>
            <AIVoice />
            <AIVoice />
            <AIVoice />
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="max-w-4xl mx-auto px-8 flex flex-col gap-12 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md md:text-left text-center">
                <h3 className="font-semibold text-2xl">Screen-Free Learning</h3>
                <p className="text-xl mt-4">
                  Engaging young minds without the distractions of screens
                </p>
              </div>
              <Circle />
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
              <div className="max-w-md text-center md:text-right">
                <h3 className="font-semibold text-2xl">Screen-Free Learning</h3>
                <p className="text-xl mt-4">
                  Engaging young minds without the distractions of screens
                </p>
              </div>
              <Circle />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md md:text-left text-center">
                <h3 className="font-semibold text-2xl">Screen-Free Learning</h3>
                <p className="text-xl mt-4">
                  Engaging young minds without the distractions of screens
                </p>
              </div>
              <Circle />
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
              <div className="max-w-md text-center md:text-right">
                <h3 className="font-semibold text-2xl">Screen-Free Learning</h3>
                <p className="text-xl mt-4">
                  Engaging young minds without the distractions of screens
                </p>
              </div>
              <Circle />
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="bg-black rounded-4xl">
          <div className="w-full max-w-5xl mx-auto mt-8 md:p-8 p-4">
            <h2 className="text-center font-semibold text-3xl md:text-6xl text-white">
              “The Story Behind Our Story”
            </h2>
            <div className="w-full aspect-16/9 mt-8">
              <iframe
                title="Video about the story of Kathaipetti"
                src="https://www.youtube.com/embed/crzBA0UY-EU"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
