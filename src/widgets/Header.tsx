"use client";
import { navItems } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";

type NavItem = {
  title: string;
  to?: string;
  dropDown?: Array<SubNavItem>;
};
type SubNavItem = {
  title: string;
  to: string;
  ext?: boolean; // true if it should open in a new tab
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownPositions, setDropdownPositions] = useState<{
    [key: number]: { adjustLeft: boolean; width: string };
  }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Calculate dropdown position when active dropdown changes
  useEffect(() => {
    if (activeDropdown !== null) {
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Wait for dropdown to render and calculate position
      timeoutRef.current = setTimeout(() => {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement) {
          const rect = dropdownElement.getBoundingClientRect();
          const isOverflowing = rect.right > window.innerWidth;

          // Calculate appropriate width based on content
          const longestItem = Math.max(
            ...(navItems[activeDropdown].dropDown?.map(
              (item) => item.title.length
            ) || [0])
          );
          const width = longestItem > 30 ? "25vw" : "20vw";

          setDropdownPositions((prev) => ({
            ...prev,
            [activeDropdown]: {
              adjustLeft: isOverflowing,
              width,
            },
          }));
        }
      }, 10); // Minimal delay to ensure dropdown is mounted

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [activeDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (
          dropdownElement &&
          !dropdownElement.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className=" px-[5vw] justify-end">
          <div className="flex items-center self-start justify-between py-4 border-b border-b-gray-300">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/mainlogo.png"}
                width={1000}
                height={1000}
                className="w-12 md:w-16 lg:w-[3.8vw] max-w-16"
                alt="Carmelpoly"
                priority
              />
              <div className="flex flex-col items-start">
                <span className="uppercase text-lg md:text-xl font-semibold text-text-primary">
                  CARMEL
                </span>
                <span className="uppercase mt-[-5px] md:mt-0 text-xs md:text-sm text-text-primary">
                  Polytechnic College
                </span>
                <span className="text-[10px] uppercase md:text-xs text-text-secondar">
                  Punnapra · Alappuzha
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => {
                    if (!dropdownRefs.current[index]?.matches(":hover")) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={item.to || "#"}
                    className="font-medium capitalize text-gray-700 flex flex-row items-center group-hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      if (item.dropDown) {
                        e.preventDefault();
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        );
                      }
                    }}
                  >
                    {item.title}
                    {item.dropDown && (
                      <RiArrowDropDownLine className="text-3xl mt-[2px]" />
                    )}
                  </Link>

                  {item.dropDown && activeDropdown === index && (
                    <div
                      className={`absolute pt-2 ${
                        index > 4 ? "right-0" : "left-0"
                      } z-50`}
                      style={{
                        width: dropdownPositions[index]?.width || "auto",
                      }}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-primary bg-opacity-95 shadow-lg min-w-[250px] w-auto rounded-lg p-2 transition-all duration-200">
                        {item.dropDown.map((subItem, subIndex) => (
                          <Link
                            target={subItem?.ext ? "_blank" : "_self"}
                            key={subIndex}
                            href={subItem.to}
                            className="block px-4 py-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <IoMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <Image
                src={"/mainlogo.png"}
                width={48}
                height={48}
                className="w-10"
                alt="Carmelpoly"
              />
            </Link>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-800 p-2"
              aria-label="Close menu"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {navItems?.map((navItem, index) => (
                <li key={index}>
                  <Link
                    className={`flex text-gray-700 text-md items-center gap-2 py-3 px-4 flex-row justify-between rounded-md hover:bg-gray-100 w-full`}
                    href={navItem?.to ?? "#"}
                    onClick={(e) => {
                      if (navItem.dropDown) {
                        e.preventDefault(); // prevent navigation if dropdown
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        );
                      } else {
                        setIsDrawerOpen(false);
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {navItem?.title}
                    {navItem?.dropDown ? (
                      <LuChevronDown
                        className={`transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <LuChevronRight />
                    )}
                  </Link>

                  {/* Mobile dropdown items */}
                  {navItem.dropDown && activeDropdown === index && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {navItem.dropDown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.to}
                            className="block py-2 px-4 rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t text-sm text-gray-600 flex flex-col justify-center items-center">
            <span className="">
              Crafted by{" "}
              <Link
                href={"https:www.midnitcode.in"}
                target="_blank"
                className="font-semibold underline-offset-2"
              >
                MidNitCode Innovations
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
