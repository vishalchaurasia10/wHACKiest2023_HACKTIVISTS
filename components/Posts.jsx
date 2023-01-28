import React from 'react'
import UserPosts from './UserPosts'

const Posts = () => {
    return (
        <div className='px-3'>
            <h2 className='font-Poppins my-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f87171] to-[#7c3aed]'>Posts</h2>
            <div className='horizontalRule h-[0.1rem] relative my-2 mb-4 w-[15%] bg-[#FE538D]'></div>
            <div className="post">
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
                <UserPosts/>
            </div>
        </div>
    )
}

export default Posts
