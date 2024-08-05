import React from 'react'
import SidebarLinear from '../components/home/sidebar'
import Aboutme from '../components/home/aboutme'
import Header from '../components/layout'
import Services from '../components/home/services'
import Works from '../components/home/works'

export default function Home() {
  return (
    <div className='#' style={{background:"#2F3645"}}>
        {/* 2F3645 */}
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
                <SidebarLinear/>
            </div>
            <div className='col-lg-9 col-md-9 col-sm-12'>
                <div className=''>
                  <Header/>
                  <Aboutme/>
                  <Services/>
                  <Works/>
                </div>
            </div>
        </div>
    </div>
  )
}
