import React from 'react';
import {Navbar,FormControl,Nav,Button, Form, NavDropdown} from 'react-bootstrap';

function NavControl() {

    return (

<Navbar collapseOnSelect expand="md" className='navbar-dark sticky-top' variant="dark">
  <div className='container'>
  <Navbar.Brand href="#home">Bhaskar Maity</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Skills</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Nav.Link href="#pricing">Catch me</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </div>
</Navbar>

    )
}

export default NavControl;