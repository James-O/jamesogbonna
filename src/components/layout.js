import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from "react-router-dom"

function Header() {
  return (
    <div className='sticky-top' style={{background:"#fff"}}>
    {/* <div className='sticky-top' style={{background:"#F1F1F1"}}> */}
        <Navbar expand="lg" className="shadow" style={{height:"60px"}}>
        <Container>
            <Navbar.Brand href="/" className='text-black-50'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/portfolio" className='text-black-50'>Portfolio</Nav.Link>
                <Nav.Link href="/certification" className='text-black-50'>Certifications</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default Header;