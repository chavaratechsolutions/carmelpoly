import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TbMail } from "react-icons/tb";

export default function ContactDetails() {
  return (
    <div className="flex-1 flex-col flex gap-6 ">
      <div className="">
        <span className="font-bold text-2xl text-gray-800">How can we help you ?</span>
      </div>
      <div className="">
        <span className="">
          Send a message through the given form, If your enquiry is time sensitive
          Kindly refer to the contact details given below.
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-center justify-start">
          <div className="p-4 border border-gray-300 rounded-full">
            <IoLocationOutline className="text-2xl" />
          </div>
          <div className=" flex flex-col">
            <span className="font-semibold text-xl">Address</span>
            <span className="">Punnapra | Alappuzha-688004, Kerala</span>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-start">
         <div className="p-4 border border-gray-300 rounded-full">
            <FiPhone className="text-2xl" />
          </div>
          <div className=" flex flex-col">
            <span className="font-semibold text-xl">Phone</span>
            <span className="font-sans"> 0477 2287 825</span>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-start">
           <div className="p-4 border border-gray-300 rounded-full">
            <TbMail className="text-2xl" />
          </div>
          <div className=" flex flex-col">
            <span className="font-semibold text-xl">Email</span>
            <span className="">carmelpolytechnic@gmail.com, info@carmelpoly.in</span>
          </div>
        </div>
      </div>
    </div>
  );
}