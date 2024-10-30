import React from 'react'
import gallery from '@/helpers/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { FadeInFromBottom } from '../components/FadeInFromBottom'

const page = () => {
    return (
        <div className="pt-[120px] lg:pt-[180px]">
            <FadeInFromBottom>
                <h1 className=" font-bold mb-6 text-5xl pxpx mx2xl">OUR PRODUCTS</h1>
                <div className=" grid md:grid-cols-2 lg:grid-cols-4 w-[100vw] pxpx mx2xl">
                    {gallery.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-[95%] items-center justify-between cursor-pointer duration-500 m-auto min-h-[400px] border border-slate-300 mb-6"
                        >
                            <div className=' group text-center'>
                                <Image
                                    src={item.image}
                                    alt=''
                                    // alt={item.name}
                                    className=" w-full m-auto group-hover:w-[99%] duration-500"
                                />
                                {/* <h1 className=" mx-4 text-xl">{item.name}</h1> */}
                                {/* <h1 className=" mx-4 font-semibold text-green-600 text-3xl mb-6 text-left">
                                    £ {item.price}
                                </h1> */}
                            </div>
                            <Link
                                href={`/product/${item.id}`}
                                className=' w-full text-center bg-green-600 text-white text-s py-4 uppercase'
                            >
                                Buy Now
                            </Link>
                        </div>
                    ))}
                </div>
            </FadeInFromBottom>
        </div>
    )
}

export default page
