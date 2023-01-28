import React from 'react'
import Trends from './Trends'

const Trending = () => {
    return (
        <div className='pl-5'>
            <h2 className='font-Poppins text-left my-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>What&apos;s happening</h2>
            <div className='horizontalRule h-[0.1rem] relative my-4 w-[80%] bg-[#FE538D]'></div>
            <Trends/>
            <Trends/>
            <Trends/>
            <Trends/>
            <Trends/>
            <Trends/>
            <Trends/>
            <Trends/>
        </div>
    )
}

export default Trending
