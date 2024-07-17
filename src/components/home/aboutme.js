import React from 'react'

export default function Aboutme() {
  return (
    <div className='me-4 rounded'>
      <div style={{
        backgroundImage: "url(" + "images/mountain4.jpeg" + ")",
        opacity:"70%",backgroundSize:"cover"}} className='p-5 mt-3 container'>
          {/*  */}
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


 // style={{  
    //   backgroundImage: "url(" + "images/lag2.jpeg" + ")",
    // }}
    // <div>
    //         <h3 className='text-white mt-2'><span className='text-warning'>&lt;code&gt;</span> I build <span className='txt-rotate' data-period="2000" data-rotate="['web applications','web interface','design mocups']">
    //           <span className='wrap'></span>web applications</span> 
    //           <span className='text-warning'>&lt;code&gt;</span></h3>
    //       </div>
