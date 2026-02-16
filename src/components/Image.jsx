import React from 'react'

function Image() {
  return (
    <>
   <div className="relative flex justify-center md:justify-end">
  <img
    src="/image2.png"
    alt="Worker"
    className="w-3/4 sm:w-2/3 md:w-full lg:w-[70%] xl:w-[95%] h-auto object-contain"
  />
</div>

    </>
  )
}

export default Image