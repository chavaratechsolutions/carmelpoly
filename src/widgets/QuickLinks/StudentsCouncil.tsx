import Titlebar from '@components/TitleBar'
import React from 'react'

export default function StudentsCouncil() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="Students' Council" />
      
      <div className="prose max-w-none">
        <p className="mb-6">
          The Students' Council serves as a link between the student body and the administration, 
          helping ensure that student opinions are heard in decision-making processes. The Council 
          plays a vital role in shaping a vibrant and inclusive campus culture.
        </p>

        <p className=" mb-6">
          It provides students with a platform to develop leadership skills and actively participate 
          in institutional development. Additionally, the Council is responsible for organizing and 
          overseeing both academic and extracurricular activities, as well as various celebrations 
          on campus.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Functions</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Representing student interests and concerns</li>
            <li>Organizing events, cultural programs, and extracurricular activities</li>
            <li>Promoting leadership, teamwork, and responsibility among students</li>
            <li>Assisting in maintaining discipline and a positive campus environment</li>
            <li>Encouraging communication and collaboration between students and staff</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Students' Council Members</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <span className="font-semibold">Mr. Deepu V. Kurup</span> (Lecturer in Automobile Engineering) – Convenor
            </li>
            <li>
              <span className="font-semibold">Fr Thomas G.</span> (Lecturer in English) – Joint Convenor
            </li>
            <li>
              <span className="font-semibold">Mrs. Anisha G.</span> (Lecturer in Mathematics) – Joint Convenor
            </li>
            <li>
              <span className="font-semibold">Mr. Alex C. Mullassery</span> (Workshop Instructor) – Staff Member
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}