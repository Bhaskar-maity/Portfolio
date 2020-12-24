import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

function NavControl() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar-dark sticky-top"
      variant="dark"
    >
      <div className="container">
        <Navbar.Brand href="#home">Bhaskar Maity</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          ><Nav.Link href="#home">Home</Nav.Link></Link>

          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          ><Nav.Link href="#about">About</Nav.Link></Link>

          <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          ><Nav.Link href="#skills">Skills</Nav.Link></Link>

          <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          ><Nav.Link href="#projects">Projects</Nav.Link></Link>

          <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          ><Nav.Link href="#contact">Catch me</Nav.Link></Link>

            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavControl;
