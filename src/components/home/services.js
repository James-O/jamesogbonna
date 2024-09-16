import React from 'react'

export default function Services() {
  return (
    <div className='me-4'>
        <h1 className='ms-2 text-white-50 mt-5'>My Services</h1>
        <div className='row mt-5'>
            <div className='col-sm-12 col-md-6 col-lg-3 text-black-50 shadow mb-4'>
                <div className='p-4 h-100' style={{background:"#F1F1F1"}}>
                    <h6 className='my-3 text-center' style={{color:"orangered"}}>Web development</h6>
                    <p>I am a professional web designer who is responsible for building and maintaining web applications. I work with the development team, UX/UI designers and graphic designers, to deliver consistent and reliable web experience.</p>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 text-black-50 shadow mb-4'>
                <div className='p-4 h-100' style={{background:"#F1F1F1"}}>
                    <h6 className='my-3 text-center' style={{color:"orangered"}}>Frontend development</h6>
                    <p>A front-end developer with experience in creating and implementing the visual and interactive elements of a website. I collaborates with designers and backend developers to create rubost applications. I am experienced in debugging and maintaining web applications.
                    </p>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 text-black-50 shadow mb-4'>
                <div className='p-4 h-100' style={{background:"#F1F1F1"}}>
                    <h6 className='my-3 text-center' style={{color:"orangered"}}>Backend development</h6>
                    <p>
                    I am an experienced back-end developer with a strong background in server-side programming, database management, and API integration. I work closely with front-end developers to ensure seamless integration and optimal performance of web applications.</p>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3 text-black-50 shadow mb-4'>
                <div className='p-4 h-100' style={{background:"#F1F1F1"}}>
                    <h6 className='my-3 text-center' style={{color:"orangered"}}>Graphics Design</h6>
                    <p>I am a talented graphic designer who have experience in creating visually appealing designs for various media, including websites, and social media. I am proficient in Corel draw, photoshop and canvas. I have excellent communication and time management skills.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
