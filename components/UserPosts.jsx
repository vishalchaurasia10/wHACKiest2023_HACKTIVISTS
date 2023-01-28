import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComment, faLink, faShare, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UserPosts = () => {
    return (
        <div className='my-4 border-b py-4'>
            <div className="name flex items-center space-x-4">
                <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-[#392E33]" />
                <h3 className='text-lg font-nunito font-medium'>Vishal Chaurasia</h3>
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faGithub} />
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faTwitter} />
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faLinkedinIn} />
            </div>
            <div className="content flex-col my-4 p-4 px-5 border backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl ">
                <h1 className='font-bold font-nunito text-lg'>Title</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda quaerat cupiditate voluptate. Delectus atque mollitia voluptates harum aspernatur perferendis repellendus, repudiandae officiis inventore cupiditate reprehenderit minus? Soluta, neque fugiat.
            </div>
            <div className="comments flex space-x-4 items-center">
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faComment}/>
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faShare}/>
                <FontAwesomeIcon className='bg-gray-300 p-1 text-black hover:scale-105 transition-all duration-150 rounded-lg' icon={faLink}/>
            </div>
        </div>
    )
}

export default UserPosts
