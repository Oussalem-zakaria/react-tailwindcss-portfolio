// Import images
import MobileImage3 from "../images/app-mob-1.png";
import MobileImage4 from "../images/app-mob-2.png";
import MobileImage5 from "../images/app-mob-3.png";
import WebImage1 from "../images/web-project-3.png";
import WebImage2 from "../images/web-project-2.png";
import WebImage3 from "../images/web-project-1.png";
import map1 from "../images/map/Auth.png";
import map2 from "../images/map/Home.png";
import map3 from "../images/map/Events.png";
import map4 from "../images/map/Map.png";
//
import rdv1 from "../images/rdv/Auth.png";
import rdv2 from "../images/rdv/HomePage.png";
import rdv3 from "../images/rdv/RDV.png";
import rdv4 from "../images/rdv/WelcomPage.png";
//
import trans1 from "../images/transport/im1.png";
import trans2 from "../images/transport/im2.png";
import trans3 from "../images/transport/im3.png";
//
import notif1 from "../images/notifications/img1.png";
import notif2 from "../images/notifications/img2.png";
//
import logist1 from "../images/logistique/dashboard.png";
import logist2 from "../images/logistique/login.png";
import logist3 from "../images/logistique/profile.png";
import logist4 from "../images/logistique/drivers.png";
//
//
import wordpressimg1 from "../images/wordpress/home.png";
import wordpressimg2 from "../images/wordpress/img2.png";
import wordpressimg3 from "../images/wordpress/img3.png";
//
import css from "../images/icons/css3.png";
import symfony from "../images/icons/symfony.png";
import react from "../images/icons/react.png";
import springboot from "../images/icons/springboot.png";
import reactnative from "../images/icons/reactnative.png";
import firebase from "../images/icons/firebase.png";
import redux from "../images/icons/redux.png";
import geoapify from "../images/icons/geoapify.png";
import mysql from "../images/icons/MySQL.png";
import bootstrap from "../images/icons/bootstrap.png";
import stripe from "../images/icons/stripe.png";
import tailwindcss from "../images/icons/tailwindcss.png";
import wordpress from "../images/icons/wordpress.png";
import elementor from "../images/icons/elementor.png";

export const projectsData = [
  {
    id: 1,
    title: "Map of the Faculty of Sciences El Jadida",
    category: "Mobile Application",
    objective:
      "The main goal of this project is to develop a mobile application that displays a detailed map of the Faculty of Sciences in El Jadida.",
    img: MobileImage3,
    ProjectHeader: {
      title: "Map of the Faculty of Sciences El Jadida",
      publishDate: "2024-10-06",
      tags: "Mobile Application",
    },
    screens: [
      {
        id: 1,
        title: "Authentication",
        img: map1,
      },
      {
        id: 2,
        title: "Home",
        img: map2,
      },
      {
        id: 3,
        title: "Event Listing",
        img: map3,
      },
      {
        id: 4,
        title: "Location Exploration",
        img: map4,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React Native",
        icon: reactnative,
      },
      {
        id: 3,
        name: "Redux",
        icon: redux,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: tailwindcss,
      },
      {
        id: 2,
        name: "Firebase",
        icon: firebase,
      },
      {
        id: 4,
        name: "Geoapify",
        icon: geoapify,
      },
    ],
  },
  {
    id: 2,
    title: "Blood Donation Appointment Management",
    category: "Mobile Application",
    objective:
      "Development of a mobile application to manage blood donation appointments, with a REST API (Spring Boot) and a React Native interface for slot management.",
    img: MobileImage4,
    ProjectHeader: {
      title: "Blood Donation Appointment Management",
      publishDate: "2024-10-06",
      tags: "Mobile Application",
    },
    screens: [
      {
        id: 4,
        title: "Welcome Screens",
        img: rdv4,
      },
      {
        id: 1,
        title: "Authentication",
        img: rdv1,
      },
      {
        id: 2,
        title: "Home Screens",
        img: rdv2,
      },
      {
        id: 3,
        title: "The appointment pages",
        img: rdv3,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React Native",
        icon: reactnative,
      },
      {
        id: 3,
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: tailwindcss,
      },
      {
        id: 2,
        name: "Spring Boot",
        icon: springboot,
      },
      {
        id: 4,
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    id: 5,
    title: "Development of a Transport Logistics Website",
    category: "Web Application",
    objective:
      "During my internship at TWADA EXPRESS SASU, I developed a web project from scratch using the Symfony framework, PHP, and JavaScript. The project involved creating a website for the company's freight transportation services. I was responsible for both front-end and back-end development, using Symfony for PHP-based server-side logic and MySQL for database management. This experience allowed me to enhance my web development skills, work within a team, and meet deadlines while delivering a robust and scalable application.",
    img: WebImage2,
    ProjectHeader: {
      title: "Transport Services Platform",
      publishDate: "2024-10-06",
      tags: "Web Application",
    },
    screens: [
      {
        id: 4,
        title: "",
        img: trans1,
      },
      {
        id: 1,
        title: "",
        img: trans2,
      },
      {
        id: 2,
        title: "",
        img: trans3,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Html5, Css3, JavaScript",
        icon: css,
      },
      {
        id: 2,
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        id: 3,
        name: "Symfony",
        icon: symfony,
      },
      {
        id: 4,
        name: "MySQL",
        icon: mysql,
      },
      {
        id: 4,
        name: "Stripe",
        icon: stripe,
      },
      {
        id: 4,
        name: "Geoapify",
        icon: geoapify,
      },
    ],
  },
  {
    id: 4,
    title: "Logistics Transport Management Application",
    category: "Web Application",
    objective:
      "During my internship at the Presidency of Chouaib Doukkali University, I developed a logistics management application. The project involved using Spring Boot for the backend and React.js with Tailwind CSS for the frontend. This allowed me to apply my technical skills and gain practical experience in building full-stack web applications.",
    img: WebImage3,
    ProjectHeader: {
      title: "Logistics Transport Management Application",
      publishDate: "2024-10-06",
      tags: "Web Application",
    },
    screens: [
      {
        id: 4,
        title: "Dashboard",
        img: logist1,
      },
      {
        id: 1,
        title: "Authentication",
        img: logist2,
      },
      {
        id: 2,
        title: "Profile",
        img: logist3,
      },
      {
        id: 3,
        title: "Driver management",
        img: logist4,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React Js",
        icon: react,
      },
      {
        id: 2,
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: tailwindcss,
      },
      {
        id: 4,
        name: "Spring Boot",
        icon: springboot,
      },
      {
        id: 5,
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    id: 3,
    title: "Mobile Application for Driver Notifications",
    category: "Mobile Application",
    objective:
      "This application is designed to send notifications to drivers, informing them about their trips, whether it's a new assignment or a cancellation. For its development, we used React Native with Expo and Tailwind CSS, creating a seamless mobile experience while maintaining modern design standards and efficient functionality.",
    img: MobileImage5,
    ProjectHeader: {
      title: "Mobile Application for Driver Notifications",
      publishDate: "2024-10-06",
      tags: "Mobile Application",
    },
    screens: [
      {
        id: 4,
        title: "",
        img: notif1,
      },
      {
        id: 1,
        title: "",
        img: notif2,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React Native",
        icon: reactnative,
      },
      {
        id: 2,
        name: "Firebase",
        icon: firebase,
      },
      {
        id: 3,
        name: "Redux",
        icon: redux,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        icon: tailwindcss,
      },
    ],
  },
  {
    id: 6,
    title: "Online Course Website with WordPress and Elementor",
    category: "Web Application",
    objective:
      "This project involved creating an online course website using WordPress and Elementor. The website was designed to provide a user-friendly experience for students and instructors, with features such as course listings, registration forms, and payment processing. By working on this project, I gained valuable experience in web development, content management systems, and e-commerce functionality.",
    img: WebImage1,
    ProjectHeader: {
      publishDate: "2024-10-06",
      tags: "Web Application, WordPress",
    },
    screens: [
      {
        id: 4,
        title: "",
        img: wordpressimg1,
      },
      {
        id: 1,
        title: "",
        img: wordpressimg2,
      },
      {
        id: 2,
        title: "",
        img: wordpressimg3,
      },
    ],
    techStack: [
      {
        id: 1,
        name: "WordPress",
        icon: wordpress,
      },
      {
        id: 2,
        name: "Elementor",
        icon: elementor,
      },
    ],
  },
];
