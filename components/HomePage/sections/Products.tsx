'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import useMedia from '@/hooks/useMedia';

import ProductCard from '@/helpers/ProductCard';

import { products } from '@/helpers/helpers';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { useState } from 'react';

const Products = () => {
  const isMobile = useMedia('(max-width: 768px)', false);
  const isTablet = useMedia('(max-width: 1050px)', false);
  const viewPortSlides = isMobile ? 1 : isTablet ? 2 : 3;
  const slidesPerView = Math.min(viewPortSlides, products.length);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handlePrevClick = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };
  return (
    <section id="products" className="pxpx mx2xl py-20">
      <div className="flex justify-between w-full">
        <p className=" text-center text-2xl lg:text-3xl tracking-widest mb-16 leading-[0.8] tangerine">
          OUR PRODUCTS <br />
        </p>
        <div className="flex w-fit gap-4 top-1/2 -translate-y-1/2 px-4 md:px-8 h-fit">
          <button
            disabled={isBeginning}
            className={`border border-[#97979770] rounded-full p-3.5 leading-none bg-white/5 hover:bg-white/10 duration-300 backdrop-blur-lg webkit-header-blur z-10 cursor-pointer ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePrevClick}
          >
            <ArrowLeft className="size-[27px]" />
          </button>
          <button
            disabled={isEnd}
            className={`border border-[#97979770] rounded-full p-3.5 leading-none bg-white/5 hover:bg-white/10 duration-300 backdrop-blur-lg webkit-header-blur z-10 cursor-pointer ${
              isEnd ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleNextClick}
          >
            <ArrowRight className="size-[27px]" />
          </button>
        </div>
      </div>
      <div className="mb-16 relative">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.activeIndex);
          }}
          slidesPerView={slidesPerView}
          modules={[A11y, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          speed={700}
          spaceBetween={30}
          className="flex"
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductCard
                imge={product.image}
                id={product.id}
                name={product.name}
                price={product.price}
                width="100%"
              />
            </SwiperSlide>
            // {console.log(product.name)}
          ))}
          {/* <div>
            <p className="swiper-button-prev abolute top-1/2 z-20 translate-x-4 -translate-y-1/2  cursor-pointer shadow-2xl">
              PREV
            </p>
            <p className="swiper-button-next absolute top-1/2 z-20 -translate-x-4 -translate-y-1/2 cursor-pointer shadow-2xl">
              NEXT
            </p>
          </div> */}
        </Swiper>
      </div>

      <Link
        href={'/bags'}
        className="mx-auto w-full text-center text-2xl tracking-widest leading-[0.8]"
      >
        <p className="hover:underline tanerine "> VIEW ALL BAGS</p>
      </Link>
    </section>
  );
};

export default Products;
