import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata'


const Header = () => {
    

   
        return (
        <div className='container header'>

        <div className="col-12">
            <Fade bottom>
                <p classname='header-para' >Hello, my name is</p>
                <p className='header-title'>
                    {data.headerTagline[0]}
                    
                    {data.headerTagline[1]}
                    <br></br>
                </p>
                    

                    <p className='header-para'>
                        
                    {data.headerTagline[2]}
                    <br></br>
                    </p>
                
                    <button className='header-btn' variant="dark"><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                
            </Fade>
        </div>



        </div>);
    
}

export default Header;