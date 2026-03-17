import Titlebar from '@components/TitleBar'
import React from 'react'

export default function GoverningBody() {
  const members = [
    {
      name: "Fr Thomas Choolaparampil CMI",
      role: "Chairman",
      designation: ""
    },
    {
      name: "Fr. James Mullassery CMI",
      role: "Member",
      designation: "Education Councillor, CMI St Joseph's Province, TVM"
    },
    {
      name: "The Regional Officer",
      role: "Nominee of AICTE",
      designation: "Southwestern Regional Office, AICTE, Thiruvananthapuram"
    },
    {
      name: "Mrs. Seema K.N.",
      role: "Nominee of State Board of Tech. Education",
      designation: "Senior Joint Director (PS), Directorate of Technical Education"
    },
    {
      name: "The Director of Technical Education",
      role: "Nominee of the State Government",
      designation: ""
    },
    {
      name: "Dr. Abraham Thayyil",
      role: "Industrial Representative",
      designation: "Chairman, Johns Group, Alleppey"
    },
    {
      name: "Dr. Paul K. Mathew",
      role: "Member",
      designation: "Principal, Carmel College of Engineering & Technology, Punnapra"
    },
    {
      name: "Fr. James Devasia CMI",
      role: "Secretary",
      designation: "Principal, Carmel Polytechnic College, Punnapra"
    },
    {
      name: "Fr. Bijo M.D. CMI",
      role: "Financial Administrator",
      designation: "Lecturer, Carmel Polytechnic College"
    },
    {
      name: "Fr. Antony Varghese CMI",
      role: "Member",
      designation: "HoD, Dept of Civil Engineering, Carmel Polytechnic College"
    },
    {
      name: "Fr. Jacob Kurian CMI",
      role: "Member",
      designation: "HoD, Dept of Electrical Engineering, Carmel Polytechnic College"
    }
  ];

  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="GOVERNING BODY" />
      
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left w-8">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Designation/Organization</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">{member.name}</td>
                <td className="border border-gray-300 px-4 py-2">{member.role}</td>
                <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
        <h3 className="font-bold text-gray-800 mb-2">Governing Body Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Formulate policies and guidelines for the institution</li>
          <li>Oversee academic and administrative operations</li>
          <li>Ensure compliance with regulatory requirements</li>
          <li>Approve budgets and financial plans</li>
          <li>Monitor institutional performance and quality</li>
        </ul>
      </div>
    </div>
  )
}