import Titlebar from '@components/TitleBar'
import React from 'react'

export default function AntiRagging() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="ANTI-RAGGING CELL" />
      
      <div className="space-y-6">
        <div className="space-y-3">
          <p>
            The Anti-Ragging Cell has been instituted in view of the directions of the Hon'ble Supreme Court to prohibit, prevent and eliminate the scourge of ragging in all higher education institutions.
          </p>
          <p>
            It covers any conduct by students that causes physical/psychological harm, embarrassment, or fear to freshers or other students, whether through words, acts, or forced activities that shame or torment.
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-md border border-red-100">
          <h3 className="font-bold text-gray-800 mb-3">Operation & Reporting</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              Operates under the overall charge of the Principal
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              Students should report any ragging incidents immediately to:
              <ul className="ml-5 mt-1 space-y-1">
                <li>- Principal</li>
                <li>- Anti-Ragging Committee members</li>
                <li>- Any faculty member</li>
                <li>- Hostel wardens</li>
              </ul>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              Offenders face strict punishment including imprisonment, fines, and expulsion
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-3">Committee Members</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Fr James Devasia CMI (Principal) – Chairman</li>
            {/* Add other members here when available */}
          </ol>
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h3 className="font-bold text-gray-800 mb-3">Legal Framework</h3>
          <div className="mb-3">
            <p className="font-medium mb-1">The Kerala Prohibition of Ragging Act, 1998</p>
            <a 
              href="https://www.courtkutchehry.com/Acts/Home/LegalActsDownload?Id=19398&Name=Kerala%20Prohibition%20Of%20Ragging%20Act,%201998" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              View Act Document
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-md border border-green-100">
          <h3 className="font-bold text-gray-800 mb-3">Anti-Ragging Helpline</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">24x7 Toll Free:</span> 1800-180-5522
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Email:</span> helpline@antiragging.in
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="font-medium">Website:</span> www.antiragging.in
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}