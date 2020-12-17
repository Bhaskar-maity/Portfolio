import React, { Component } from 'react';
import project1 from '../images/marketing1.png';
import project2 from '../images/marketing2.png';
import project3 from '../images/marketing3.png';


class Project extends Component {
    
    render() { 
        return ( 

            <div className='row align-items-start'>

                <div className='col-md-4  '>
                    <a href=''>
                        <img src={project1} alt='' className="img-fluid mt-3 mb-5"></img>
                        <h4>SVM image classification</h4>
                    <p>!</p>
                    </a>
                    
                </div>

                <div className='col-md-4  '>
                    <a href=''>
                        <img src={project2} alt='' className="img-fluid mt-3 mb-5"></img>
                        <h4>JavaScript Weather App</h4>
                    <p>!</p>
                    </a>
                    
                </div>
                <div className='col-md-4  '>
                    <a href=''>
                        <img src={project3} alt='' className="img-fluid mt-3 mb-5"></img>
                        <h4>SVM image classification</h4>
                    <p>!</p>
                    </a>
                    
                </div>

                
            </div>
        )
            
    }
}
 
export default Project;