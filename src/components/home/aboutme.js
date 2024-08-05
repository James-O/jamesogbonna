import React from 'react'

export default function Aboutme() {
  return (
    <div className='me-4 rounded'>
      {/* <div style={{
        backgroundImage: "url(" + "images/city.webp" + ")",
        opacity:"100%",backgroundSize:"cover"}} className='p-5 mt-3 container'> */}
      <div className='w-100'>
        <img src='images/city.webp' alt='city' className='w-100' style={{height:"400px"}}/>
      </div>
      <div style={{marginTop:"-17rem"}} className='ms-5'>
        <div className='d-flex' style={{opacity:"100%"}}>
          <div>
            <h1 style={{color:"orangered"}}>Discover my Amazing<br/> Art Space!</h1>
            <div>
              <h3 className='text-white mt-2'>
                <span className='text-warning'>&lt;code&gt;</span> 
                  I build web applications
                <span className='text-warning'>&lt;code&gt;</span>
              </h3>
            </div>
            <button className='btn btn-warning mt-4'>Contact me</button>
          </div>
          <img src='images/Jamespicsnobg.png' alt='Pic' className='w-25 mx-auto rounded-pill'/>
        </div>
      </div>
    </div>
  )
}

