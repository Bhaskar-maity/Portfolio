import React from 'react';
import {Navbar,FormControl,Nav,Button, Form} from 'react-bootstrap';

function NavControl() {

    return (
    <>
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Bhaskar Maity</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Nav.Link href="#pricing">Catch me</Nav.Link>
      </Nav>
      
    </Navbar>
    </>
    )
}

export default NavControl;