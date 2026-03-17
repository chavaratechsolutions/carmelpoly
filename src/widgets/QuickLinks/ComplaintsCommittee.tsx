import Titlebar from '@components/TitleBar'
import React from 'react'

export default function ComplaintsCommittee() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="INTERNAL COMPLAINTS COMMITTEE (ICC)" />
      
      <div className="space-y-6">
        <div className="space-y-3">
          <p>
            The Internal Complaints Committee, formed in line with the AICTE Regulations of 2016, is responsible for handling complaints of sexual harassment within the college and ensuring a safe and respectful environment for all.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-md border border-pink-100">
          <h3 className="font-bold text-gray-800 mb-3">Primary Objectives</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-pink-600 mr-2 font-bold">•</span>
              <span>
                <strong>Prevention of Sexual Harassment</strong> – Ensure a safe and secure environment for all female students and staff
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2 font-bold">•</span>
              <span>
                <strong>Prohibition and Redressal</strong> – Take consistent and proactive steps to prevent, prohibit, and address incidents
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-2 font-bold">•</span>
              <span>
                <strong>Dignified and Safe Environment</strong> – Promote a respectful, inclusive, and supportive workplace
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <p className="font-semibold mb-3">
            The College has a zero-tolerance policy for sexual harassment and is fully committed to keeping the campus safe, respectful, and supportive for all students and staff.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-3">Committee Members</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Mrs. Molimma Joseph (Lecturer in Physics) – Convenor</li>
            {/* <li>[Member Name] – [Designation/Role]</li>
            <li>[Member Name] – [Designation/Role]</li> */}
          </ol>
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-bold text-gray-800 mb-2">POSH Act 2013</h3>
          <p className="mb-3">
            The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act
          </p>
          <a 
            href="https://doe.gov.in/files/inline-documents/DoE_Prevention_sexual_harassment.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            View POSH Act Document
          </a>
        </div>
      </div>
    </div>
  )
}