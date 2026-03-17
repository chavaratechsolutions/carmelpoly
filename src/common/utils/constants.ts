type NavItem = {
  title: string;
  to?: string;
  dropDown?: Array<SubNavItem>;
};

type SubNavItem = {
  title: string;
  to: string;
  ext?: boolean; // true if it should open in a new tab
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/",
    dropDown: [
      {
        title: "Our Profile",
        to: "/about/about-us",
      },
      {
        title: "Our Inspiration",
        to: "/about/our-inspiration",
      },
      {
        title: "History",
        to: "/about/history",
      },
      {
        title: "Vision & Mission",
        to: "/about/vision-mission",
      },
      {
        title: "Management",
        to: "/about/management",
      },
    ]
  },
  {
    title: "Admissions",
    to: "/admissions",
    // dropDown: [
    //     {
    //         title: "History",
    //         to: "/",
    //     },
    //     {
    //         title: "Mission & Vision",
    //         to: "/",
    //     },
    //     {
    //         title: "Management",
    //         to: "/",
    //     },
    // ]
  },
  {
    title: "Departments",
    to: "/",
    dropDown: [
      {
        title: "Civil Engineering",
        to: "/departments/ce",
      },
      {
        title: "Mechanical Engineering",
        to: "/departments/me",
      },
      {
        title: "Electrical & Electronics Engineering",
        to: "/departments/eee",
      },
      {
        title: "Automobile Engineering",
        to: "/departments/ae",
      },
      {
        title: "Computer Engineering",
        to: "/departments/cse",
      },
      {
        title: "Electronics Engineering",
        to: "/departments/ee",
      },
      {
        title: "General Engineering",
        to: "/departments/general-engineering",
      },
      {
        title: "Workshop",
        to: "/departments/workshop",
      },
      {
        title: "Administrative Staff",
        to: "/departments/administrative-staff",
      },
    ]
  },
  {
    title: "Campus",
    to: "/",
    dropDown: [
      {
        title: "Facilities",
        to: "/",
      },
      {
        title: "Library",
        to: "/",
      },
      {
        title: "Hostel",
        to: "/",
      },
    ]
  },
  {
    title: "Library",
    to: "/",
    dropDown: [
      {
        title: "E-Library",
        to: "/",
      },
      {
        title: "Resources",
        to: "/",
      },
      {
        title: "NBA DATA",
        to: "https://nba.carmelpoly.in",
        ext: true
      },
      {
        title: "LMS",
        to: "https://moodle.carmelpoly.in",
        ext: true
      },
    ]
  },
  {
    title: "Fee",
    to: "/",
    dropDown: [
      // {
      //   title: "Fee Structure",
      //   to: "/",
      // },
      // {
      //   title: "Scholarships",
      //   to: "/",
      // },
      {
        title: "Make Fee Payment",
        to: "https://paydirect.eduqfix.com/app/pDLKjv890e9C7JJO7lFy48t46jszRZdQNjam0ONL899cRUw51zOGe+TM23UqdJdi/6530",
        ext: true
      },
    ]
  },
  {
    title: "Contact",
    to: "/contact",
  },
]

export const departments = {
  ce: {
    name: "Civil Engineering",
    started: 1959,
    firstHead: "Mr. Thomas Michael",
    overview:
      "The Department of Civil Engineering was started during June 1959. Mr. Thomas Michael was the first Head of the Department. The staff members had a pivotal role in the campus construction activities. Many students secured State first rank in diploma examinations. The departmental labs function as consultancy and testing centers for public and private establishments. The association conducts educational tours, seminars, survey camps, quizzes, symposiums, etc. for overall student development.",
    vision:
      "To impart quality technical education in Civil Engineering to meet the challenges of the industry and society.",
    mission: [
      "Instill technical knowledge in Civil Engineering to create an innovative mind in solving engineering problems.",
      "Create an environment to inculcate moral values and professional ethics.",
      "Facilitate responding passionately to technological advancements."
    ],
    peo: [
      "Domain Knowledge – Apply knowledge in Civil Engineering to analyze and solve engineering problems.",
      "Society and Ethics – Uphold moral values and use Engineering tools effectively to serve society.",
      "Lifelong Learning – Be passionate to upgrade technical knowledge through lifelong learning."
    ],
    pso: [
      "Sharpen civil engineering tools by interacting with technocrats and stakeholders to excel in the profession.",
      "Cater to the demands of the civil engineering industry through hands-on training on modern software."
    ],
    labs: [
      "Material Testing Laboratory",
      "Environmental Laboratory",
      "Survey Laboratory"
    ],
    faculty: [
      "Fr. Antony Varghese CMI - Head of the Department",
      "Fr. James Devasia CMI - Lecturer/Principal",
      "Mr. Rajesh P.V. - Lecturer",
      "Fr. Siji Thomas P.T. CMI - Lecturer",
      "Fr. Bijo M.D. CMI - Lecturer (Guest)",
      "Mrs. Amalu Mariya Joseph - Demonstrator",
      "Mrs. Meenu M. - Demonstrator",
      "Mr. Benzilal V.S. - Trade Instructor",
      "Mr. Tomson K. James - Tradesman",
      "Mr. Sujith Jose - Tradesman"
    ]
  },

  me: {
    name: "Mechanical Engineering",
    started: 1959,
    firstHead: "Mr. K. Vijayan Unni",
    overview:
      "The Department of Mechanical Engineering started functioning in June 1959. It holds an enviable record of producing the maximum number of State first rank holders compared to any branch in any polytechnic college in the state. The association regularly conducts educational tours, seminars, industry-institute interaction programmes, guest lectures, entrepreneurship development, and soft skills programmes for overall student development.",
    vision: "",
    mission: [],
    peo: [],
    pso: [],
    labs: [
      "Hydraulics Laboratory",
      "Heat Engine Laboratory",
      "Machine Shop",
      "Junior Workshop"
    ],
    faculty: [
      "Mr. Rajesh R. - Head of the Department",
      "Mr. Shybu Varghese - Lecturer",
      "Mr. Hareesh B. - Lecturer",
      "Mrs. Sreeji Sreenivas - Lecturer",
      "Mr. Sebin James - Lecturer (Guest)",
      "Mr. Jefin Chacko - Demonstrator",
      "Mr. Francis Augustin Joseph - Demonstrator",
      "Mr. Sujit Kumar P. - Trade Instructor",
      "Mr. Manoj P. Kuriakose - Tradesman",
      "Mr. Paul James - Tradesman"
    ]
  },

  eee: {
    name: "Electrical & Electronics Engineering",
    started: 1959,
    firstHead: "Mr. C.P. Thomas",
    overview:
      "The Department of Electrical & Electronics Engineering came into existence in June 1959. The association conducts educational tours, seminars, quizzes, symposiums, etc. for overall student development.",
    vision: "",
    mission: [],
    peo: [],
    pso: [],
    labs: ["Electrical Laboratory"],
    faculty: [
      "Fr. Jacob Kurian CMI - Head of the Department",
      "Mrs. Tinu Scaria - Lecturer",
      "Mr. Ninan John - Lecturer",
      "Mrs. Rose Philip - Lecturer (Guest)",
      "Mrs. Swathi Chandran C.S. - Lecturer (Guest)",
      "Mr. Venugopal K.S. - Demonstrator",
      "Mrs. Rajani R. - Demonstrator",
      "Mr. Manoj George - Trade Instructor",
      "Mr. John Thomas K.J. - Tradesman",
      "Mr. Lijomon Mathew - Tradesman"
    ]
  },

  ae: {
    name: "Automobile Engineering",
    started: 2004,
    firstHead: "Mr. A.S. Radhakrishna Pillai",
    overview:
      "Started in 2004 under the self-financing scheme. The 2007 batch project work drew public attention. The department collaborates with Hyundai Motors Pvt. Ltd., providing a seminar hall, workshop, and training programme. Students get training sessions and placements at Hyundai. The association arranges tours, seminars, industrial visits, career guidance, mini projects, personality development programmes, and symposiums.",
    vision:
      "To mould competent automobile engineers to cater to the dynamic requirements of the automotive industry and society.",
    mission: [
      "Impart knowledge through effective teaching and learning.",
      "Develop capability for innovative products and systems.",
      "Provide opportunities for persistent learning and professional ethics."
    ],
    peo: [
      "Realm Knowledge – Apply engineering knowledge to diagnose and solve automobile system problems.",
      "Life-long learning – Support economic development and address environmental challenges.",
      "Leadership – Perform key roles with communication skills, ethics, and entrepreneurial skills."
    ],
    pso: [
      "Proficiency in automotive workshop management and use modern equipment for diagnostics.",
      "Create awareness of road safety and emission norms."
    ],
    labs: [
      "Automobile Service Laboratory",
      "Automobile Electrical Laboratory"
    ],
    faculty: [
      "Mr. Jonu Joseph - Head of the Department",
      "Mr. Deepu V. Kurup - Lecturer",
      "Mr. Abin P.G. - Lecturer",
      "Mr. Aneesh U. - Lecturer",
      "Mr. Ben B. Thomas - Lecturer",
      "Mr. Rinju Punnoose - Demonstrator",
      "Mr. Jobin George - Demonstrator",
      "Mr. Akhil T.A. - Demonstrator",
      "Mr. Harisankar E.S. - Trade Instructor"
    ]
  },

  ee: {
    name: "Electronics Engineering",
    started: 2003,
    firstHead: "Mrs. Zarin Joseph",
    overview:
      "Started in 2003 under the self-financing scheme. Provides industrial training and internships with BSNL, Keltron, C-DIT, etc. Students developed Smart Helmet, ATM Security Door, Home Automation, etc. The association arranges tours, seminars, industrial visits, career guidance, mini projects, personality development, and symposiums.",
    vision:
      "To achieve academic excellence in Electronics Engineering by imparting in-depth knowledge to meet changing industrial demands and societal needs.",
    mission: [
      "Instill domain knowledge to achieve academic excellence.",
      "Provide learning environments to keep pace with evolving technologies.",
      "Develop interpersonal and entrepreneurial skills to industrial standards."
    ],
    peo: [],
    pso: [
      "Design and develop next-generation IoT-based embedded systems, automation systems, PCB design, and fabrication.",
      "Troubleshoot and maintain electronic equipment using modern hardware and software tools."
    ],
    labs: [],
    faculty: [
      "Mrs. Jisha Agnes Jose - Head of the Department",
      "Mr. Dhanush A. - Lecturer",
      "Mrs. Soumya Xavier - Lecturer",
      "Mrs. Ligymol Mathew - Lecturer",
      "Mr. Vineeth Mathew - Lecturer",
      "Mrs. Mini M. - Demonstrator",
      "Mrs. Kanishka K. - Demonstrator",
      "Mr. Sudheer Babu P. - Demonstrator",
      "Mr. C.L. Ramesh - Trade Instructor",
      "Mr. Radhakrishnan - Tradesman"
    ]
  },

  cse: {
    name: "Computer Engineering",
    started: 2003,
    firstHead: "Mr. M.G. Sreenivasa Panicker",
    overview:
      "Started in 2003 under the self-financing scheme. Alumni contributed to developing the VCONSOLE video conferencing app for the Government of India. The association arranges tours, seminars, exhibitions, quizzes, mini projects, personality development, and symposiums.",
    vision:
      "To mould individuals into technically competent, well-disciplined, and socially committed Computer Engineers.",
    mission: [
      "Impart in-depth knowledge to improve problem-solving abilities.",
      "Enlighten individuals about technological breakthroughs.",
      "Promote teamwork and leadership with ethical and social values."
    ],
    peo: [
      "Realm Knowledge – Excel in career and higher education by acquiring knowledge and skills.",
      "Life-long learning – Engage in career enhancement and entrepreneurial skills through life-long learning.",
      "Leadership – Exhibit teamwork, leadership, communication, and ethics."
    ],
    pso: [
      "Develop software solutions using emerging technologies.",
      "Work with computing professionals for lifelong career development."
    ],
    labs: [
      "Software Laboratory",
      "Hardware and Networking Laboratory",
      "CAD Laboratory"
    ],
    faculty: [
      "Mrs. Deepa Nair - Head of the Department",
      "Mrs. Surya V. - Lecturer",
      "Mrs. Jyothi Joy - Lecturer",
      "Mrs. Rincy Joseph - Lecturer",
      "Mrs. Preethy Prakash - Lecturer",
      "Mrs. Minu Saradi - Demonstrator",
      "Mrs. Sowmya S. - Demonstrator",
      "Mrs. Kiran M. Thomas - Demonstrator",
      "Mr. A. Yoonus - Trade Instructor"
    ]
  },
  // ge: {
  //   "AidedSection": {
  //     "title": "Aided Section",
  //     "faculty": [
  //       "Mrs. Sita S. (Computer)",
  //       "Mrs. Molimma Joseph (Physics)",
  //       "Mrs. Rakhi V.R. (Chemistry)",
  //       "Fr Libin Xavier CMI (Mathematics)",
  //       "Fr Thomas G. CMI (English)",
  //       "Mr. Jaick Joseph (Physical Instructor)",
  //       "Mr. Wilfred E. (Lab Attender)"
  //     ]
  //   },
  //   "SelfFinancingSection": {
  //     "title": "Self-Financing Section",
  //     "faculty": [
  //       "Mrs. Ans Mathew (Physics)",
  //       "Mrs. Bindu K.S. (Chemistry)",
  //       "Mrs. Resmi R. Nath (English)",
  //       "Mrs. Anisha G. (Mathematics)"
  //     ]
  //   }
  // },
  // workshop: {
  //   "title": "Workshop",
  //   "faculty": [
  //     "Fr Jaison Joseph CMI (Workshop Superintendent)",
  //     "Mr. Naijin Varghese (Workshop Instructor)",
  //     "Mr. Varghese Joseph (Workshop Instructor)",
  //     "Mr. Jenson (Workshop Instructor)",
  //     "Mr. Bibin K.W. (Trade Instructor)",
  //     "Mr. Alex C. Mullassery (Trade Instructor)",
  //     "Fr Jaison Antony CMI (Trade Instructor)",
  //     "Mr. Aji Kumar M.S. (Trade Instructor)",
  //     "Mr. Sen Babu (Trade Instructor)",
  //     "Mr. Arun N. (Trade Instructor)",
  //     "Mr. Anish Varghese (Tradesman)",
  //     "Mr. Tijomon Thomas (Tradesman)",
  //     "Mr. Thomas Joseph (Tradesman)",
  //     "Mr. Vishnu K.V. (Tradesman)"
  //   ]
  // },
  // AdministrativeStaff: {
  //   "AidedSection": {
  //     "title": "Aided Section",
  //     "staff": [
  //       "Fr James Devasia CMI (Principal)",
  //       "Mr. Binny Joseph (Office Superintendent)",
  //       "Mr. Syam Mohan (Senior Clerk)",
  //       "Mr. Antony J. (Senior Clerk)",
  //       "Mr. Joshy Antony (Senior Clerk)",
  //       "Mr. Tom Thomas (Clerk)",
  //       "Mr. Mathew A.J. (Clerk)",
  //       "Mr. Bibin Thomas (Clerk)",
  //       "Mrs. Radhika M. (Steno Typist)",
  //       "Mr. Shijo Cherian (Librarian)",
  //       "Mr. Vijayaraj M. (Library Attender)",
  //       "Mr. Joshy Josekutty (Store Keeper)",
  //       "Mr. Vishnu Kumar V.L. (Office Attendant)",
  //       "Mrs. Elizabeth P.A. (Office Attendant)",
  //       "Mr. Ajay T.A. (Office Attendant)",
  //       "Mr. Suresh Kumar G. (Office Attendant)",
  //       "Mr. Benadict P.J. (Office Attendant)",
  //       "Mr. Akhil P.M. (Office Attendant)",
  //       "Mr. Vinu George (Sweeper)",
  //       "Mr. Mathew Devasia (Sweeper)",
  //       "Mr. Basanta Raj Sharma (Watchman)",
  //       "Mr. Krishna Prasad Adhikari (Watchman)"
  //     ]
  //   },
  //   "SelfFinancingSection": {
  //     "title": "Self-Financing Section",
  //     "staff": [
  //       "Mrs. Fasila S. (Clerk)",
  //       "Mr. Martin Joseph (Clerk)",
  //       "Mrs. Helan V.C. (Sweeper)",
  //       "Mr. Ramesan K. (PRO)"
  //     ]
  //   }
  // }

};


export const managementTeam = [{
  id: 1,
  name: "Fr Thomas Choolaparampil CMI",
  position: "Chairman",
  image: "/management/Choolaparampil.png",
  contact: "0477-2287240"
},
{
  id: 2,
  name: "Fr James Devasia CMI",
  position: "Principal",
  image: "/management/James Kanyakonil.png",
  contact: "0477-2287241"
},
{
  id: 3,
  name: "Fr Jacob Kurian CMI",
  position: "Vice-Principal & Self-Financing Section Co-ordinator",
  image: "/management/Purakkary Jacob.png",
  contact: "0477-2287242"
},
{
  id: 4,
  name: "Fr Bijo M.D. CMI",
  position: "Bursar",
  image: "/management/Bijo Mattaparambil.jpg",
  contact: "0477-2287243"
},
{
  id: 5,
  name: "Fr Thomas G. CMI",
  position: "Hostel Warden",
  image: "/management/Pockavarayathu.png",
  contact: "0477-2287244"
}
];
