import React from 'react'
import { Github, Linkedin } from '../../icon/icon'
import { Download } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Contactinfo() {
  return (
    <div>
        <div className='row text-white my-5 me-3'>
            <div className='col-sm-12 col-md-8 col-lg-4 mb-4'>
                <div className='shadow w-100 h-100 p-3 bg-black'>
                    <p>Country: Nigeria</p>
                    <p>City: Lagos</p>
                </div>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-4 mb-4'>
                <div className='shadow w-100 h-100 p-3 bg-black'>
                    <p>Email: ogbonnasunday42@gmail.com</p>
                    <p>Phone: +2348138304029</p>
                    <p>Resume: view resume 
                        <Link to={'https://drive.google.com/file/d/1U-jKZ3nPpcR4k_dk2KBPh87_DE7aHqjv/view?usp=drive_link'} className='text-white'>
                        <Download/></Link>
                    </p>
                </div>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-4 mb-4'>
                <div className='shadow w-100 h-100 p-3 bg-black'>
                    <p>Linkedin <Linkedin/></p>
                    <p>Github <Github/></p>
                </div>
            </div>
        </div>
    </div>
  )
}
