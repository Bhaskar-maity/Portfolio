import React, { Component } from 'react';
import Project from './projects';
import data from '../mydata';

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