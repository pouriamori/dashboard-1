"use client"

import React from 'react'
import Link from 'next/link'
import {
  BsList
} from "react-icons/bs"





const MobileToggle = () => {

  return (
    <>
      <span className='md:hidden bg-gray-500 text-white text-3xl trans-all scaleup-10 mobiletoggle rounded-full p-2 pointer'>
        <BsList />
      </span>
    </>
  )
}

export default MobileToggle 