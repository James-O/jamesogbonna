import { Email, Message, Person } from '@mui/icons-material'
import React from 'react'

export default function Contactform() {
  return (
    <div className='mb-5 me-4' id='getInTouch'>
        <form className='text-white p-5 shadow bg-black'>
            <h3>Get in touch</h3>
            <div className='d-flex gap-3 bg-dark p-2 text-white mt-4'><Person className='ms-2 mt-1'/>Name<input type='text' className='form-control bg-dark rounded-0 border-0 text-white' placeholder='Name'/></div>
            <div className='d-flex gap-3 bg-dark p-2 my-4'><Email className='ms-2 mt-1'/>Email<input type='text' className='form-control bg-dark rounded-0 border-0 text-white' placeholder='Name'/></div>
            <div className='d-flex gap-3 bg-dark p-2'><Message className='ms-2 mt-3'/><span className='mt-2'>Message</span><textarea className='form-control bg-dark text-white rounded-0 border-0' placeholder='Name'></textarea></div>
            <button className='btn btn-warning mt-5 rounded-0'>SEND MESSAGE</button>
        </form>
    </div>
  )
}
