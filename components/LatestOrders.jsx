import React from 'react'
import { ordersData } from '@/data'




const LatestOrders = () => {
  return (
    <div className='bg-transparent-3 p-2 rounded-2xl'>
      <p className='mt-5 mb-3 text-2xl'>
        Latest orders
      </p>
      <div className="row p-3 rounded-2xl">

        <div className="col-3">
          Product
        </div>
        <div className="col-3">
          ID
        </div>
        <div className="col-3">
          Date
        </div>
        <div className="col-3">
          State
        </div>
        <hr className='w-75' />
      </div>
      {ordersData.map((item, index) => {
        return (
          <div className="row px-3 py-1">
            <div className="col-3">
              {item.product}
            </div>
            <div className="col-3">
              {item.id}
            </div>
            <div className="col-3">
              {item.date}
            </div>
            <div className="col-3">
              <div className={item.class}>
                {item.status}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LatestOrders