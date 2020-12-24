import  skillData  from "../mydata";
import React, { Component }  from 'react';

const Skills = () => {
  
  return (
    <section id="skills" className=''>
      <div className="container text-center">
        <h2>Skills</h2>
        <hr class="ribbon"/>
        <hr class="ribbon-little"/>
        <div className="row row-cols-3">
          {skillData.skills.map((skill) => {
            return (
              <figure className="col" key={skill.id}>
                {skill.skill}
                <figcaption>{skill.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
