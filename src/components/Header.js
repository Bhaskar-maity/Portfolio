import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaKaggle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Header = () => {
    

   
        return (
        <div className='container header' id='home'>
            <div className="row">
                <div className="col-12 text-center">
                    <Fade bottom>
                        
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
                                <li><a href='https://github.com/Bhaskar-maity' target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                                <li><a href='https://www.linkedin.com/in/bhaskar-maity-882653190' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
                                <li><a href='https://www.instagram.com/btw_bhaskar/' target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
                                <li><a href='https://twitter.com/Bhaskar14153687' target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
                                <li><a href='mailto:maitybhaskar2015@gmail.com' target="_blank" rel="noopener noreferrer"><FiMail/></a></li>
                                <li><a href='https://www.kaggle.com/bhaskar321' target="_blank" rel="noopener noreferrer"><FaKaggle/></a></li>
                                
                            </ul>
                        
                    </Fade>
                </div>
            </div>



        </div>);
    
}

export default Header;