import React from 'react'
import products from '@/components/helpers/helpers'
import ProductCard from '@/components/helpers/ProductCard'
import { div } from 'framer-motion/client'

const page = () => {
    return (
        <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 w-[100vw] pxpx mx2xl">
                {products.map((item, index) => (
                    <div className=" mx-4">
                        <ProductCard img={item.image} width="100%" key={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
