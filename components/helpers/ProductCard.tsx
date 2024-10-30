'use client';

import { ShoppingCartOutlined } from '@mui/icons-material';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import products from './helpers';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/audophileSlice';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  description?: string;
};


const ProductCard = ({ width = '400px', imge, id }: any) => {
  // const { id } = useParams<{ id: string }>();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Convert id from string to number
      const productId = parseInt(id, 10);

      // Access the items array and use find to get the specific product
      const foundProduct = products.find((p) => p.id === productId);
      setProduct(foundProduct || null);
    }
  }, [id]);



  const handleAddToCart = () => {
    if (product) { // Check if product is not null
      const CartItem = {
        id: product.id,
        img: product.image,
        name: product.name,
        price: product.price,
        quantity: 1, // Start with a quantity of 1
      };

      // Dispatch the action to add the product to the cart
      dispatch(addToCart(CartItem));
    } else {
      // Handle the case where product is null, if necessary
      console.error("Product is null");
    }
  };

  return (
    <div style={{ width }} className="flex flex-col gap-4 relative group">
      <div
        // href={''}
        style={{ width, height: '500px', overflow: 'hidden' }}
        className="relative"
      >
        <div onClick={handleAddToCart} className="absolute bottom-0 translate-y-20 transform bg-white w-full px-4 py-4 z-[2] flex justify-between group-hover:translate-y-0 duration-500 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer">
          <p>Add To Cart +</p>
          <ShoppingCartOutlined />
        </div>
        <Image
          src={imge}
          width={1000}
          height={1000}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 400ms ease',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alt=""
        />
      </div>
      <div className="flex justify-between font-medium">
        <p>Larisa Cocktail Bag</p>
        <p>$39</p>
      </div>
    </div>
  );
};

export default ProductCard;
