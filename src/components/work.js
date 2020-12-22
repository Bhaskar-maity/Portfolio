import React, { Component } from 'react';
import Project from './projects';
import {Card,CardColumns, Button} from 'react-bootstrap';


import Fade from "react-reveal/Fade"

import data from "../mydata"

const Work = () => {
  return (
    <section id="projects" className=''>
    <div className="container">
      <h2>Projects</h2>
      <hr />
      
      <Fade bottom>
      <CardColumns>
        {data.projects.map((project) => {
          return (
            <Card key={project.id}>
              <Card.Img variant="top" src={project.imageSrc} />
              <Card.Body>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <Card.Title className="d-inline-block">
                      {project.title}
                    </Card.Title>
                  </a>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
      </Fade>
    </div>
  </section>
  )
}
 
export default Work;