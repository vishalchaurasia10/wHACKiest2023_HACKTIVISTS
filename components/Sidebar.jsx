import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebar = (props) => {
  return (
    <div>
      <div className={`flex-col w-8 ${props.expand ? 'scale-100' : 'scale-0'} transition-all duration-500 space-y-4 h-[32rem] mr-4`}>
        <FontAwesomeIcon className='h-6 w-6 text-[#392E33]' icon={faUserCircle}/>
        <FontAwesomeIcon className='h-6 w-6 text-[#392E33]' icon={faUserCircle}/>
        <FontAwesomeIcon className='h-6 w-6 text-[#392E33]' icon={faUserCircle}/>
        <FontAwesomeIcon className='h-6 w-6 text-[#392E33]' icon={faUserCircle}/>
      </div>
    </div>
  )
}

export default Sidebar
