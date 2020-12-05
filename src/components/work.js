import React, { Component } from 'react';
import Project from './projects';


class Work extends Component {
    state = {  }
    render() { 
        return (
        <div className='container'>
            <h1 className='heading'> Work. </h1>
            
                    <div className='work-content '>
                            
                         <Project/>
                            
                    </div>

        </div>  );
    }
}
 
export default Work;