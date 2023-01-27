import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg bg-[url('/footer.svg')]">
                <div className="text-lg text-[#392E33] tracking-wide pt-8 pb-8 text-center font-Poppins font-extrabold bg-clip-text flex justify-center items-center">
                    <h2 className=''>Meet our
                        <span className='font-Poppins text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#f87171]'> Developers.</span>
                    </h2>
                </div>

                <div className="socials justify-between px-48 flex bg-black text-white py-14">
                    <div className='flex'>
                        <div className="socialicons flex flex-col space-y-6 text-left">
                            <div className="name">Vishal Chaurasia</div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faTwitter} />
                                Twitter
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faLinkedin} />Linkendin
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faGithub} />
                                Github
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="socialicons flex flex-col space-y-6 text-left">
                            <div className="name">Animesh Manik</div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faTwitter} />
                                Twitter
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faLinkedin} />Linkendin
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faGithub} />
                                Github
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="socialicons flex flex-col space-y-6 text-left">
                            <div className="name">Vasuman Mishra</div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faTwitter} />
                                Twitter
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faLinkedin} />Linkendin
                            </div>
                            <div className='flex items-left text-white transition-all duration-300'>
                                <FontAwesomeIcon className='h-6 w-6 mr-2 text-[#ACB2BD] text-xl hover:text-white' icon={faGithub} />
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
