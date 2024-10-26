"use client";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Urbanist } from 'next/font/google';
import Link from 'next/link';
import { FadeInFromTop } from './FadeInFromTop';
const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
});


const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    return (
        <div className={`${urbanist.className} z-50 fixed w-full`}>
            <FadeInFromTop>
                <div className={` bg-black  h-[100px]  p-2 flex w-full items-center justify-between`}>
                    <div className=' flex items-center justify-center h-full'>
                        <div>
                            <h1 className=' text-white text-3xl font-extrabold'>TEEKAY</h1>
                        </div>
                    </div>

                    <div className=' hidden md:flex items-center'>
                        <a href='/'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Home</li></a>
                        <a href='/about'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>About</li></a>
                        <a href='/gallery'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Shop</li></a>
                        <a href='/#contact'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Contact Us</li></a>
                    </div>

                    <div onClick={() => setIsDropdown(!isDropdown)} className=' md:hidden'>
                        {
                            isDropdown ? (<CloseOutlinedIcon className=' cursor-pointer text-white' />) : (<MenuOutlinedIcon className=' cursor-pointer text-white' />)
                        }
                    </div>
                </div>
                {
                    isDropdown && <div className=' bg-black border-b-[#023047] border-b'>
                        <ul >
                            <a href='/'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Home</li></a>
                            <a href='/about'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>About</li></a>
                            <a href='/gallery'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Shop</li></a>
                            <a href='/#contact'><li className=' py-1 mb-1 font-semibold px-4 hover:text-orange-500 text-white text-xl tracking-[0.1em] duration-500 flex items-center font-sans'>Contact Us</li></a>
                        </ul>
                    </div>
                }
            </FadeInFromTop>
        </div>
    )
}

export default Navbar
