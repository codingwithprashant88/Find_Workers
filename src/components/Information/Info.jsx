import React from 'react'
import SecondCarousel from '../Carousel/SecondCarousel'

function Info() {
  return (
   <section className=" w-screen relative left-1/2 right-1/2  -ml-[50vw] -mr-[50vw]  -mt-[80px] sm:-mt-[610px] md:-mt-[140px] lg:-mt-[150px] py-10">
  <div className="bg-pink-700 p-10 ">
    <h2 className="text-white font-bold text-xl">
      Like trees reaching for the sky, great buildings grow from deep roots and careful hands.
    </h2>
  </div>
  <SecondCarousel/>
</section>

  )
}

export default Info