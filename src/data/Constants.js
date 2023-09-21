export const Bio = {
  name: "Giacomo Della Peruta",
  roles: ["Full Stack Developer", "UI/UX Designer", "Programmer"],
  description:
    "I am an enthusiastic and adaptable individual, consistently excited to embrace fresh opportunities. Fueled by a genuine love for acquiring knowledge, I am committed to produce the best outcomes.",
  github: "https://github.com/GiaxUp",
  resume: "https://drive.google.com/file/d/1hkl95wq-rDQKkoVw776IaTAVkfXgKTRM/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/giacomo-della-peruta/",
  twitter: "https://twitter.com/GiaxUp",
  insta: "https://www.instagram.com/giacs/",
  facebook: "https://www.facebook.com/GiaxUp",
  telegram: "https://t.me/Giacs",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "SASS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "Typescript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "NodeJS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png",
    role: "Course Student",
    company: "EPICODE Italia",
    date: "Nov 2022 - Jun 2023",
    desc: "Fullstack Web Developer course, more than 950 hours distribuited in 6 months.",
    skills: [
      "Bootstrap",
      "CSS",
      "Eclipse",
      "Git",
      "GitHub",
      "HTML5",
      "JavaScript",
      "TypeScript",
      "Redux",
      "React",
      "SASS",
      "VS Code",
    ],
    doc: "https://benchmark.epicode.com/credentials/64872a79caff90a79658630f",
  },
  {
    id: 0,
    img: "https://static.vecteezy.com/system/resources/previews/008/040/410/original/school-logo-design-template-free-vector.jpg",
    role: "High School",
    company: "IIS Amedeo Avogadro (SI)",
    date: "Sep 2010 - Jun 2015",
    desc: "Electronics and electrical engineering. First approach to coding thanks to C++ and Assebly. Graduated with 65/100.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Discord Clone",
    date: "Sep 2023",
    description:
      "Decided to challenge myself with TypeScript and new technologies like Next.js, Prisma, Tailwind and Socket.io!",
    image: "https://i.ibb.co/88X84RV/main.png",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "postgreSQL", "Axios", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/discord-clone",
    webapp: "https://www.youtube.com/watch?v=rV5nATfn-ko",
  },
  {
    id: 1,
    title: "Cinema Ticket Management",
    date: "May 2023 - Jun 2023",
    description:
      "For my final Capstone Project at Epicode I developed a full-stack web application that allows registered users to choose their seats and buy/save tickets on their profile.",
    image: "https://i.ibb.co/rpNY7Qk/Rocket.png",
    tags: ["React", "Redux", "SpringBoot", "JWT", "postgreSQL", "Axios", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/Capstone",
    webapp: "https://www.youtube.com/watch?v=rV5nATfn-ko",
  },
  {
    id: 2,
    title: "3D Shirt Generator",
    date: "Sep 2023",
    description: "Created a 3D t-shirt generator to practice with Tailwind, ThreeJS and Vite!",
    image: "https://i.ibb.co/0K3Ljgk/tshirt.png",
    tags: ["Vite", "Tailwind", "OpenAI", "ThreeJS", "Demo Video"],
    category: "machine learning",
    github: "https://github.com/GiaxUp/threejs-ai",
    webapp: "https://www.youtube.com/watch?v=Qrk8w1z6PXw",
  },
  {
    id: 3,
    title: "Threads Clone",
    date: "Jul 2023 - Aug 2023",
    description:
      "Decided to join the hype for the new Meta social network by creating a look-a-like clone of it!",
    image: "https://i.ibb.co/Qr5kv3B/threads.png",
    tags: ["React", "Redux", "JSON Server", "Moments", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/threads-clone",
    webapp: "https://www.youtube.com/watch?v=ZUF8Ba7Qhys",
  },
  {
    id: 4,
    title: "LinkedIn Clone",
    date: "Mar 2023",
    description:
      "During a Team Build Week we had to replicate LinkedIn using React. This is one of my first experiences wotking in a team and we had to cooperate and discuss to code togheter, fun experience!",
    image: "https://i.ibb.co/HpncTV7/1.png",
    tags: ["React", "Redux", "Bootstrap", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/R5L5",
    member: [
      {
        name: "Giacomo Della Peruta",
        img: "https://avatars.githubusercontent.com/u/40038797?v=4",
        linkedin: "https://www.linkedin.com/in/giacomo-della-peruta/",
        github: "https://github.com/giaxup/",
      },
      {
        name: "Palma Iacobelli",
        img: "https://i.ibb.co/bHrh4Fr/palma.png",
        linkedin: "https://www.linkedin.com/in/palma-iacobelli-482521185",
        github: "https://github.com/369-Palma",
      },
      {
        name: "Carlos Sarmiento",
        img: "https://i.ibb.co/6ZLxLCT/carlos.png",
        linkedin: "https://www.linkedin.com/in/carlos-miguel-angel-sarmiento-baca-64409bb6",
        github: "https://github.com/csarmientobaca",
      },
      {
        name: "Michela Kalowski",
        img: "https://i.ibb.co/hLFJLnx/michela.jpg",
        linkedin: "https://www.linkedin.com/in/michela-kalowski-103130268/",
        github: "https://github.com/MichelaKalowski",
      },
    ],
  },
  {
    id: 5,
    title: "Netflix Clone",
    date: "Feb 2023",
    description:
      "Refactored an old Netflix project with React, fetched some movies from a public API (omdbapi.com)",
    image: "https://i.ibb.co/pz8myVG/n1.png",
    tags: ["React", "Bootstrap", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/R1L5",
  },
  {
    id: 6,
    title: "Spotify Clone",
    date: "Feb 2023",
    description:
      "Refactored an old Spotify project with React and Redux. To make the difference I added a working music player too that plays the first 30s of the selected song!",
    image: "https://i.ibb.co/dbThnBZ/home.png",
    tags: ["React", "Bootstrap", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/R3L5",
  },
];
