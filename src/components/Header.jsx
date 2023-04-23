import React from 'react'
import { MdMenu } from 'react-icons/md'

export const Header = () => {
    return (
        <header>
            <ul className='flex items-center justify-between py-8 px-6 lg:px-24 xl:px-36'>
                <li>
                    <div className='flex items-center gap-7'>
                        <img src="/images/logo.svg" alt="logo" />
                        <div className='hidden lg:flex lg:gap-7'>
                            <span className='text-grayishViolet font-bold hover:text-black cursor-pointer'>Features</span>
                            <span className='text-grayishViolet font-bold hover:text-black cursor-pointer'>Pricing</span>
                            <span className='text-grayishViolet font-bold hover:text-black cursor-pointer'>Resources</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex items-center gap-5' >
                        <MdMenu className='lg:hidden' size={34} />
                        <div className='hidden lg:flex lg:gap-5 items-center'>
                            <span className='text-grayishViolet font-bold hover:text-black cursor-pointer'>Login</span>
                            <button className='px-6 bg-cyanApp py-2 rounded-full text-white'>Sign up</button>
                        </div>
                    </div>
                </li>

            </ul>
        </header>
    )
}
