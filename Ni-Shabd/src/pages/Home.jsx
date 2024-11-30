import React from 'react'
import Navbar from '@/components/Navbar'
import Acc from '@/components/Acc'
import MyCarousel from '@/components/MyCarousel'
import ItemCard from '@/components/ItemCard'
import Footer from '@/components/Footer'


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