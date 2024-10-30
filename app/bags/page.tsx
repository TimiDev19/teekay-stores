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
// =======
// import React from 'react';
// import products from '@/components/helpers/helpers';
// import ProductCard from '@/components/helpers/ProductCard';
// import { div } from 'framer-motion/client';

// const page = () => {
//   return (
//     <section className="py-32 pxpx mx2xl  ">
//       <p className="tracking-widest mb-10 text-3xl leading-[0.8] tangerine">
//         ALL BAGS
//       </p>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {products.map((item, index) => (
//           <div>
//             <ProductCard img={item.image} width="100%" key={index} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// >>>>>>> adb8e4d842ced74272e7f07af91c6af58b174bc1

export default page;
