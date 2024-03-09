export const Bio = {
  name: "Giacomo Della Peruta",
  roles: ["frontend developer", "UI/UX designer", "gamer"],
  description:
    "Sono una persona attenta ai dettagli, costantemente alla ricerca di nuove idee. Mi piace mettermi alla prova con dei progetti innovativi e con i framework del momento.",
  github: "https://github.com/GiaxUp",
  resume: "https://drive.google.com/file/d/1BBc3gA2kET4dbxoeZr3ouOttwedakjfO/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/giacomo-della-peruta/",
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
      {
        name: "Tailwind",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
    id: 2,
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png",
    role: "Corso Fullstack Web Developer",
    company: "EPICODE Italia",
    date: "Novembre 2022 - Giugno 2023",
    desc: "Più di 950 ore distribuite in 6 mesi di duro lavoro. Ho creato più di 15 web app durante questo corso.",
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
    id: 1,
    img: "https://i.ibb.co/7zCvX9k/302721517-771000574036405-5799253307009603356-n.png",
    role: "Customer Care",
    company: "WeMay SRL",
    date: "Dicembre 2020 - Giugno 2022",
    desc: "Assistenza al cliente e in alcuni casi prenotazione di appuntamenti o gestione di aspetti commerciali per diverse commesse, fra queste: ATS Milano, ASL Piemonte, Motorizzazione FVG, vari acquedotti toscani (ADF, Acque Toscane, Publiacqua ecc.), IREN Gas e Luce, ALIA ritiro ingombranti. Ho svolto anche il ruolo di referente tecnico col compito di gestire e sistemare tempestivamente eventuali problematiche di connettività della sede di Arcidosso (GR).",
  },

  {
    id: 0,
    img: "https://static.vecteezy.com/system/resources/previews/008/040/410/original/school-logo-design-template-free-vector.jpg",
    role: "Scuola Superiore",
    company: "IIS Amedeo Avogadro (SI)",
    date: "Settembre 2010 - Giugno 2015",
    desc: "Ho scelto come indirizzo elettronica ed elettrotecnica perché purtroppo nella mia zona non c'era la possibilità di scegliere informatica, altrimenti avrei scelto quella. Ho un diploma come perito elettronico, ho avuto i primi accenni di coding grazie ad Assembly e C++.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Kanji Guesser",
    date: "Dicembre 2023",
    description:
      "Scopri la ricca storia dei kanji e acquisisci esperienza con le intricate differenze tra le letture Kun'yomi e On'yomi.",
    image: "https://i.ibb.co/3hWKLGN/kanji.png",
    tags: ["React", "Typescript", "Axios", "Bootstrap", "JSON Server", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/kanji-guesser",
  },
  {
    id: 1,
    title: "Theater Ticket Management",
    date: "Maggio 2023 - Giugno 2023",
    description:
      "Il capstone project finale del corso con Epicode: una web app per la gestione dei biglietti per i teatri che permette agli utenti registrati di scegliere il proprio posto e salvare i biglietti del cinema sul proprio profilo.",
    image: "https://i.ibb.co/CbN5vWV/home.png",
    tags: ["React", "Redux", "SpringBoot", "JWT", "postgreSQL", "Axios", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/Capstone",
    webapp: "https://www.youtube.com/watch?v=rV5nATfn-ko",
  },
  {
    id: 2,
    title: "Discord Clone",
    date: "Settembre 2023",
    description:
      "Connettiti con gli amici, condividi i tuoi meme preferiti e crea il tuo spazio di ritrovo virtuale con questa app!",
    image: "https://i.ibb.co/LxJ5Ffg/home.png",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "postgreSQL", "Axios", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/discord-clone",
    webapp: "https://www.youtube.com/watch?v=J9lf40vaBO0",
  },
  {
    id: 3,
    title: "3D Shirt Generator",
    date: "Settembre 2023",
    description:
      "Molte grandi aziende utilizzano già la grafica 3D per mostrare i propri prodotti. Ho deciso di creare questo sito Web con ThreeJS 3D e di infonderlo con il potere dell'intelligenza artificiale!",
    image: "https://i.ibb.co/tB5bf31/tshirt.png",
    tags: ["Vite", "Tailwind", "OpenAI", "ThreeJS", "Demo Video"],
    category: "machine learning",
    github: "https://github.com/GiaxUp/threejs-ai",
    webapp: "https://www.youtube.com/watch?v=Qrk8w1z6PXw",
  },
  {
    id: 4,
    title: "Threads Clone",
    date: "Luglio 2023 - Agosto 2023",
    description:
      "Ho deciso di unirmi all'hype per il nuovo social network di Meta creando un clone!",
    image: "https://i.ibb.co/Qr5kv3B/threads.png",
    tags: ["React", "Redux", "JSON Server", "Moments", "Demo Video"],
    category: "web app",
    github: "https://github.com/GiaxUp/threads-clone",
    webapp: "https://www.youtube.com/watch?v=ZUF8Ba7Qhys",
  },
  {
    id: 5,
    title: "LinkedIn Clone",
    date: "Marzo 2023",
    description:
      "Io e i miei compagni di corso abbiamo lavorato su un clone di LinkedIn, uno dei primi grandi progetti fatto in gruppo.",
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
    id: 6,
    title: "Netflix Clone",
    date: "Febbraio 2023",
    description:
      "Remake di un vecchio progetto Netflix con React, recuperando alcuni film da un'API pubblica (omdbapi.com)",
    image: "https://i.ibb.co/pz8myVG/n1.png",
    tags: ["React", "Bootstrap", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/R1L5",
  },
  {
    id: 7,
    title: "Spotify Clone",
    date: "Febbraio 2023",
    description:
      "Remake di un vecchio clone di Spotify. Per fare la differenza ho aggiunto anche un lettore musicale funzionante che riproduce i primi 30s della canzone selezionata!",
    image: "https://i.ibb.co/dbThnBZ/home.png",
    tags: ["React", "Bootstrap", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/R3L5",
  },
  {
    id: 8,
    title: "Weather App",
    date: "Ottobre 2023",
    description:
      "Sono sempre alla ricerca di nuove sfide. Il framework Angular è nel mio radar da un po', ecco il mio primo progetto con questo framework!",
    image: "https://i.ibb.co/SvG8KJy/weather.png",
    tags: ["Angular", "CSS", "API"],
    category: "web app",
    github: "https://github.com/GiaxUp/weather-app",
  },
  {
    id: 9,
    title: "Travel App",
    date: "Ottobre 2023",
    description:
      "Hai bisogno di aiuto per i tuoi viaggi? Osserva l'inconfondibile bellezza della natura con questa app!",
    image: "https://i.ibb.co/PtbrSWn/travel.png",
    tags: ["React", "Next.js", "Tailwind"],
    category: "web app",
    github: "https://github.com/GiaxUp/travel-app",
  },
];
