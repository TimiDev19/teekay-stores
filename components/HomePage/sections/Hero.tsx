import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen relative bg-black">
      <video
        src="/hero.mp4"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        autoPlay
        loop
        playsInline
        muted
        controls={false}
      ></video>
      <div className="z-[3] relative text-white h-full w-full flex flex-col justify-center items-center gap-7">
        <h1 className="text-center font-light text-7xl slab">
          The Essence Of <br /> Elegance
        </h1>
        <p className=" text-sm w-[40%] text-center mx-auto font-semibold">
          Discover a world where femininity meets elegance, crafted in every
          stitch, every silhouette. Our bags blend timeless glamour with modern
          allure, designed to be the perfect companion for every moment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
