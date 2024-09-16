import React from 'react'
import SidebarLinear from '../components/home/sidebar'
import Header from '../components/layout'
import Contactinfo from '../components/home/contactinfo'
import Contactform from '../components/home/contactform'
import Certifications from '../components/certifications/certifications'

function Certificate() {
  return (
    <div className='#' style={{background:"#2F3645"}}>
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
                <SidebarLinear/>
            </div>
            <div className='col-lg-9 col-md-9 col-sm-12'>
                <div className=''>
                  <Header/>
                  {/* certificates here */}
                  <Certifications/>
                  <Contactinfo/>
                  <Contactform/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate