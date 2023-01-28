import { faBackward, faForward, faMusic, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Music = () => {
  return (
    <div>
      <div className="player my-4 flex justify-between backdrop-blur-md px-36 py-12 bg-[rgba(255,255,255,0.1)] text-[#392E33] bg-opacity-25 rounded-xl shadow-xl  m-1 p-1 items-center">
        <FontAwesomeIcon className='w-6 h-6 ' icon={faBackward} />
        <FontAwesomeIcon className='w-6 h-6 ' icon={faPlay} />
        <FontAwesomeIcon className='w-6 h-6 ' icon={faForward} />
      </div>
        <FontAwesomeIcon className='w-6 h-6  ' icon={faMusic} />
    </div>
  )
}

export default Music
