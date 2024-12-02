import React from 'react'
import Navbar from '@/Customer Comp/Navbar'
import Acc from '@/Customer Comp/Acc'
import MyCarousel from '@/Customer Comp/MyCarousel'
import ItemCard from '@/Customer Comp/ItemCard'
import Footer from '@/Customer Comp/Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <div className="flex justify-center items-center min-h-screen m-10">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-20">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home