'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProductCard = ({ width = '400px', img }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width }} className="flex flex-col gap-4">
      <Link
        href={''}
        style={{ width, height: '500px', overflow: 'hidden' }}
        className="relative"
      >
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
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="object-cover w-full h-full cursor-pointer"
          alt=""
        />
      </Link>
      <div className="flex justify-between font-medium">
        <p>Larisa Cocktail Bag</p>
        <p>$39</p>
      </div>
    </div>
  );
};

export default ProductCard;
