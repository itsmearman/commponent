import React from 'react'
import Image from 'next/image'
import Bg from '@/app/bg.png'
export default function UnderHeader() {
    return (
        // <div className='h-[35rem] w-full bg-gray-100 justify-center content-center flex flex-col'>
        <div className='h-[35rem] w-full bg-gray-100 justify-center flex flex-col md:flex-row'>
            <Image src={Bg} alt='' className='h-[40%] w-[90%] md:h-[25rem] mx-auto md:mx-0 my-auto rounded-md md:w-[40rem]' />
            <div className='h-auto w-[80%] mt-[-25%] md:my-auto rounded-md bg-white mx-auto md:mx-0 md:-ml-[5rem] md:w-[30rem] border-b-4 md:border-b-0 md:border-r-4 border-yellow-500 '>
                <p className='font-bold mt-3 p-3'>Silo construction and sucker assembly steps</p>
                <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            {/* <Image src={Bg} alt='' className='h-[25rem] rounded-md w-[40rem] -mt-[5rem]  -translate-x-[8rem] mx-auto' />
            <div className='h-[19rem] rounded-md bg-white w-[30rem] -mt-[21rem] translate-x-[15rem] mx-auto border-r-4 border-yellow-500 '>
                <p className='font-bold mt-3 p-3'>Silo construction and sucker assembly steps</p>
                <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
        </div>
    )
}
