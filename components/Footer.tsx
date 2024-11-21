import Link from 'next/link'
import React from 'react'
import { smoothScrollToSection } from '../helpers/helpers'
import { ArrowForward, ArrowForwardIos } from '@mui/icons-material'

const Footer = () => {
    return (
        <>
            <div className=' mt-[50px] w-full h-[50vh] bg-[#fffaf6] flex flex-col md:flex-row items-center justify-center'>
                <div className=' w-full md:w-[48%] h-full flex-col flex items-start justify-end p-[10px] md:p-[50px] mb-[10px] md:mb-0'>
                    <h1
                        className=' text-4xl md:text-5xl'
                    >
                        A brand of the <br /> Transformative Kind.
                    </h1>
                </div>
                <div className=' w-full md:w-[48%] h-full md:py-[50px] flex flex-col items-start justify-between p-[10px]'>
                    <div
                        className=' flex items-center justify-center w-full mb-4'
                    >
                        <div className=' w-[48%] flex items-start justify-start'>
                            <ul>
                                <li className=' uppercase'>
                                    <div
                                        onClick={(e) => smoothScrollToSection(e, 'about')}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p>About</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </div>
                                </li>
                                <li className=' uppercase'>
                                    <div
                                        onClick={(e) => smoothScrollToSection(e, 'products')}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p>Bags</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </div>
                                </li>
                                <li className=' uppercase'>
                                    <div
                                        onClick={(e) => smoothScrollToSection(e, 'contact')}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p> Contact Us</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className=' w-[48%] flex items-start justify-start'>
                            <ul>
                                <li className=' uppercase'>
                                    <Link
                                        href={""}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p>Whatsapp</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </Link>
                                </li>

                                <li className=' uppercase'>
                                    <Link
                                        href={""}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p>instagram</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </Link>
                                </li>

                                <li className=' uppercase'>
                                    <Link
                                        href={""}
                                        className="relative cursor-pointer group w-fit"
                                    >
                                        <p>facebook</p>
                                        <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className=' w-full'
                    >
                        <h1 className=' text-3xl mb-[30px]'>Stay in touch</h1>
                        <div
                            className=' w-full flex items-center justify-center border-b border-b-black'
                        >
                            <input type="email" placeholder='YOUR EMAIL ADDRESS *' className=' bg-transparent text-black placeholder:text-black placeholder:text-sm py-2 w-full focus:outline-none' />
                            <button><ArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[70px] text-center bg-black text-[#fffaf6] flex items-center justify-center'>
                <h1 className=' flex'>
                    Copyright©2024 All rights reserved. Developed by
                    <Link
                        target='blank'
                        href={"https://oluwatimilehin-eportfolio.vercel.app/"}
                        className="relative cursor-pointer group w-fit mx-2"
                    >
                        <p>TIMI</p>
                        <div className="absolute bottom-0 h-px w-full bg-[#fffaf6] scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                    </Link>
                    in partnership with
                    <Link
                        target='blank'
                        href={"https://emmanuelayeniko.netlify.app/"}
                        className="relative cursor-pointer group w-fit mx-2"
                    >
                        <p>NIKO</p>
                        <div className="absolute bottom-0 h-px w-full bg-[#fffaf6] scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                    </Link>
                </h1>
            </div>
        </>
    )
}

export default Footer
