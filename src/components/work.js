import React, { Component } from 'react';
import Project from './projects';


class Work extends Component {
    state = {  }
    render() { 
        return (
        <div className='container'>
            <h1 className='heading'> </h1>
            <h1>Work.</h1>
            <div >
                <div className='row'>
                    <div className='work-content '>
                            
                                <Project/>
                            
                    </div>
                </div>
            </div>
        </div>  );
    }
}
 
export default Work;