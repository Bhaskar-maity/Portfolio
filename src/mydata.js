import svm from "./images/SVM.png";
import weather from "./images/Weather.jpg";
import DummyP from "./images/DummyPortfolio.png";
import Mern from "./images/MERN.png";
import Turtle from "./images/turtleScreenshot.png";
import Tourism from "./images/touristImg.png";
import Whatsapp from "./images/WhatsappClone.jpg";
import React from "react";
import {
   FaHtml5,
   FaCss3Alt,
   FaPython,
   FaBootstrap,
   FaReact,
   FaNpm,
   FaGitAlt,
   FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default {
   name: "Bhaskar.",
   headerTagline: [
      "Web Developer,Competitive programmer, ",

      "Machine Learning Enthusiast",

      "Love exploring new things!",
   ],
   //Contact Email
   contactEmail: "maitybhaskar2015@gmail.com",
   // About Text
   abouttext: [
      "Hi, I'm Bhaskar I'm 3rd year BTech CSE student at Brainware Group of Institutions-SDET under MAKAUT (formerly known as WBUT), who loves to transform ideas into reality using code.",
      "I aspire to be an excellent Software Engineer and use my skills to make something productive and helpful for the nation. MY greatest strength is my positive attitude , even during the most hardest of times. ",
      "My Areas of Interest: Machine Learning, Web Development, Mobile App Development",
   ],

   //  Projects
   projects: [
      {
         id: 1,
         title: "SVM-Digit-recognition",
         para:
            "A classic problem in the field of pattern recognition is that of handwritten digit recognition. Suppose that you have images of handwritten digits ranging from 0-9.",

         imageSrc: svm,

         url: "https://github.com/Bhaskar-maity/SVM-Digit-recognition",
      },
      {
         id: 2,
         title: "Javascript-weather-app",
         para:
            "weather web application using Html, Css, Javascript, Weathermap Api.",

         imageSrc: weather,

         // url: "https://github.com/Bhaskar-maity/Javascript-weather-app",
         url: "https://bhaskar-maity.github.io/Javascript-weather-app/",
      },
      {
         id: 3,
         title: "DummyPortfolioWebsite",
         para:
            "A dummy Portfolio website, with Html, CSS, Javascript, smoothScroll.js, and bootstrap 4. ",

         imageSrc: DummyP,

         // url: "https://github.com/Bhaskar-maity/DummyPortfolioWebsite",
         url: "https://bhaskar-maity.github.io/DummyPortfolioWebsite/",
      },
      {
         id: 4,
         title: "Shopping Notebook",
         para:
            "Help to list out shopping items by adding and deleting items. Using Mongodb, React, Express, Node.js.",

         imageSrc: Mern,

         url: "https://github.com/Bhaskar-maity/Shopping-Notebook.git",
      },
      // {
      //   id:5 ,
      //   title: "Turtle-Race-Game_python",
      //   para:
      //     "Turtle-Race-Game_python.",

      //   imageSrc:
      //     Turtle,

      //   url: "https://github.com/Bhaskar-maity/Turtle-Race-Game_python",
      // },

      {
         id: 5,
         title: "WhatsApp Clone",
         para:
            "created this whatsapp clone by React, Firebase real-time database and Google authentication.",

         imageSrc: Whatsapp,

         // url: "https://github.com/Bhaskar-maity/WhatsApp-Clone",
         url: "https://whatsapp-clone-1bf30.firebaseapp.com/",
      },

      {
         id: 6,
         title: "Tourism-website",
         para:
            "This front-end website is made for a Tourism Company. Made with HTML, CSS, Javascript, Bootstrap and animation stuff.",

         imageSrc: Tourism,

         // url: "https://github.com/Bhaskar-maity/Tourism-website",
         url: "https://bhaskar-maity.github.io/Tourism-website/",
      },
   ],

   skills: [
      {
         id: 1,
         skill: <FaHtml5 className="display-4" />,
         name: "HTML5",
      },
      {
         id: 2,
         skill: <FaCss3Alt className="display-4" />,
         name: "CSS3",
      },
      {
         id: 3,
         skill: <SiJavascript className="display-4" />,
         name: "JavaScript",
      },
      {
         id: 4,
         skill: <FaPython className="display-4" />,
         name: "Python",
      },
      {
         id: 5,
         skill: <FaBootstrap className="display-4" />,
         name: "Bootstrap",
      },
      {
         id: 6,
         skill: <FaReact className="display-4" />,
         name: "React",
      },
      {
         id: 7,
         skill: <FaNpm className="display-4" />,
         name: "npm",
      },
      {
         id: 8,
         skill: <FaGitAlt className="display-4" />,
         name: "Git",
      },
      {
         id: 9,
         skill: <FaGithubSquare className="display-4" />,
         name: "GitHub",
      },
   ],
};
