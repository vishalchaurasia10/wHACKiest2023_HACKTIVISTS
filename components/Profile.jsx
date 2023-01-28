import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Profile = () => {
    return (
        <div className='p-4 -mt-8 pl-10'>
            <h2 className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Profile</h2>
            <div className='horizontalRule h-[0.1rem] relative my-2 w-[30%] bg-[#FE538D]'></div>
            <FontAwesomeIcon className='h-24 my-5 text-center w-24' icon={faUserCircle} />
            <p className='text-lg font-nunito text-left font-medium'><strong>Vishal Chaurasia</strong></p>
            <p className='text-lg font-nunito text-left font-medium'><strong>Email</strong> : xyz@gmail.com</p>
            <p className='text-lg font-nunito text-left font-medium'><strong>Joined </strong>: 28th January, 2023</p>
            <div className="bio flex-col">
                <p className='text-lg font-nunito font-medium text-left'><strong>Bio</strong> : </p>
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ab perferendis !</p>
            </div>
        </div>
    )
}

export default Profile
