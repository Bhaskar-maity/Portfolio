import React, { Component } from 'react';
import Project from './projects';


class Work extends Component {
    state = {  }
    render() { 
        return (
            <div className='work-content '>
                <div className='container '>
                    <h1 className='heading'> Work. </h1>
             
                        <Project/>
     
                </div>
            </div>  );
    }
}
 
export default Work;