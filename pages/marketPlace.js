import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const marketPlace = () => {
  return (
    <div className='flex h-screen w-full bg-cover bg-center bg-[url("/home_background.svg")] space-x-10 justify-center items-center p-36'>
      <div className="resources hover:scale-105 transition-all duration-300 flex-col w-[25rem] justify-center border backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl items-center">
        <Image className='h-64 my-3 mx-auto w-48' src='/resources.png' width={500} height={500} alt='resources' />
        <div className="text px-8 py-4 pb-6">
          <h3 className='font-Poppins my-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>
            <Link href='https://drive.google.com/drive/folders/1mFlOpbEZtPzlo5XkvQt6D91QiexVxl_0'>
              Resources</Link>
            </h3>
          <p>
            Expand your knowledge with #Brand, connect with like-minded people, access resources, share and buy/rent at unbeatable prices. Join now and start learning today!
          </p>
          <button className='py-2 mt-8 w-1/4 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Begin</button>
        </div>
      </div>
      <div className="community hover:scale-105 transition-all duration-300 flex-col w-[25rem] justify-center border backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl items-center">
        <Image className='h-64 my-3 mx-auto w-48' src='/community.jpg' width={500} height={500} alt='resources' />
        <div className="text px-8 py-3 pb-7">
          <h3 className='font-Poppins my-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Community</h3>
          <p>
            Get extra help for any subject with GS, a student-driven community of experts. Ask questions, get answers, and access resources for faster and easier understanding.
          </p>
          <Link href='/community'>
            <button className='py-2 mt-8 w-1/4 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Begin</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default marketPlace
