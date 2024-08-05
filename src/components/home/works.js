import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Works() {
    useEffect(()=>{
        Aos.init({
            duration:1000,
            delay:50
        });
    },[])
  return (
    <div>
        <h1 className='text-white-50 ms-2 my-5'>My Works</h1>
        <div className='row text-white'>
            <Link to={'https://portfolio-five-jade-76.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/portfolioOne.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Portfolio project</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://advertise-project.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/advertise.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Product advert project</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://travel-reservation-azure.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/travel.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Travel reservation website</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
        {/* </div>
        <div className='row text-white'> */}
            <Link to={'https://iriri.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/iriri.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Render software services</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://connectize-drab.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/conectize.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Bridging the gap in oil and gas</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://javascript-quiz-app-zeta.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/jsquizapp.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>JavaScript quiz app</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://jamy-java-script-calculator.netlify.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/calculator.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>For basic mathematical calculations</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://my-ecom-onlineshop.netlify.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/ecom.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Get quality and reliable products online</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://personal-portfoliowebs.netlify.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/portfolioThree.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>personal portfolio</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://skooleeo.netlify.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/onebunner.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Portfolio project</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://codepen.io/Ogbonna-James/full/zYBRgKj'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/survey.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Tave a survey to improve project</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
            <Link to={'https://travel-reservation-azure.vercel.app/'} className='col-sm-6 col-md-4 col-lg-4 mb-4 shadow project-image' data-aos="zoom-in">
                <img src='images/travel.PNG' alt='#' className='w-100 h-75'/>
                <p className='overlay'>Travel reservation website</p>
                <p className='bg-black text-white p-4'></p>
            </Link>
        </div>
    </div>
  )
}
