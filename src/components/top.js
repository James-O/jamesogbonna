import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from "react-router-dom"

export default function Top() {
  return (
    <div style={{background:"#F1F1F1"}}>
        <Navbar className="shadow" style={{width:"100rem"}}>
            <Navbar.Brand href="/" className='text-black-50'>Home</Navbar.Brand>
            <Nav>
                <Nav.Link href="/portfolio" className='text-black-50'>Portfolio</Nav.Link>
                <Nav.Link href="/certification" className='text-black-50'>Certifications</Nav.Link>
            </Nav>
            <Outlet/>
        </Navbar>
    </div>
  )
}
