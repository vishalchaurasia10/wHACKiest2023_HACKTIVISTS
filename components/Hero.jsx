import React from 'react'
import Image from 'next/image'

const Hero = () => {

  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/home_background3.svg')]">
      <div className="hero flex flex-col lg:flex-row  justify-center items-center lg: bg-cover bg-center bg-no-repeat h-screen w-screen]">
        <div className="details text-[#392E33] lg:w-1/4 text-xl font-medium order-2 lg:order-1 p-4 tracking-wide pt-24 pb-8 lg:pb-1 lg:pt-12 font-Poppins bg-clip-text">
          <h1 className='font-Poppins py-8 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#e49595]'>Learn. Connect. Grow.</h1>
          Improve your 
          <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'> learning </span>&
          <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'> motivation </span>
          with our online study portal. Self-study & group study options available.
          <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'> Connect! </span> with learners worldwide & access resources.
        </div>
        <div className="image flex justify-center items-center space-x-6 py-2 lg:w-1/2 order-1 lg:order-2">
          <div className={`img1 shadow-2xl z-40`}>
            <Image className='rounded-xl shadow-2xl z-40 relative  h-28 w-36' src='/hero2.jpg' width={500} height={500} alt='hero image' />
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='img2 shadow-2xl z-40'>
              <Image className='rounded-xl relative h-72 w-96' src='/hero1.jfif' width={500} height={500} alt='hero image' />
            </div>
            <div className='img3 ml-4  w-max  shadow-2xl z-40'>
              <Image className='rounded-xl relative inline-block h-48 w-72' src='/hero3.jpg' width={500} height={500} alt='hero image' />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
