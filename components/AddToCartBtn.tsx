"use client"
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/audophileSlice';

const AddToCartBtn = ({ bag }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (bag) {
            // Check if product is not null
            const CartItem = {
                id: bag.id,
                img: bag.image,
                name: bag.name,
                price: bag.price,
                quantity: 1, // Start with a quantity of 1
            };

            // Dispatch the action to add the product to the cart
            dispatch(addToCart(CartItem));
        } else {
            // Handle the case where product is null, if necessary
            console.error('Product is null');
        }
    };
    return (
        <button
            onClick={handleAddToCart}
            className=' mt-5 px-11 text-center bg-green-600 text-white text-s py-4 uppercase duration-500 hover:bg-green-500'
        >
            + Add to cart
        </button>
    )
}

export default AddToCartBtn
