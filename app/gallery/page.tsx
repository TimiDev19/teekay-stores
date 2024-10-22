import React from 'react'
import gallery from '@/app/assets/helpers/helpers'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className=' pt-[100px]'>
            <div className=" block w-[90%] m-auto text-center mb-[70px]">
                <h1 className=" text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">Our Gallery</h1>
                <p className=" text-black mb-4">Have a nice view of our beautiful bag collection.</p>
                <div className=" w-full grid grid-cols-3">
                    {
                        gallery.map((item, index) => (
                            <div key={index} className=" mx-2 mb-4 border border-black duration-500 hover:mx-1 cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        ))
                    }
                </div>
                {/* <Link
                    href={'/about'}
                    className=" p-2 text-white bg-black duration-500 hover:border-black hover:border-2 hover:bg-transparent hover:text-black lg:text-2xl"
                >
                    See More
                </Link> */}
            </div>
        </div>
    )
}

export default page
