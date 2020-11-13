import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata'


class Header extends Component {
    state = {}

    render() {
        return (
        <div className='container'>
        
            <Fade bottom>
                <p>Hello, my name is</p>
                <p className='header-title'>
                    {data.headerTagline[0]}
                    <br></br>
                    {data.headerTagline[1]}
                    <br></br>
                    {data.headerTagline[2]}
                    <br></br>
                    </p>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                
            </Fade>



        </div>);
    }
}

export default Header;