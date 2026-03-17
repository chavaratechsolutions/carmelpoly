import Titlebar from '@components/TitleBar'
import React from 'react'

interface StaffMember {
  name: string;
  position: string;
}

interface StaffSection {
  title: string;
  staff: StaffMember[];
}

export default function AdministrativeStaff() {
  const sections: StaffSection[] = [
    {
      title: 'Aided Section',
      staff: [
        { name: 'Fr James Devasia CMI', position: 'Principal' },
        { name: 'Mr. Binny Joseph', position: 'Office Superintendent' },
        { name: 'Mr. Syam Mohan', position: 'Senior Clerk' },
        { name: 'Mr. Antony J.', position: 'Senior Clerk' },
        { name: 'Mr. Joshy Antony', position: 'Senior Clerk' },
        { name: 'Mr. Tom Thomas', position: 'Clerk' },
        { name: 'Mr. Mathew A.J.', position: 'Clerk' },
        { name: 'Mr. Bibin Thomas', position: 'Clerk' },
        { name: 'Mrs. Radhika M.', position: 'Steno Typist' },
        { name: 'Mr. Shijo Cherian', position: 'Librarian' },
        { name: 'Mr. Vijayaraj M.', position: 'Library Attender' },
        { name: 'Mr. Joshy Josekutty', position: 'Store Keeper' },
        { name: 'Mr. Vishnu Kumar V.L.', position: 'Office Attendant' },
        { name: 'Mrs. Elizabeth P.A.', position: 'Office Attendant' },
        { name: 'Mr. Ajay T.A.', position: 'Office Attendant' },
        { name: 'Mr. Suresh Kumar G.', position: 'Office Attendant' },
        { name: 'Mr. Benadict P.J.', position: 'Office Attendant' },
        { name: 'Mr. Akhil P.M.', position: 'Office Attendant' },
        { name: 'Mr. Vinu George', position: 'Sweeper' },
        { name: 'Mr. Mathew Devasia', position: 'Sweeper' },
        { name: 'Mr. Basanta Raj Sharma', position: 'Watchman' },
        { name: 'Mr. Krishna Prasad Adhikari', position: 'Watchman' }
      ]
    },
    {
      title: 'Self-Financing Section',
      staff: [
        { name: 'Mrs. Fasila S.', position: 'Clerk' },
        { name: 'Mr. Martin Joseph', position: 'Clerk' },
        { name: 'Mrs. Helan V.C.', position: 'Sweeper' },
        { name: 'Mr. Ramesan K.', position: 'PRO' }
      ]
    }
  ];

  // Group positions for better organization
  const positionGroups: Record<string, string[]> = {
    'Administration': ['Principal', 'Office Superintendent', 'PRO'],
    'Office Staff': ['Senior Clerk', 'Clerk', 'Steno Typist'],
    'Support Staff': ['Librarian', 'Library Attender', 'Store Keeper'],
    'Attendants': ['Office Attendant', 'Sweeper', 'Watchman']
  };

  const getPositionGroup = (position: string): string => {
    for (const [group, positions] of Object.entries(positionGroups)) {
      if (positions.some(p => position.includes(p))) {
        return group;
      }
    }
    return 'Other';
  };

  return (
    <div className='px-[5vw] py-[2rem]'>
      <Titlebar title='Administrative Staff' />
      
      <div className="mt-[-10px] space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-6">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            </div>
            
            <div className="p-6">
              {/* Group staff by position category */}
              {Object.entries(
                section.staff.reduce<Record<string, StaffMember[]>>((groups, member) => {
                  const group = getPositionGroup(member.position);
                  if (!groups[group]) groups[group] = [];
                  groups[group].push(member);
                  return groups;
                }, {})
              ).map(([groupName, groupMembers]) => (
                <div key={groupName} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    {groupName}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupMembers.map((member, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-all">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                          {section.staff.findIndex(s => s.name === member.name) + 1}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-base font-medium text-gray-900 truncate">{member.name}</h4>
                          <p className="text-sm text-gray-600 truncate">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-indigo-50 rounded-xl p-6 text-center border border-indigo-100">
          <p className="text-indigo-800 font-medium">
            Our administrative team ensures the smooth operation and management of the institution.
          </p>
        </div>
      </div>
    </div>
  );
}