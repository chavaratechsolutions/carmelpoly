"use client";
import Titlebar from "@components/TitleBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@lib/firebase";
import Modal from "@components/Modal"; // You'll need to create or import a Modal component

interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function Welcome() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch events from Firebase
  useEffect(() => {
    const eventsRef = collection(db, "website_config", "events", "items");

    const unsubscribe = onSnapshot(eventsRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || "",
        date: doc.data().date || "",
        location: doc.data().location || "",
        description: doc.data().description || "",
        imageUrl: doc.data().imageUrl || "/slides/slide_002.png",
        link: doc.data().link || "#",
      }));
      setEvents(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleReadMore = (event: EventItem) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="px-[5vw] py-[5rem] flex flex-col gap-5">
      <div className="flex md:flex-row gap-10 flex-col">
        <div className="flex-[2] flex flex-col gap-5">
          <Titlebar
            className=""
            title="Welcome to Carmel Polytechnic College"
          />
          <Image
            src={"/slides/slide_002.png"}
            alt="College Image"
            width={1000}
            height={1000}
            className="w-full"
          />
          <p>
            Carmel Polytechnic College was established in 1958 by Very Rev. Fr.
            Gilbert Palakunnel CMI, and is managed by CMI Fathers - a priestly
            order reputed for their contributions in the field of education and
            healthcare.
          </p>
          {/* <div className="">
            <button className="bg-primary border-none outline-none rounded-md px-2 py-2 text-white">
              Read more
            </button>
          </div> */}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <Titlebar className="" title="Events" />

          {loading ? (
            // Skeleton loading state
            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="min-w-[90px] h-[90px] relative bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No upcoming events</p>
          ) : (
            <>
              {events.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="min-w-[90px] h-[90px] relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1 md:gap-2 mt-1">
                      <FaCalendarAlt className="text-gray-500" /> {item.date}
                      {item?.location && (
                        <>
                          <span className="mx-2">|</span>
                          <FaMapMarkerAlt className="text-gray-500" />{" "}
                          {item.location}
                        </>
                      )}
                    </p>
                    <p className="text-sm mt-2 text-justify md:hidden ">
                      {item.description?.slice(0, 40)}
                      {"..."}
                      <button
                        onClick={() => handleReadMore(item)}
                        className="text-primary ml-3 hover:underline cursor-pointer"
                      >
                        Read More →
                      </button>
                    </p>
                    <p className="text-sm mt-2 text-justify hidden md:block">
                      {item.description?.slice(0, 74)}
                      {"..."}
                      <button
                        onClick={() => handleReadMore(item)}
                        className="text-primary ml-3 hover:underline cursor-pointer"
                      >
                        Read More →
                      </button>
                    </p>
                  </div>
                </div>
              ))}
              {/* {events?.length > 4 && (
                <div className="w-full">
                  <button className="bg-primary w-full border-none outline-none rounded-md px-2 py-2 text-white">
                    View all
                  </button>
                </div>
              )} */}
            </>
          )}
        </div>
      </div>

      {/* Event Details Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {selectedEvent && (
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 h-48 md:h-64 relative">
                <Image
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{selectedEvent.date}</span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 mb-4">
                  {selectedEvent.description}
                </p>
                {selectedEvent.link && (
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Event Website
                  </a>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
