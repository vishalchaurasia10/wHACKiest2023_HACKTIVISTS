import { faPause, faPlay, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(1500) // initial value of 1500 seconds (25 minutes)
    const [isRunning, setIsRunning] = useState(false) // keeps track of whether the timer is currently running

    useEffect(() => {
        let intervalId
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [isRunning, seconds])

    const handleStart = () => {
        setIsRunning(true)
        document.getElementById('mainbody').classList.remove('bg-[url("/home_background4.svg")]')
        document.getElementById('mainbody').classList.add('bg-[url("/home_background.svg")]')
    }

    const handlePause = () => {
        setIsRunning(false)
        document.getElementById('mainbody').classList.remove('bg-[url("/home_background.svg")]')
        document.getElementById('mainbody').classList.add('bg-[url("/home_background4.svg")]')
    }

    const handleReset = () => {
        setSeconds(1500)
        setIsRunning(false)
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return (
        <div id='mainbody' className='flex bg-[url("/home_background.svg")] bg-cover bg-center  h-screen w-full justify-center items-center'>
            <div className='backdrop-blur-md px-36 py-12 bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl flex flex-col space-y-12  m-1 p-1 items-center'>
                <div className='text-8xl font-nunito '>
                    {minutes.toString().padStart(2, '0')}:{remainingSeconds.toString().padStart(2, '0')}
                </div>
                <div className='horizontalRule mx-auto h-[0.1rem] relative w-[70%] bg-[#FE538D]'></div>
                <div className='flex space-x-8'>
                    {isRunning ? (
                        <button onClick={handlePause}><FontAwesomeIcon className='w-8 h-8 bg-gradient-to-r from-[rgba(249,131,255,1)] to-[rgba(253,189,85,1)] rounded-full p-6 text-white' icon={faPause} /></button>
                    ) : (
                        <button onClick={handleStart}><FontAwesomeIcon className='w-8 h-8 bg-gradient-to-r from-[rgba(253,189,85,1)] to-[rgba(249,131,255,1)] rounded-full p-6 text-white' icon={faPlay} /></button>
                    )}
                    <button onClick={handleReset}><FontAwesomeIcon className='w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-6 text-white' icon={faRefresh} /></button>
                </div>
            </div>
        </div>
    )
}

export default Timer





