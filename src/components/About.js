import React, { Component } from 'react';
import  'react-bootstrap'
import data from '../mydata';

class About extends Component {
    state = {  }
    render() { 
        return (
        <div className='container'>

            <div className='row about'>
                <div className='about-content col-md-6'>
                    <h1 className='pb-5'>About.</h1>
                    
                    <p>{data.abouttext}</p>
                
                </div>

                <div className='col-md-6 '>
                    {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
                </div>
            </div>

        </div>  );
    }
}
 
export default About;