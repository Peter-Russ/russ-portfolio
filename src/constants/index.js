import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  csharp,
  russImmobilien,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Über mich",
  },
  {
    id: "work",
    title: "Erfahrung",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Web Entwickler",
    icon: web,
  },
  {
    title: "Frontend Entwickler",
    icon: mobile,
  },
  {
    title: "Backend Entwickler",
    icon: backend,
  },
  {
    title: "Destop Entwicklung",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Html CSS JavaScript",
    company_name: "Private Entwicklung",
    icon: javascript,
    iconBg: "#383E56",
    date: "Mai 2020 - September 2021",
    points: [
      "Lernen der Grundlagen von Webentwicklung, darunter den Aufbau und Entstehung von Webseiten.",
      "Einstieg mit Html, CSS/SCSS und der Entwicklung einer privaten Homepage.",
      "Grundprinzipen der Programmierung mit JavaSript kennengelernt.",
      "Entwicklung von privaten Projekten zur Vorbereitung für den Start meiner Ausbildung als Fachinformatiker.",
    ],
  },
  {
    title: "Ausbildung als Fachinformatiker für Anwendungsentwicklung",
    company_name: "Caddent GmbH",
    icon: csharp,
    iconBg: "#E6DEDD",
    date: "September 2021 - August 2024",
    points: [
      "In meiner Ausbildung habe ich eine Vielzahl an Technologien kennengelernt und Projekte umgesetzt.",
      "Die meisten Projekte wurden in der Programmiersprach C# umgesetzt, wie API's mit ASP.Net, Webentwicklung mit Blazor oder Desktop Anwendungen.",
      "Durch die Erfahrungen im Team und die Entwicklung komplexer Programme habe ich große Fortschritte gemacht.",
      "Mit der Programmierung in C# lernte ich die Vor- und Nachteile der Objektorientierung ausführlich kennen.",
    ],
  },
  {
    title: "Private Projekte",
    company_name: "Ziele",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Mai 2020 - .....",
    points: [
      "Privat versuche ich immer neue Technologien kennen zu lernen und mein Wissen zu erweitern.",
      "Ich habe seit dem Beginn meiner Programmierung spaß daran, eigene Ideen kreativ umzusetzen.",
      "Seit Mai 2020 habe ich viele private Projekte umgesetzt, welche Sie weiter unten in dem Portfolio ansehen können.",
    ],
  },
  {
    title: "Full Stack",
    company_name: "Meta",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "Im Moment",
    points: [
      "Ich arbeite daran, ein zuverlässiger Full stack Webentwickler zu werden",
      "Im Moment lerne ich mit Datenbanken wie MongoDB und Backends / Restful API's mit Node.js aufzubauen",
      "Updates folgen..."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Die Webseite hat mich in allen Bereichen überzeugt. Meine Vorstellungen wurden professionell umgesetzt.",
    name: "Martin Russ",
    designation: "Gründer",
    company: "Russ Immobilien",
    image: "https://profile-images.xing.com/images/6ff1dbd9327a9bd62222393747c71996-3/martin-russ.1024x1024.jpg",
  },
  {
    testimonial:
      "Ich sehr gerne im Team zusammen gearbeitet und würde Ihn jederezeit weiter empfehlen",
    name: "Luca",
    designation: "CEO",
    company: "Keno",
    image: "https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg",
  },
  {
    testimonial:
      "Herr Russ ist ein Programmierer, welcher mich vorallem durch seine kreativen Lösungsansetze überzeugt hat",
    name: "Isa",
    designation: "CTO",
    company: "3FB Enterprise",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Russ Immobilien",
    description:
      "Eine moderne Buisness Webseite für das Unternehmen meines Bruders. Hier werden die Leistungen des Unternehmens professionel dargestellt. Hier wurde besonders auf Performance, User-experience und SEO geachtet",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: russImmobilien,
    source_code_link: "https://russ-immobilien.de/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
