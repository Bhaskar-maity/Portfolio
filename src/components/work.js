import React, { Component } from 'react';
import Project from './projects';
import data from '../mydata';

class Work extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <h1 className='heading'> </h1>
            <h1>Work.</h1>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='work-content col-md-6'>
                            {data.projects.map((project)=>(
                                <Project key={project.id}
                                        title = {project.title}
                                        service = {project.service}
                                        imageSrc = {project.imageSrc}
                                        url={project.url}
                                ></Project>
                            ))}
                    </div>
                </div>
            </div>
        </div>  );
    }
}
 
export default Work;