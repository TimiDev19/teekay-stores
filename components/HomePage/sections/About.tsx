import Image from 'next/image';
import aboutimg from '@/assets/newimg15.jpg';

const About = () => {
  return (
    <section className="pxpx mx2xl py-20 bg-[#fffaf6] relative">
      <p className=" text-center text-2xl tracking-widest mb-20 tangerine">
        TEEKAY
      </p>
      <div>
        <div className="flex flex-col lg:flex-row w-[70%] mx-auto gap-28">
          <div className=" lg:w-[65%] flex flex-col gap-4 z-[2]">
            <p className=" uppercase text-xs italic">
              Our Story of Timeless Elegance
            </p>
            <h2 className=" text-7xl upercase tracking-widest whitespace-nowrap tangerine">
              {/* Bags That Celebrate <br /> Feminine Beauty */}
              Feminine <br /> Beauty
            </h2>
            <p className=" text-sm font-semibold">
              Born from a passion for refined craftsmanship and a deep
              appreciation for the art of femininity, we create bags that exude
              sophistication. Each piece is thoughtfully designed to bring out
              the unique beauty of every woman, merging classic elegance with
              modern flair.
            </p>
            <p className="text-sm font-semibold">
              Our commitment to quality and style is unwavering. From the finest
              materials to the smallest details, we ensure that each bag is a
              symbol of grace and glamour, crafted to elevate every moment. We
              believe that true elegance is timeless, and our collection is a
              tribute to women who embrace it every day.
            </p>
          </div>
          <Image
            src={aboutimg}
            width={1000}
            height={1000}
            className=" w-full lg:w-[400px] lg:h-[500px] originleft scale-0.9] object-cover z-[1] grayscale rotate45 -translat-x-[150px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
