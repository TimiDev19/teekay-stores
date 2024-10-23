import React from 'react'
import gallery from '@/app/assets/helpers/helpers'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className=' pt-[100px] max-h-[100vh] overscroll-y-scroll scroll-smooth'>
            <div className=" block w-[90%] m-auto text-center mb-[70px]">
                <h1 className=" text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">Our Gallery</h1>
                <p className=" text-black mb-4">Have a nice view of our beautiful bag collection.</p>
                {/* <div className=" w-full grid md:grid-cols-2 lg:grid-cols-4 pxpx mx2xl">
                    {
                        gallery.map((item, index) => (
                            <div key={index} className=" mx-2 mb-4 h-fit border border-black duration-500 hover:mx-1 cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        ))
                    }
                </div> */}
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 w-full pxpx mx2xl">
                    {gallery.map((item, index) => (
                        <div
                            key={index}
                            className=" group flex flex-col items-center justify-between w-[95%] cursor-pointer m-auto min-h-[400px] border border-slate-300 mb-6"
                        >
                            <div className=' group text-center'>
                                <Image
                                    src={item.image}
                                    alt={""}
                                    className=" w-full m-auto"
                                />
                            </div>
                            <Link
                                href={`/product/${item.id}`}
                                className=' w-full transition duration-1000 flex text-center items-center justify-center bg-green-600 hover:bg-green-800 text-white text-s py-4 uppercase'
                            >
                                Buy Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
