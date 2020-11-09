import React from 'react';
import {Navbar,FormControl,Nav,Button, Form} from 'react-bootstrap';

function NavControl() {

    return (
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Bhaskar Maity</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Work</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      
    </Navbar>
    </>
    )
}

export default NavControl;