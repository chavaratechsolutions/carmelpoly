import React from "react";
import Image from "next/image";
import Titlebar from "@components/TitleBar";

const recruiterLogos = [
  {
    id: 1,
    src: "https://carmelcet.vercel.app/_next/image?url=%2Frecruiters%2Fbosch.png&w=2048&q=75",
    alt: "Bosch",
  },
  {
    id: 2,
    src: "https://carmelcet.vercel.app/_next/image?url=%2Frecruiters%2Ftcs.png&w=2048&q=75",
    alt: "Tata",
  },
  {
    id: 3,
    src: "https://carmelcet.vercel.app/_next/image?url=%2Frecruiters%2Femigo.png&w=2048&q=75",
    alt: "Infosys",
  },
  {
    id: 4,
    src: "https://carmelcet.vercel.app/_next/image?url=%2Frecruiters%2Fsutherland.png&w=2048&q=75",
    alt: "Wipro",
  },
  {
    id: 5,
    src: "https://carmelcet.vercel.app/_next/image?url=%2Frecruiters%2Fintercad.png&w=2048&q=75",
    alt: "Tech Mahindra",
  },
  {
    id: 6,
    src: "https://dnbca6q7do6n.cloudfront.net/media/Recruiters/POORNAM.png",
    alt: "Tech Mahindra",
  },
  {
    id: 7,
    src: "https://dnbca6q7do6n.cloudfront.net/media/Recruiters/AUTOBAHN.png",
    alt: "Tech Mahindra",
  },
  {
    id: 8,
    src: "https://dnbca6q7do6n.cloudfront.net/media/Recruiters/AMAZON_tdEG1fA.png",
    alt: "Tech Mahindra",
  },
  
];

export default function Recruiters() {
  // Duplicate logos for seamless looping
  const infiniteLogos = [
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
    ...recruiterLogos,
  ];

  return (
    <div className="pt-5 space-y-8">
      <Titlebar title="Our Recruiters" />
      <div className="relative overflow-hidden group">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Marquee container */}
        <div className="flex overflow-x-hidden py-4">
          <div className="flex items-center whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="inline-flex items-center justify-center mx-8 p-4 bg-white rounded-lg  hover:scale-110 cursor-pointer transition-all duration-300 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="object-contain h-16 w-full"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
