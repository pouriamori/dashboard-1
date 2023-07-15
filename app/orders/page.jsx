"use client"

import LatestOrders from "@/components/LatestOrders"
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
          <LatestOrders />
        </section>
      </motion.section>
    </>
  )
}
