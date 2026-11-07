
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
      name: 'داشبورد',
      link: '/dashboard-1/',
      icon: <BsHouseDoor />
    },
    {
      id: 2,
      name: 'نمودارها',
      link: '/charts',
      icon: <BsBarChart />
    },
    {
      id: 3,
      name: 'سفارش‌ها',
      link: '/orders',
      icon: <BsBasket2 />
    },
    {
      id: 4,
      name: 'مشتریان',
      link: '/customers',
      icon: <BsPeople />
    },
    {
      id: 5,
      name: 'محصولات',
      link: '/products',
      icon: <BsBox />
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <ul className='flex flex-col gap-7'>
      {data.map((item, index) => {
        const Tag = item.id === 1 ? 'a' : Link;

        return (
          <Tag
            href={item.link}
            key={item.id}
            onClick={() => { setSelected(index) }}
            className={`py-2 ${index === selected ? 'bg-red-400 rounded-r-xl' : ''}`}
          >
            <li className='flex gap-4 items-center px-5'>
              <span className='text-xl'>
                {item.icon}
              </span>
              <span>
                {item.name}
              </span>
            </li>
          </Tag>
        )
      })}
    </ul>
  )
}

export default Links
