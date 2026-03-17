import Titlebar from '@components/TitleBar'
import React from 'react'

export default function Grievance() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="GRIEVANCE REDRESSAL CELL" />
      
      <div className="space-y-6">
        <div className="space-y-3">
          <p>
            The Grievance Redressal Cell addresses various concerns raised by faculty, staff, and students, ensuring fair and just resolution of complaints. Operating under the Principal's authority, it follows AICTE guidelines to maintain an effective redressal mechanism.
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
          <h3 className="font-bold text-gray-800 mb-3">Process Overview</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 font-bold">•</span>
              Complaints are thoroughly investigated and evaluated based on severity
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 font-bold">•</span>
              Decisions made after considering all aspects and potential consequences
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 font-bold">•</span>
              Cases forwarded to appropriate authorities based on required action
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 font-bold">•</span>
              Committed to creating a supportive, trustworthy environment
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-3">Committee Objectives</h3>
          <ul className="space-y-2">
            {[
              "Address issues effectively while building stakeholder trust",
              "Deliver fair, impartial decisions ensuring equal treatment",
              "Resolve grievances promptly following organizational guidelines",
              "Monitor and evaluate committee performance systematically",
              "Maintain fair, transparent policies agreeable to all"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-bold text-gray-800 mb-3">Committee Members</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Fr James Devasia CMI (Principal) – Chairman</li>
            {/* Additional members can be added here */}
          </ol>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
              Submit a Grievance
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-2">Confidentiality Assurance</h3>
          <p>
            All grievances are handled with strict confidentiality. The committee ensures protection for complainants against any form of retaliation.
          </p>
        </div>
      </div>
    </div>
  )
}