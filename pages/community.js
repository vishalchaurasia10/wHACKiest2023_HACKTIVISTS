import Posts from '@/components/Posts'
import Profile from '@/components/Profile'
import Trending from '@/components/Trending'
import React from 'react'

const community = () => {
  return (
    <div className='flex pt-16 bg-cover bg-center w-full '>
      <div className="section1 order-1  flex-col w-[25rem] justify-center backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 items-center">
        <Trending/>
      </div>
      <div className="section2 order-2 w-1/2 section1 border-r border-l flex-col justify-center  text-[#392E33] items-center">
        <Posts/>
      </div>
      <div className="section3 h-screen fixed top-24 right-0 order-3 w-[22.5%]  flex-col backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25">
        <Profile/>
      </div>
    </div>
  )
}

export default community
