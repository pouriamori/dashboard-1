"use client"

import {
  BsCreditCard
} from "react-icons/bs"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { statsData } from "@/data"

const InventoryCard = () => {



  return (
    <div className="col-md-4 p-3">
      <div className='pink-gradient p-3 rounded-xl text-white flex gap-4 justify-between trans-all scaleup-05'>
        <div className='flex flex-col justify-between'>
          <p>
            <BsCreditCard className="text-2xl" />
          </p>
          <p className='text-xl py-3'>
            124,000
          </p>
          <p className='text-sm'>
            In the last 24 hours
          </p>
        </div>
        <div className='flex flex-col justify-between items-end'>
          <CircularProgressbar
            value={statsData[1].barValue}
            text={`${statsData[1].barValue}%`}
          />
          <p className='text-2xl text-center mt-4'>
            {statsData[1].title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default InventoryCard