import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter,  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Header = () => {
    

   
        return (
        <div className='container header'>
            <div className="row">
                <div className="col-12 text-center">
                    <Fade bottom>
                        {/* <p classname='header-para' >Hello, my name is</p> */}
                        <h1 className='header-title'> Bhaskar Maity</h1>
                        <p className='header-banner'>
                            {data.headerTagline[0]}
                            
                            {data.headerTagline[1]}
                            <br></br>
                        </p>
                            

                            <p className='header-para'>
                                
                            {data.headerTagline[2]}
                            <br></br>
                            </p>
                        
                            <ul className='social-icons'>
                                <li><a href=''><FaGithub/></a></li>
                                <li><a href=''><FaLinkedin/></a></li>
                                <li><a href=''><FaInstagram/></a></li>
                                <li><a href=''><FaTwitter/></a></li>
                                <li><a href=''><FiMail/></a></li>
                                
                            </ul>
                        
                    </Fade>
                </div>
            </div>



        </div>);
    
}

export default Header;