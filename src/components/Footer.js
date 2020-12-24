import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaKaggle } from "react-icons/fa";
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
          <div className='col-md-6 text-center'>
          <ul className='social-icons-footer mr-auto'>
                                  <li><a href='https://github.com/Bhaskar-maity' target='blank'><FaGithub/></a></li>
                                  <li><a href='https://www.linkedin.com/in/bhaskar-maity-882653190' target='blank'><FaLinkedin/></a></li>
                                  <li><a href='https://www.instagram.com/btw_bhaskar/' target='blank'><FaInstagram/></a></li>
                                  <li><a href='https://twitter.com/Bhaskar14153687' target='blank'><FaTwitter/></a></li>
                                  <li><a href='mailto:maitybhaskar2015@gmail.com' target='blank'><FiMail/></a></li>
                                  <li><a href='https://www.kaggle.com/bhaskar321' target='blank'><FaKaggle/></a></li>
                                  
          </ul>
          </div>
          <div className=' col-md-6 text-center'>
                          <p className='ml-quto copyright-footer'>Made By ❤ Bhaskar Maity    --All Right Reserved</p>
          </div>
        </div>
    </div>
  </section>
    </Fade>
  )
}

export default Footer
