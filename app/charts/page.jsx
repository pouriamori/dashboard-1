"use client"


import BarChart from "@/components/BarChart"
import { statsData } from "@/data"
import { animationTwo, transition } from '../../animations/index'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <>
      <motion.section
        variants={animationTwo}
        initial='in'
        animate='out'
        exit='in'
        transition={transition}
      >
        <section>
          <div className="row trans-all">
            <div className="col-md-12 p-4">
              <BarChart chartData={statsData[0].chartData} />
            </div>
            <div className="col-md-6 p-4">
              <BarChart chartData={statsData[1].chartData} />
            </div>
            <div className="col-md-6 p-4">
              <BarChart chartData={statsData[2].chartData} />
            </div>
          </div>
        </section>
      </motion.section>
    </>
  )
}