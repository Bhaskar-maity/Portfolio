import React, { Component } from 'react';
import project1 from '../images/marketing1.png';
import project2 from '../images/marketing2.png';
import project3 from '../images/marketing3.png';
import {Card, Button} from 'react-bootstrap';


class Project extends Component {
    
    render() { 
        return ( 

            

            <div className='container align-items-center'>
                <div className='row'>

                    <div className='col-md-4  '>
                        <Card style={{ width: '16rem',border: '0' }}>
                            <Card.Img variant="top" src={project1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </ div>

                
                    
                    <div className='col-md-4  '>
                        <Card style={{ width: '16rem',border: '0' }}>
                            <Card.Img variant="top" src={project1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </ div>

                    <div className='col-md-4  '>
                        <Card style={{ width: '16rem',border: '0' }}>
                            <Card.Img variant="top" src={project1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </ div>

                </div>
                
                <Button className='justify-content-center'> See More...</Button>
                
            </div>
        )
            
    }
}
 
export default Project;