import React from 'react'
import {
  BsPersonCircle, BsBellFill, BsFillChatDotsFill
} from "react-icons/bs"


const Navbar = () => {

  return (
    <div className='flex gap-12 items-center'>
      <div className='flex gap-4 items-center'>
        <div>
          <BsPersonCircle className='text-3xl text-gray-800' />
        </div>
        <div className='text-center'>
          <p>
            Pouria morovati
          </p>
          <p className='text-sm'>
            Admin
          </p>
        </div>
      </div>
      <div className='pos-rel'>
        <BsFillChatDotsFill className='text-3xl text-gray-400 scaleup-10 trans-all pointer' />
        <span className='text-red-500 font-bold nav-icon-count'>3</span>
      </div>
      <div className='pos-rel'>
        <BsBellFill className='text-3xl text-gray-400 scaleup-10 trans-all pointer' />
        <span className='text-red-500 font-bold nav-icon-count'>7</span>
      </div>
    </div>
  )
}

export default Navbar