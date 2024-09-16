import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from "react-router-dom"

function Header() {
  return (
    // <div className='sticky-top' style={{background:"#2F3645"}}>
      <div className='sticky-top' style={{background:"#F1F1F1"}}>
        <Navbar expand="lg" className="shadow-lg" style={{height:"60px"}}>
        <Container className=''>
            <Navbar.Brand href="/" className='text-black-50 fw-bold'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/portfolio" className='text-black-50 fw-bold'>Portfolio</Nav.Link>
                <Nav.Link href="/certificate" className='text-black-50 fw-bold'>Certifications</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link href="#getInTouch" className='text-black-50 fw-bold'>Get In Touch</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default Header;