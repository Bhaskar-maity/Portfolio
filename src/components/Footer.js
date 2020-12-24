import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter,  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <Fade bottom>
      <section id="social-media">
    <div class="container mt-5">
          <div className="row justify-content-center">             
                <div className="col-auto">
                  <h1 class="title text-center">Contact Me</h1>
                  <hr class="ribbon"/>
                  <hr class="ribbon-little"/>
                </div>
                </div>
        
        <div className='row'>
        <ul className='social-icons-footer mr-auto'>
                                <li><a href=''><FaGithub/></a></li>
                                <li><a href=''><FaLinkedin/></a></li>
                                <li><a href=''><FaInstagram/></a></li>
                                <li><a href=''><FaTwitter/></a></li>
                                <li><a href=''><FiMail/></a></li>
                                
        </ul>
        <div className='ml-auto'>
                        <p className='ml-quto'>Made By Bhaskar Maity</p>
        </div>
        </div>
    </div>
  </section>
    </Fade>
  )
}

export default Footer
