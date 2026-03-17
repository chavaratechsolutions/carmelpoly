"use client";
import React, { useState } from "react";
import Titlebar from "@components/TitleBar";

export default function CampusGallery() {
  const images = Array.from(
    { length: 9 },
    (_, i) => `/slides/slide_00${i + 1}.png`
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="px-[5vw] py-[5rem] flex flex-col gap-10">
      <Titlebar title="Campus Gallery" />
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[#000000] bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
