"use client"
import { div, select } from 'framer-motion/client';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Bag {
  id: number; // or number, depending on your ID type
  image: string | StaticImageData;
  name: string;
  price: number; // or string, depending on how you handle prices
  availableColors?: Array<Object>; // or string[]
}

interface DropdownProps {
  bagColor: string;
  setBagColor: (color: string) => void;
  bag: Bag | null; // bag can be of type Bag or null
}



const availableColors = [
  {
    color: "red"
  },
  {
    color: "green"
  }
]

const Dropdown: React.FC<DropdownProps> = ({ setBagColor, bagColor, bag }) => {

  const listedColors = bag?.availableColors

  console.log(`listed colors are ${listedColors}`)

  if (!listedColors) {
    return (
      <div></div>
    )
  } else {
    return (
      <div className=''>
        <div className=" w-full h-full flex items-center justify-start">
          <div className=' flex items-center justify-center w-full px-2 py-1 rounded-3xl focus:outline-none border-black capitalize'>
            {/* <option value="null">Select a color</option> */}
            {
              listedColors?.map((colorScheme, index) => (
                <Link
                  href={`/${colorScheme.link}`}
                  // onClick={() => setBagColor(`${colorScheme}`)}
                  className={` mr-5 h-[50px] w-[50px] rounded-sm ${colorScheme.color !== "black" ? `background-${colorScheme.color}` : `bg-${colorScheme.color}`} border-2 border-black`}
                >
                </Link>
                // <option value="">{colorScheme}</option>
              ))
            }
          </div>
          {/* <button
          onClick={() => setBagColor("blue")}
          className={` mr-5 h-[50px] w-[50px] rounded-sm bg-blue-500 ${bagColor === "blue" && `border-2 border-black`}`}
        >
        </button>
        <button
          onClick={() => setBagColor("black")}
          className={` mr-5 h-[50px] w-[50px] rounded-sm bg-black ${bagColor === "black" && `border-2 border-red-400`}`}
        >
        </button>
        <button
          onClick={() => setBagColor("green")}
          className={` mr-5 h-[50px] w-[50px] rounded-sm bg-green-500 ${bagColor === "green" && `border-2 border-black`}`}
        >
        </button> */}
        </div>
      </div>
    );
  }
};

export default Dropdown;