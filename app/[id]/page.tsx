'use client';
import React, { useEffect, useState } from 'react';
import { addToCart } from '@/store/audophileSlice';
import { getProductById } from '@/helpers/helpers';
import Image, { StaticImageData } from 'next/image';
import { useDispatch } from 'react-redux';
import AddToCartBtn from '@/components/AddToCartBtn';
import Dropdown from '@/components/DropdownMenu';
import Link from 'next/link';

interface PageParams {
  params: {
    id: string; // or number, depending on your data type
  };
}

interface Bag {
  id: number;
  name: string;
  price: number;
  image: StaticImageData; // Assuming `StaticImageData` is imported from 'next/image'
  color?: string; // Optional property
  availableColors?: Array<string>; // or string[]
}

const page = ({ params: { id } }: PageParams) => {
  // const bag = getProductById(Number(id))
  const [bag, setBag] = useState<Bag | null>(null);
  const [bagColor, setBagColor] = useState('default');

  useEffect(() => {
    const fetchBag = async () => {
      const data = await getProductById(Number(id));
      // @ts-ignore
      setBag(data || null);
    };

    fetchBag();
  }, [id]);

  if (!bag) {
    return (
      <div className=" h-screen w-screen flex items-center justify-center">
        bag not fount :(
      </div>
    );
  }
  return (
    <div className=" w-full pt-[120px] lg:pt-[180px] pb-8 flex flex-col items-start justify-start">
      <div className=" mb-4 max-h-fit w-[95%] mx-auto">
        <Link
          href={'/bags'}
          className="relative cursor-pointer group max-w-fit block"
        >
          <p>Back</p>
          <div className="absolute bottom-0 h-px w-full bg-black scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
        </Link>
      </div>
      <div className=" w-[95%] m-auto flex flex-col lg:flex-row items-start justify-between mb-10">
        <Image
          src={bag.image}
          alt=""
          className=" w-full lg:w-[45%] border border-slate-300 mb-6"
        />
        <div className=" w-full lg:w-[45%] text-left">
          <h1 className=" font-semibold text-3xl mb-4">{bag.name}</h1>
          <h1 className=" text-green-700 font-semibold text-5xl mb-6">
            £ {bag.price}
          </h1>
          <div className=" bg-transparent w-full flex items-center justify-start max-h-[60px]">
            <Dropdown bagColor={bagColor} setBagColor={setBagColor} bag={bag} />
          </div>
          <AddToCartBtn bag={bag} />
        </div>
      </div>
    </div>
  );
};

export default page;
