import svm from './images/SVMdigit.png';
import weather from './images/Weather.jpg';
import React, { Component }  from 'react';
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

export default
    {
        
        name :'Bhaskar.',
        headerTagline: [
                        'Web Developer,Competitive programmer, ',
                        
                        "Machine Learning Enthusiast",
                        
                        'Love exploring new things!',
                        
    ],
        //Contact Email
        contactEmail:'maitybhaskar2015@gmail.com',
        // About Text 
        abouttext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
       
       ShowAboutImage:true,
       //  Projects 
       projects: [
        {
          id: 1, 
          title: "SVM-Digit-recognition", 
          para:
            "A classic problem in the field of pattern recognition is that of handwritten digit recognition. Suppose that you have images of handwritten digits ranging from 0-9.",
          
          imageSrc:
            "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
          
          url: "https://github.com/Bhaskar-maity/SVM-Digit-recognition",
        },
        {
          id: 2, 
          title: "Javascript-weather-app", 
          para:
            "A simple weather web application using Html, Css, Javascript, Weathermap Api.", 
          
          imageSrc:
            "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
          
          url: "https://github.com/Bhaskar-maity/Javascript-weather-app",
        },
        {
          id: 3, 
          title: "DummyPortfolioWebsite", 
          para:
            "A simple weather web application using Html, Css, Javascript, Weathermap Api.", 
          
          imageSrc:
            "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
          
          url: "https://github.com/Bhaskar-maity/DummyPortfolioWebsite",
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
            name: "Sass",
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
        ]
    
        
    }