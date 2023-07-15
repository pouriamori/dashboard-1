"use client"

import React from 'react'
import Link from 'next/link'
import {
  BsChatRightDotsFill,
  BsPeopleFill,
  BsFillChatDotsFill,
  BsHouseDoor,
  BsBarChart,
  BsBasket2,
  BsPeople,
  BsBox,
} from "react-icons/bs"

import { useState } from 'react'




const Links = () => {

  const data = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/',
      icon: <BsHouseDoor />
    },
    {
      id: 2,
      name: 'Charts',
      link: '/charts',
      icon: <BsBarChart />
    },
    {
      id: 3,
      name: 'Orders',
      link: '/orders',
      icon: <BsBasket2 />
    },
    {
      id: 4,
      name: 'Customers',
      link: '/customers',
      icon: <BsPeople />
    },
    {
      id: 5,
      name: 'Products',
      link: '/products',
      icon: <BsBox />
    },
  ];

  const [selected, setSelected] = useState(0);


  return (
    <ul className='flex flex-col gap-7'>
      {data.map((item, index) => {
        return (
          <Link href={item.link} key={item.id}
            onClick={() => { setSelected(index) }}
            className={`py-2 ${index === selected ? 'bg-red-400 rounded-r-xl' : ''}`}>
            <li className='flex gap-4 items-center px-5'>
              <span className='text-xl'>
                {item.icon}
              </span>
              <span>
                {item.name}
              </span>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default Links