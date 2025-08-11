// // Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import postgreLogo from "./assets/tech_logo/postgre.png";


// // Experience Section Logo's
import  AmmagTechnologiesLogo from './assets/company_logo/b-Ammag_Technologies_Logo.png';
import  knowledgeStreamsLogo from './assets/company_logo/a-Knowledge_Streams_Logo.jpg';

// // Education Section Logo's
import hajveryUniversity from "./assets/education_logo/hajveryUniversity-removebg-preview.png";
import superiorCollege from "./assets/education_logo/superiorCollege.png";
import ranaSiddiqueSchool from "./assets/education_logo/ranaSiddiqueSchool.png";


// // Project Section Logo's
import cloneOf1cmIncNFTsAdminPanel from "./assets/project_picture/clone_1cmInc_nft_admin_panel.png";
import adminAndEmployeesTasksManagement from "./assets/project_picture/admin_employees_tasks_management.png";
import CRUD from "./assets/project_picture/CRUD.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo  },
    { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  // {
  //   title: 'Languages',
  //   skills: [
    
  //     { name: 'JavaScript', logo: javascriptLogo },
     
  //   ],
  // },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

 export const experiences = [
    
    {
      id: 0,
      img: AmmagTechnologiesLogo,
      role: "Fullstack Developer",
      company: "Ammag Technologies",
      date: "May 2024 - July 2024",
      desc: " Supported development and implementation of specific project or tool and collaborating with the team to resolve technical issues, improve workflow. Gained practical experience in specific skills, e.g. programming, debugging, project management.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 1,
      img: knowledgeStreamsLogo,
      role: "Fullstack Developer",
      company: "Knowledge Streams",
      date: "Jan 2024 - April 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    }
   ];

export const education = [
  {
    id: 0,
    img: hajveryUniversity,
    school: "Hajvery University, Lahore",
    date: "Sept 2019 - Jan 2024",
    grade: "3.02 CGPA",
    desc: "I have completed my Bachelor's degree (BSCS) in Computer Science. During my studies, I gained a strong foundation in programming, software development, and core computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops and technical events, which enhanced my skills and practical knowledge. My BSCS journey has been instrumental in developing my technical abilities and preparing me for professional growth.",
    degree: "Bachelor of Science in Computer Science - BSCS",
  },
   {
    id: 1,
    img: superiorCollege,
    school: " Superior College , Gujranwala",
    date: "Sept 2016 - Jan 2018",
    grade: "B",
    desc: "I completed my Intermediate in Computer Science (ICS), where I built a strong foundation in programming basics, database concepts, and computer operations. This academic background strengthened my logical thinking, problem-solving abilities, and technical skills, paving the way for my Bachelor's degree in Computer Science",
    degree: "Intermediate in Computer Science - ICS",
  },
   {
    id: 2,
    img: ranaSiddiqueSchool,
    school: "Rana Siddique School, Gujranwala",
    date: "August 2014 - July 2016 ",
    grade: "B",
    desc: "I completed my Matric with a focus on Biology, where I developed a strong understanding of scientific concepts, observation skills, and analytical thinking. Studying Biology enhanced my attention to detail, logical reasoning, and ability to approach problems methodically, which later supported my transition into the field of Computer Science.",
    degree: "Matriculation in Biology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Clone of 1CMInc NFTs Admin Panel",
    description:
      "An NFT-based admin panel built with React.js and Tailwind CSS. It includes modules for creating NFTs, NFT Coupon Management, NFT Collection Management, Add New Collection, Partner Management, Add New Partner, Sub-admin Management, Add Sub-admin, Add Role, Update Role, Assign Rights, Send Notification— all in one centralized dashboard.",
    image: cloneOf1cmIncNFTsAdminPanel,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    github:
      "https://github.com/Rajput-Umair/clone-1cmInc-nft-admin-panel",
    webapp: "https://symphonious-rugelach-e710d1.netlify.app/CouponManagment",
  },
  {
    id: 1,
    title: "Admin Employees Tasks Management",
    description:
      "A Task Management Dashboard built with React.js & Tailwind CSS. Admin (admin@example.com / 123) can assign tasks & track progress of all employees. Employees (e@e.com / 123) can view & update their tasks. Users are redirected to their respective dashboards based on email for role-based access.",
    image: adminAndEmployeesTasksManagement,
    tags: [
      "React JS",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      
    ],
    github: "https://github.com/Rajput-Umair/admin-employees-tasks-management",
    webapp: "https://astounding-lollipop-c4959e.netlify.app/",
  },
  {
    id: 2,
    title: "CRUD",
    description:
      "Developed backend user management system with CRUD operations, creating a to-do list for each user with database integration. Implemented middleware for user authentication using JWT tokenization and session handling. Built an employee management system that performed CRUD operations for employees, defined database schemas for required fields, and established relationships among them. Technologies used: Express.js, Node.js, PostgreSQL, and Postman for testing.",
    image: CRUD,
    tags: [
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      
    ],
    github: "https://github.com/Rajput-Usdfsfsdmair/admin-employeesfasfaff-tasks-management",
    webapp: "https://astounfsdfsdfsfding-lollipop-c4959e.netlify.appfasfaf/",
  },

];
