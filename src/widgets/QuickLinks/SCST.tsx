import Titlebar from '@components/TitleBar'
import React from 'react'

export default function SCST() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="Committee for SC/ST" />
      
      <div className="space-y-6">
        <div className="space-y-3">
          <p>
            The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 is an important law that protects against caste-based discrimination and violence in India. It helps ensure justice and dignity for marginalized communities and supports equality and social fairness.
          </p>
          <p>
            The main purpose of this cell is to monitor student admissions and the recruitment of teaching and non-teaching staff across different levels. It also works to support SC/ST communities by promoting inclusivity and helping them overcome challenges in adapting to the university environment.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-bold text-gray-800 mb-3">Functions</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Implement reservation policy for SC/ST
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Share government updates and collect data
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Monitor reservation policies
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Grievance Redressal Cell
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Facilitate scholarships and aid
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Protect rights and prevent discrimination
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Track academic progress
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Provide counselling services
            </li>
            <li className="flex items-start sm:col-span-2">
              <span className="text-blue-600 mr-2">•</span>
              Organize awareness programs
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-bold text-gray-800 mb-2">Committee Members</h3>
          <p className="text-gray-600 mb-3">The committee comprises representatives from administration, faculty, and student community.</p>
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            View Current Members
          </button>
        </div>
      </div>
    </div>
  )
}