import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Chat = () => {
    const [expand, setExpand] = useState(false)
    const expandChat = () => {
        setExpand(true)
    }
    return (
        <>
        <Sidebar expand={expand} />
            <div className='w-1/2 h-full mt-48 mr-20'>
                <div className={`messageContainer ${expand ? 'scale-100' : "scale-0"} transition-all duration-500 overflow-auto mr-8 h-3/4 w-full bg-gradient-to-r from-[#f87171] to-[#7c3aed] px-4 py-12 bg-[rgba(255,255,255)] text-[#392E33]  rounded-xl shadow-xl flex flex-col space-y-12  m-1 `}>
                    <div className={`message ${expand ? 'scale-100' : "scale-0"} transition-all duration-700`}>
                        <div className='backdrop-blur-md float-left clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-right clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-left clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-right clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-left clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-right clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-left clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-right clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-left clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>
                        <div className='backdrop-blur-md float-right clear-both bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex  items-center space-x-4 my-4 py-4 px-4'>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-slate-500 text-lg' icon={faUserCircle} />
                            </div>
                            <div className='text'>hey there i am using whatsapp!</div>
                        </div>

                    </div>
                </div>
                <div className="form my-2 flex justify-center items-center">
                    <input className='backdrop-blur-md h-12 px-4 w-full outline-none bg-slate-500 text-[#392E33] bg-opacity-25 rounded-xl shadow-xl  m-1 items-center' placeholder='Start typing...' type="text" />
                    <FontAwesomeIcon onClick={expandChat} className='text-green-400 backdrop-blur-md px-4 h-11 hover:text-green-500 hover:bg-slate-500 transition-all duration-500 bg-slate-500 w-4 bg-opacity-25 rounded-xl shadow-xl  m-1 items-center' icon={faPaperPlane} />
                </div>
            </div>
        </>
    )
}

export default Chat
