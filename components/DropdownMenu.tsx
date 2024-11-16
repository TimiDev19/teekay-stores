"use client"
import { useState } from 'react';

const Dropdown = () => {
  const [color, setColor] = useState("no")

  return (
    <div className=" w-full h-full flex items-center justify-start">
      <button
        onClick={() => setColor("red")}
        className={` mr-5 h-[50px] w-[50px] rounded-sm bg-red-500 ${color === "red" && `border-2 border-black`}`}
      >
      </button>
      <button
        onClick={() => setColor("blue")}
        className={` mr-5 h-[50px] w-[50px] rounded-sm bg-blue-500 ${color === "blue" && `border-2 border-black`}`}
      >
      </button>
      <button
        onClick={() => setColor("black")}
        className={` mr-5 h-[50px] w-[50px] rounded-sm bg-black ${color === "black" && `border-2 border-red-400`}`}
      >
      </button>
      <button
        onClick={() => setColor("green")}
        className={` mr-5 h-[50px] w-[50px] rounded-sm bg-green-500 ${color === "green" && `border-2 border-black`}`}
      >
      </button>
    </div>
  );
};

export default Dropdown;