import React from 'react'
import { Check } from '../../icon/icon'
import {Sidebar,Nav,NavItem} from "@asphalt-react/sidebar";
  
  
const SidebarLinear = () => {
    return (
      <div className="mb-2 sticky-top">
        <Sidebar >
          <div className='rounded' style={{background:"#2F3645",padding:"4rem",color:"#ffffff"}}>
            <Nav>
            <NavItem>
                <img src='images/Jamespicsnobg.png' className='w-75 rounded-pill ms-4' alt='profile'/>
            </NavItem>
            <NavItem>
                <h4 style={{color:'orangered'}}>Ogbonna James</h4>
            </NavItem>
            <NavItem>
                <p>Fullstack Developer</p>
            </NavItem>
            <NavItem>
              <hr/>
             <div className='d-flex bg-success p-2 text-white bg-opacity-50'>
                <h6>Location:</h6>
                <p className='ms-auto'>Lagos, Nigeria</p>
             </div>
             <hr/>
            </NavItem>
            <NavItem>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='text-warning'><Check/></div>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </NavItem>
          </Nav>
          </div>
        </Sidebar>
        </div>   
  );
};
export default SidebarLinear;
