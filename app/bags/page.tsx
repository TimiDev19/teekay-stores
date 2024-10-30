"use client";
import React from 'react'
import products from '@/components/helpers/helpers'
import ProductCard from '@/components/helpers/ProductCard'
import { div } from 'framer-motion/client'
// import { addToCart } from '@/store/audophileSlice';
// import { useDispatch } from 'react-redux'

const page = () => {
    // const dispatch = useDispatch();

    // const handleAddToCart = (product) => {
    //     const CartItem = {
    //         id: product.id,
    //         img: product.image,
    //         name: product.name,
    //         price: product.price,
    //         quantity: 1, // Start with a quantity of 1
    //     };

    //     // Dispatch the action to add the product to the cart
    //     dispatch(addToCart(CartItem));
    // };
    return (
        <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 w-[100vw] pxpx mx2xl">
                {products.map((item, index) => (
                    <div className=" mx-4">
                        <ProductCard imge={item.image} id={item.id} width="100%" key={index}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
