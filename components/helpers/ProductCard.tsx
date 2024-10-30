'use client';

import { ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProductCard = ({ width = '400px', img }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width }} className="flex flex-col gap-4 relative group">
      <div
        // href={''}
        style={{ width, height: '500px', overflow: 'hidden' }}
        className="relative"
      >
        <div className="absolute bottom-0 translate-y-20 transform bg-white w-full px-4 py-4 z-[2] flex justify-between group-hover:translate-y-0 duration-500 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer">
          <p>Add To Cart +</p>
          <ShoppingCartOutlined />
        </div>
        <Image
          src={img}
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
