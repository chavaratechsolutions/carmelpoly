import Titlebar from "@components/TitleBar";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="px-[5vw] py-[2rem] flex flex-col gap-[5vh]">
      <Titlebar title="About Us" />
      
      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Column - Images */}
        <div className="flex-1 space-y-4">
          <Image
            src="/slides/slide_002.png"
            alt="Main campus view"
            width={1000}
            height={1000}
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex gap-4">
            <Image
              src="/slides/slide_002.png"
              alt="Campus photo 1"
              width={500}
              height={500}
              className="w-[49%] rounded-lg shadow"
            />
            <Image
              src="/slides/slide_002.png"
              alt="Campus photo 2"
              width={500}
              height={500}
              className="w-[49%] rounded-lg shadow"
            />
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 uppercase">Carmel Polytechnic College</h3>
          <span className="mt-1 flex">Since 1958, Punnapra, Alappuzha</span>
          <p className="text-gray-600 text-justify">
            Carmel Polytechnic College, located in the heart of Alappuzha, is a renowned institution providing technical education with a focus on holistic development. With modern infrastructure, experienced faculty, and a strong industry connect, the college nurtures students to be future-ready professionals.
          </p>
          <p className="text-gray-600 text-justify">
            The college offers a range of diploma programs across various engineering disciplines, emphasizing hands-on training, innovation, and ethical values.
          </p>
        </div>

      </div>
    </div>
  );
}
