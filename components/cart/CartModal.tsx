'use client';
import CartItem from './CartItem';
import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
import {
  emptyCart,
} from '@/store/audophileSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js'
import products from '../../helpers/helpers';

const CartModal = () => {
  const dispatch = useAppDispatch();
  const [isOrdering, setIsOrdering] = useState(false)
  const cart = useAppSelector((state) => state.appState.cart);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(cart)

  const apiURL = "https://teekay-stores-backend.onrender.com/api"

  const handleCartIsEmpty = () => {
    toast.error('Your cart is empty 🤧')
  }

  const makePayment = async () => {
    setIsOrdering(true)
    const stripe = await loadStripe("pk_test_51QI9tIP7aD4dwEkIyXhFqlhMcoEhrPnz105IFO5g1hF7n2Ft0usUDuOzCU1KHIPfbnjQ2jO2mmloKfY2JO3FY7nk00BsvXJRCg");
    const body = {
      products: cart
    };

    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      const textResponse = await response.text(); // Get the response as text
      console.log("Raw Response:", textResponse); // Log the raw response

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, response: ${textResponse}`);
      }

      const session = JSON.parse(textResponse); // Parse the JSON response

      const result = await stripe?.redirectToCheckout({
        sessionId: session.id
      });


      // Handle the result of the redirect
      if (result?.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsOrdering(false)
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
        <p
          onClick={() => dispatch(emptyCart())}
          className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
        >
          Empty cart
        </p>
      </div>
      <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-black">
        {cart.length === 0 ? (
          <p className="mt-[1rem] font-semibold italic">No Items In Cart 🤧</p>
        ) : (
          cart.map((crt, index) => (
            <CartItem
              key={index}
              id={crt.id}
              img={crt.img}
              name={crt.name}
              price={crt.price}
              quantity={crt.quantity}
            />
          ))
        )}
      </div>
      <div className="flex justify-between items-center pt-[1rem]">
        <p className="opacity-50 text-[1rem]">TOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">{`£ ${totalCost.toLocaleString()}`}</p>
      </div>

      {
        isOrdering ? (
          <button
            className={`bg-black ${cart.length == 0 && `opacity-45 text-opacity-45`} md:hover:bg-black w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
          >
            <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
          </button>
        )
          :
          cart.length == 0 ? (
            <button
              onClick={handleCartIsEmpty}
              className={`bg-black ${cart.length == 0 && `opacity-45 text-opacity-45`} md:hover:bg-slate-700 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
            >
              Checkout
            </button>
          )
            :
            (
              <button
                onClick={makePayment}
                className={`bg-black ${cart.length == 0 && `opacity-45 text-opacity-45`} md:hover:bg-slate-700 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
              >
                Checkout
              </button>
            )
      }
    </div>
  );
};

export default CartModal;