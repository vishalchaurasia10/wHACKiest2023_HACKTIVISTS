import React from 'react'
import Image from 'next/image'

const Glance = () => {
    return (
        <div>
            <h1 className='text-5xl text-[#392E33] py-12 pb-2 text-center font-Poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Let Us Show You What We Can Do.</h1>

            <div className='horizontalRule mx-auto h-[0.1rem] relative my-8 w-[30%] bg-[#FE538D]'></div>

            <div className="description space-x-12 mx-56 flex justify-center items-center">
                <div>
                    <div className="text text-[#392E33] text-lg font-Poppins font-medium">
                        Unlock the power of group study with our platform.
                        Find study materials and connect with like-minded peers.
                        Get motivated for success and learn smarter and faster with the help of others.
                        Join us now to achieve your academic goals.
                    </div>
                    <button className='py-2 mt-8 w-1/4 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Begin</button>
                </div>
                <Image src='/groupstudy.jpg' width={500} height={500} alt='card_image' />
            </div>

            <div className='horizontalRule mx-auto h-[0.1rem] relative my-8 w-[30%] bg-[#FE538D]'></div>

            <div className="description space-x-12 mx-56 flex justify-center items-center">
                <Image src='/selfstudy.svg' width={500} height={500} alt='card_image' />
                <div>
                    <div className="text text-[#392E33] text-lg font-Poppins font-medium">
                        Take control of your study time with self study! Our platform helps you stay motivated, organized with custom clocks, track progress and unlock rewards, while making progress towards your goals. Join us now and make the most of your study time!
                    </div>
                    <button className='py-2 mt-8 w-1/4 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-3 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Begin</button>
                </div>
            </div>

            <div className='horizontalRule mx-auto h-[0.1rem] relative my-8 w-[30%] bg-[#FE538D]'></div>

            <div className="description space-x-12 mx-56 flex justify-center items-center">
                <div>
                    <div className="text text-[#392E33] text-lg font-Poppins font-medium">
                        Expand your knowledge with #Brand, the ultimate platform to connect with like-minded people. Access free resources, share your own, rent/purchase at unbeatable prices. Join now and start learning today!
                    </div>
                    <button className='py-2 mt-8 w-1/4 mx-auto hover:-translate-y-[0.1rem] text-white  bg-[#FE538D] duration-150 font-nunito font-semibold border rounded-md px-2 shadow-[#FE538D] border-[rgba(255,255,255,0.1)]'>Begin</button>
                </div>
                <Image className='w-[25rem] h-[25rem]' src='/resources.jpg' width={500} height={500} alt='card_image' />
            </div>
        </div>
    )
}

export default Glance
