import React from 'react';
import products from '@/components/helpers/helpers';
import ProductCard from '@/components/helpers/ProductCard';
import { div } from 'framer-motion/client';

const page = () => {
  return (
    <section className="py-32 pxpx mx2xl  ">
      <p className="tracking-widest mb-10 text-3xl leading-[0.8] tangerine">
        ALL BAGS
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((item, index) => (
          <div>
            <ProductCard img={item.image} width="100%" key={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
