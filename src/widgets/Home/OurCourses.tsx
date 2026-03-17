import Titlebar from "@components/TitleBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCourses() {
  const departments = {
    "Government Aided": [
      {
        name: "Civil Engineering",
        url: "/departments/ce",
        image: "/departments/civil.jpg",
      },
      {
        name: "Mechanical Engineering",
        url: "/departments/me",
        image: "/departments/mech.jpg",
      },
      {
        name: "Electrical & Electronics Engineering",
        url: "/departments/eee",
        image: "/departments/eee.jpg",
      },
    ],
    "Self Financing": [
      {
        name: "Automobile Engineering",
        url: "/departments/ae",
        image: "/departments/automobile.jpg",
      },
      {
        name: "Computer Engineering",
        url: "/departments/cse",
        image: "/departments/computer.jpg",
      },
      {
        name: "Electronics Engineering",
        url: "/departments/ee",
        image: "/departments/electronics.jpg",
      },
    ],
  };
  return (
    <div className="px-[5vw] py-[2rem] flex flex-col gap-5">
      <Titlebar title="Our Courses" />
      <div className="">
        {Object.entries(departments).map(([category, items]) => (
          <div key={category} className="mb-10 ">
            <h2 className="text-xl font-bold text-center mb-6 uppercase">
              {category}
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
              {items.map((dept, index) => (
                <Link
                  href={dept?.url}
                  key={index}
                  className="bg-white border-r-[5px] border-r-primary/70 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
                >
                  <div className="w-[300px] md:w-auto h-[180px] relative">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div className="text-center py-3 font-semibold text-blue-800">
                    {dept.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
