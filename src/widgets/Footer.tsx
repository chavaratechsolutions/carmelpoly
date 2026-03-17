"use client";
import React from "react";
import Link from "next/link";
import { FaLink, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-[5vw] py-10 w-full">
      <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-8 lg:gap-0">
        {/* Quick Links Section - Left aligned */}
        <div className="w-full lg:w-auto lg:max-w-[30%]">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="w-full sm:w-auto">
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <Link
                    href="/about"
                    className="hover:underline hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="hover:underline hover:text-white transition"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/governing-body"
                    className="hover:underline hover:text-white transition"
                  >
                    Governing Body
                  </Link>
                </li>
                <li>
                  <Link
                    href="/grievance-cell"
                    className="hover:underline hover:text-white transition"
                  >
                    Grievance Redressal Cell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anti-ragging"
                    className="hover:underline hover:text-white transition"
                  >
                    Anti-Ragging Cell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iqac"
                    className="hover:underline hover:text-white transition"
                  >
                    Internal Quality Assurance Cell (IQAC)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/icc"
                    className="hover:underline hover:text-white transition"
                  >
                    Internal Complaints Committee (ICC)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto">
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <Link
                    href="/sc-st"
                    className="hover:underline hover:text-white transition"
                  >
                    SC/ST Monitoring Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/students-council"
                    className="hover:underline hover:text-white transition"
                  >
                    Student's Council
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mandatory-disclosure"
                    className="hover:underline hover:text-white transition"
                  >
                    Mandatory Disclosure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/approvals"
                    className="hover:underline hover:text-white transition"
                  >
                    Extension of Approvals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aicte-feedback"
                    className="hover:underline hover:text-white transition"
                  >
                    AICTE Feedback for Students & Faculties
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ccet.ac.in"
                    target="_blank"
                    className="hover:underline hover:text-white transition"
                  >
                    Carmel College of Engineering & Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admission-enquiry"
                    className="hover:underline hover:text-white transition"
                  >
                    Admission Enquiry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline hover:text-white transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section - Centered */}
        <div className="w-full lg:w-[40%] h-64 lg:h-[300px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.8197585185653!2d76.3424245750593!3d9.437200927238896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089b472295c221%3A0x25b9b8650cf8d875!2sCarmel%20Polytechnic%20College%20Alappuzha!5e0!3m2!1sen!2sin!4v1749352499391!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Address Section - Right aligned */}
        <div className="w-full lg:w-auto lg:max-w-[30%] lg:text-right">
          <h3 className="text-xl font-semibold mb-4 lg:text-left">
            Get in Touch
          </h3>

          <div className="space-y-3 text-sm lg:text-left">
            <p className="leading-relaxed">
              <span className="font-medium">Address:</span> Carmel Polytechnic
              College
              <br />
              Punnapra, Alappuzha - 688 004, Kerala, India.
            </p>

            <p>
              <span className="font-medium">Phone (Office):</span> 0477 2287 825
            </p>
            <p>
              <span className="font-medium">Phone (Self Financing):</span> 0477
              2288 825
            </p>
            <p>
              <span className="font-medium">Admission Cell:</span> 80783 25976
            </p>
            <p>
              <span className="font-medium">Fax:</span> 0477 2286 048
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:carmelpolytechnic@gmail.com"
                className="underline hover:text-blue-100 transition"
              >
                carmelpolytechnic@gmail.com
              </a>
              <br />
              <a
                href="mailto:info@carmelpoly.in"
                className="underline hover:text-blue-100 transition"
              >
                info@carmelpoly.in
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 lg:justify-start items-center justify-center">
            <Link
              target="_blank"
              href="https://www.facebook.com/carmel.poly.188"
              className="bg-white text-primary p-2 rounded-md hover:scale-105 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </Link>
            <Link
              href="#"
              className="bg-white text-primary p-2 rounded-md hover:scale-105 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </Link>
            <Link
              href="https://www.instagram.com/carmel_polytechnic_official/"
              target="_blank"
              className="bg-white text-primary p-2 rounded-md hover:scale-105 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/carmelpoly"
              className="bg-white text-primary p-2 rounded-md hover:scale-105 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@carmelpolytechniccollege392"
              className="bg-white text-primary p-2 rounded-md hover:scale-105 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white/60 h-[0.7px] my-8"></div>
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* <Link
            href="/"
            className="hover:underline hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="hover:underline hover:text-white transition"
          >
            Terms & Conditions
          </Link> */}
          © 2025 Carmel Polytechnic. All rights reserved.
        </div>
        <div>
          <span className="">
            Crafted by{" "}
            <Link
              href="https://www.midnitcode.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline-offset-2"
            >
              MidNitCode Innovations
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
