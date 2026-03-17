import Titlebar from "@components/TitleBar";
import Link from "next/link";
import React from "react";
import Recruiters from "./Recruiters";

export default function Admissions() {
  return (
    <section className="px-[5vw] py-[2rem] bg-gray-50 space-y-5">
      <Titlebar title="Admissions" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-[1.4] flex flex-col gap-6">
          <h2 className="font-bold text-2xl text-gray-800">
            Discover Your Potential at Carmel Polytechnic College
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            At Carmel Polytechnic, we believe every student has the potential to
            achieve excellence. Our mission is to nurture that potential through
            a supportive learning environment, modern infrastructure, and a
            dedicated faculty.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            With a legacy of academic distinction spanning over two decades,
            Carmel Polytechnic has established itself as a premier institution
            in technical education. Join us to access unparalleled opportunities
            and shape a successful, value-driven future.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
          <span className="text-3xl font-bold text-gray-800">
            Admissions 2025
          </span>
          <span className="text-lg text-gray-600">
            Now Accepting Applications
          </span>

          <Link
            href="https://admissions.carmelpoly.in"
            target="_blank"
            className="inline-block"
          >
            <button className="bg-primary hover:bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <Recruiters/>
    </section>
  );
}
