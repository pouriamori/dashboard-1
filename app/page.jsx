"use client"

import CostsCard from '@/components/CostsCard'
import InventoryCard from '@/components/InventoryCard'
import SalesCard from '@/components/SalesCard'
import LatestOrders from '@/components/LatestOrders'
import { animationTwo, transition } from '../animations/index'
import { motion } from 'framer-motion'


export default function Home() {
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
          <div className="row">
            <SalesCard />
            <InventoryCard />
            <CostsCard />
            <LatestOrders />
          </div>
        </section>
      </motion.section>
    </>
  )
}
