'use client';
import emailjs from '@emailjs/browser';
emailjs.init('vniYYZ7cQTr3doimy');
import CartItem from './CartItem';
import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
import {
  emptyCart,
} from '@/store/audophileSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js'
import products from '../helpers/helpers';

const CartModal = () => {
  const dispatch = useAppDispatch();
  const [isOrdering, setIsOrdering] = useState(false)
  const cart = useAppSelector((state) => state.appState.cart);
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<string | null>(null);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(cart)

  const apiURL = "https://teekay-stores-backend.onrender.com/api"

  const sendCartContent = async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty. Please add items before placing an order.')
      setIsOrdering(false)
      return;
    }

    const serviceID = "service_yyi23yj";
    const templateID = "template_bh1ydr5";
    const userID = "vniYYZ7cQTr3doimy";

    const filteredCart = cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const emailParams = {
      cart_content: filteredCart,
      from_email: userEmail,
    };
    setIsOrdering(true)
    console.log("Email Params:", emailParams);

    try {
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      if (res.status === 200) {
        console.log("Email sent successfully!");
        setOrder("Order placed successfully !")
        toast.success('Order placed sucessfully!');
        setIsOrdering(false)
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error('Failed to send email. Please try again');
      setIsOrdering(false)
    }
  };

  const handleCheckout = () => {
    if (!userEmail) {
      toast.error('Please enter your email address.')
    } else {
      sendCartContent();
      setError(null);
    }
  };

  // const makePayment = async () => {
  //   const stripe = await loadStripe("pk_test_51QI9tIP7aD4dwEkIyXhFqlhMcoEhrPnz105IFO5g1hF7n2Ft0usUDuOzCU1KHIPfbnjQ2jO2mmloKfY2JO3FY7nk00BsvXJRCg")
  //   const body = {
  //     products: cart
  //   }

  //   const headers = {
  //     "Content-Type": "application/json"
  //   }

  //   const response = await fetch(`${apiURL}/create-checkout-session`, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   })

  //   const session = await response.json();

  //   const result = stripe?.redirectToCheckout({
  //     sessionId: session.id
  //   })
  // }

//   const makePayment = async () => {
//     const stripe = await loadStripe("pk_test_51QI9tIP7aD4dwEkIyXhFqlhMcoEhrPnz105IFO5g1hF7n2Ft0usUDuOzCU1KHIPfbnjQ2jO2mmloKfY2JO3FY7nk00BsvXJRCg");
//     const body = {
//         products: cart
//     };

//     const headers = {
//         "Content-Type": "application/json"
//     };

//     try {
//         const response = await fetch(`${apiURL}/create-checkout-session`, {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(body)
//         });

//         // Check if the response is OK (status code 200-299)
//         if (!response.ok) {
//             const errorText = await response.text(); // Get the response text for debugging
//             throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
//         }

//         const session = await response.json();

//         const result = await stripe?.redirectToCheckout({
//             sessionId: session.id
//         });
        
//         // Handle the result of the redirect
//         if (result?.error) {
//             console.error(result.error.message);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


const makePayment = async () => {
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
};

  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
        <p
          onClick={() => dispatch(emptyCart())}
          className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
        >
          Remove all
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

      <input
        type="email"
        placeholder="Enter your email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded mb-2 focus:outline-black"
      />
      {error && (
        <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
      )}
      {order && (
        <p style={{ color: 'green', marginBottom: '10px' }}>{order}</p>
      )}
      {
        isOrdering ? (
          <button
            className={`bg-black ${!userEmail && `opacity-65`} md:hover:bg-black w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
          >
            <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
          </button>
        )
          :
          (
            <button
              onClick={makePayment}
              className={`bg-black ${!userEmail && `opacity-65`} md:hover:bg-slate-700 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
            >
              Checkout
            </button>
          )
      }
    </div>
  );
};

export default CartModal;




