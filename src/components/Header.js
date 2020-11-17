import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata'


class Header extends Component {
    state = {}

    render() {
        return (
        <div className='container header'>
        
            <Fade bottom>
                <p classname='pt-2 h4' >Hello, my name is</p>
                <p className='header-title'>
                    {data.headerTagline[0]}
                    
                    {data.headerTagline[1]}
                    <br></br>
                </p>
                    

                    <p>
                        
                    {data.headerTagline[2]}
                    <br></br>
                    </p>
                
                    <button variant="dark"><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                
            </Fade>



        </div>);
    }
}

export default Header;