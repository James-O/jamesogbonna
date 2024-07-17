import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from "react-router-dom"

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="shadow">
        <Container>
            <Navbar.Brand href="/" className='text-white'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/portfolio" className='text-white'>Portfolio</Nav.Link>
                <Nav.Link href="/certification" className='text-white'>Certifications</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default Header;