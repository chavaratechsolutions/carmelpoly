"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaBook, FaGraduationCap, FaUsers } from "react-icons/fa";

export default function CounterFrame() {
  const items = [
    { icon: <FaBook size={40} />, end: 6, label: "DEPARTMENTS" },
    { icon: <FaGraduationCap size={40} />, end: 1000, label: "ALUMNI" },
    { icon: <FaUsers size={40} />, end: 100, label: "STAFFS" },
    { icon: <FaGraduationCap size={40} />, end: 1000, label: "STUDENTS" },
  ];

  const [counts, setCounts] = useState(items.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const intervals = items.map((item, index) => {
      const step = Math.ceil(item.end / 50);
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.end) {
            updated[index] = Math.min(updated[index] + step, item.end);
          }
          return updated;
        });
      }, 20);
    });

    setTimeout(() => intervals.forEach(clearInterval), 2200); // Stop after ~1.2s
  };

  return (
    <div
      ref={counterRef}
      className="w-full h-auto bg-cover bg-center flex items-center justify-center bg-fixed"
      style={{ backgroundImage: "url('/slides/slide_004.png')" }}
    >
      <div className="bg-primary bg-opacity-70 py-10 px-4 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-white text-center">
          {items.map((item, index) => (
            <div key={index}>
              <div className="text-white mb-3 flex justify-center">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-yellow-400">
                {counts[index]}
                {item.end > 999 ? "+" : ""}
              </div>
              <div className="text-sm font-semibold mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
