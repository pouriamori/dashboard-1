"use client"

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
          <h1 className="text-center text-3xl mt-16">
            Customer information
          </h1>
        </section>
      </motion.section>
    </>
  )
}