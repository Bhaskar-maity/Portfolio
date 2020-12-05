import React, { Component } from 'react';
import svm from '../images/SVMdigit.png';
import weather from '../images/Weather.jpg';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='row'>
                <div className='col-md-6 project '>
                    <a href=''>
                        <img src={svm} alt='' className="img-fluid"></img>
                    </a>
                    <h1></h1>
                    <button> <a href=''>check it </a> </button>
                </div>

                <div className='col-md-6 project '>
                    <a href=''>
                        <img src={weather} alt='' className="img-fluid"></img>
                    </a>
                    <h1></h1>
                    <button> <a href=''>check it </a> </button>
                </div>

                {/* <div className='col-md-6 project '>
                    <a href=''>
                        <img src={} alt=''></img>
                    </a>
                    <h1></h1>
                    <button> <a href=''>check it </a> </button>
                </div>

                <div className='col-md-6 project '>
                    <a href=''>
                        <img src={} alt=''></img>
                    </a>
                    <h1></h1>
                    <button> <a href=''>check it </a> </button>
                </div> */}
            </div>
        )
            
    }
}
 
export default Project;