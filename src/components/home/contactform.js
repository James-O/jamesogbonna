import { Email, Message, Person } from '@mui/icons-material'
import React from 'react'

export default function Contactform() {
  return (
    <div>
        <form className='text-white p-5 shadow'>
            <h3>Get in touch</h3>
            <div className='d-flex gap-3 bg-dark p-2 text-white mt-4'><Person className='ms-2 mt-1'/><input type='text' className='form-control bg-dark rounded-0 border-0 text-white' placeholder='Name'/></div>
            <div className='d-flex gap-3 bg-dark p-2 my-4'><Email className='ms-2 mt-1'/><input type='text' className='form-control bg-dark rounded-0 border-0 text-white' placeholder='Name'/></div>
            <div className='d-flex gap-3 bg-dark p-2'><Message className='ms-2 mt-3'/><textarea className='form-control bg-dark text-white rounded-0 border-0' placeholder='Name'></textarea></div>
            <button className='btn btn-warning mt-5 rounded-0'>SEND MESSAGE</button>
        </form>
    </div>
  )
}
