import Titlebar from '@components/TitleBar'
import React from 'react'

export default function Iqac() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="INTERNAL QUALITY ASSURANCE CELL (IQAC)" />
      
      <div className="space-y-6">
        <div className="space-y-3">
          <p>
            The Internal Quality Assurance Cell (IQAC) provides guidance and recommendations to the administration to uphold high standards in both academic and administrative functions. It oversees the quality of all activities within the institution and works on matters related to accreditation and continuous improvement.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-md border border-green-100">
          <h3 className="font-bold text-gray-800 mb-3">IQAC Aims</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              Promote a strong culture of quality as a top priority through systematic integration of quality initiatives
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              Establish a proactive system for quality improvement supporting faculty and students
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-3">Functions</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Develop and apply quality standards
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Define academic/administrative benchmarks
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Create student-focused learning environments
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Gather and analyze stakeholder feedback
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Share quality standards information
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Organize quality workshops/seminars
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Maintain quality enhancement records
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Coordinate quality-related efforts
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Conduct academic/administrative audits
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Prepare Annual Quality Assurance Report
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-bold text-gray-800 mb-3">Benefits</h3>
          <ul className="space-y-2">
            {[
              "Maintain clear quality improvement focus",
              "Foster internal quality culture",
              "Improve interdepartmental coordination",
              "Support data-driven decision making",
              "Drive continuous quality improvements",
              "Establish documentation systems"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-3">Committee Members</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Mrs. Rakhi V.R. (Lecturer in Chemistry) – Convenor</li>
            <li>Fr Bijo M.D. (Lecturer in Civil Engineering)</li>
          </ol>
        </div>
      </div>
    </div>
  )
}