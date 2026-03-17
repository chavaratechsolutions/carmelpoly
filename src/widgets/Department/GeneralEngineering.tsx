import Titlebar from '@components/TitleBar'
import React from 'react'

export default function GeneralEngineering() {
  const sections = [
    {
      title: 'Aided Section',
      staff: [
        { name: 'Mrs. Sita S.', subject: 'Computer' },
        { name: 'Mrs. Molimma Joseph', subject: 'Physics' },
        { name: 'Mrs. Rakhi V.R.', subject: 'Chemistry' },
        { name: 'Fr Libin Xavier CMI', subject: 'Mathematics' },
        { name: 'Fr Thomas G. CMI', subject: 'English' },
        { name: 'Mr. Jaick Joseph', subject: 'Physical Instructor' },
        { name: 'Mr. Wilfred E.', subject: 'Lab Attender' }
      ]
    },
    {
      title: 'Self-Financing Section',
      staff: [
        { name: 'Mrs. Ans Mathew', subject: 'Physics' },
        { name: 'Mrs. Bindu K.S.', subject: 'Chemistry' },
        { name: 'Mrs. Resmi R. Nath', subject: 'English' },
        { name: 'Mrs. Anisha G.', subject: 'Mathematics' }
      ]
    }
  ];

  return (
    <div className='px-[5vw] py-[2rem]'>
      <Titlebar title='General Engineering' />
      
      <div className="space-y-8 mt-3">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3">
              <h2 className="text-lg font-semibold ">{section.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 p-6">
              {section.staff.map((member, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-all">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{member.subject}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-sm text-gray-500 text-center italic mt-6">
          Our faculty members bring diverse expertise to provide comprehensive engineering education.
        </div>
      </div>
    </div>
  )
}