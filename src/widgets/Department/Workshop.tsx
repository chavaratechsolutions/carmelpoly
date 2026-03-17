import Titlebar from '@components/TitleBar'
import React from 'react'

export default function Workshop() {
  const staffMembers = [
    { name: 'Fr Jaison Joseph CMI', role: 'Workshop Superintendent' },
    { name: 'Mr. Naijin Varghese', role: 'Workshop Instructor' },
    { name: 'Mr. Varghese Joseph', role: 'Workshop Instructor' },
    { name: 'Mr. Jenson', role: 'Workshop Instructor' },
    { name: 'Mr. Bibin K.W.', role: 'Trade Instructor' },
    { name: 'Mr. Alex C. Mullassery', role: 'Trade Instructor' },
    { name: 'Fr Jaison Antony CMI', role: 'Trade Instructor' },
    { name: 'Mr. Aji Kumar M.S.', role: 'Trade Instructor' },
    { name: 'Mr. Sen Babu', role: 'Trade Instructor' },
    { name: 'Mr. Arun N.', role: 'Trade Instructor' },
    { name: 'Mr. Anish Varghese', role: 'Tradesman' },
    { name: 'Mr. Tijomon Thomas', role: 'Tradesman' },
    { name: 'Mr. Thomas Joseph', role: 'Tradesman' },
    { name: 'Mr. Vishnu K.V.', role: 'Tradesman' }
  ];

  return (
    <div className='px-[5vw] py-[2rem]'>
      <Titlebar title='Workshop Staff' />
      
      <div className=" space-y-6 mt-5">
        <div className="bg-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {staffMembers.map((member, index) => (
              <div key={index} className="flex items-start space-x-4 py-3 hover:bg-gray-50 rounded transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 italic mt-4">
          Our workshop team brings together expertise and dedication to ensure quality training and operations.
        </div>
      </div>
    </div>
  )
}