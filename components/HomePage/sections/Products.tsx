'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMedia from '@/hooks/useMedia';

import ProductCard from '@/components/helpers/ProductCard';

import { products } from '@/components/helpers/helpers';
import Link from 'next/link';

const Products = () => {
  const isMobile = useMedia('(max-width: 768px)', false);
  const isTablet = useMedia('(max-width: 1050px)', false);
  const viewPortSlides = isMobile ? 1 : isTablet ? 2 : 3;
  const slidesPerView = Math.min(viewPortSlides, products.length);
  return (
    <section id="products" className="pxpx mx2xl py-20">
      <p className=" text-center text-2xl tracking-widest mb-16 leading-[0.8] tangerine">
        OUR PRODUCTS <br />
        <span className="text-[10px] tracking-[0.3em] slab">(SWIPE)</span>
      </p>
      <div className="mb-16 relative">
        <Swiper
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
              <ProductCard imge={product.image} id={product.id} name={product.name} price={product.price} width="100%" />
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
        <p className="hover:underline tangerine "> VIEW ALL BAGS</p>
      </Link>
    </section>
  );
};

export default Products;
