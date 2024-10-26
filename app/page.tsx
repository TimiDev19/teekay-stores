import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import image from '@/app/assets/newimg1.jpg'
import gallery from '@/app/helpers/helpers'
import { FadeInFromBottom } from "./components/FadeInFromBottom";
import { FadeInFromLeft } from "./components/FadeInFromLeft";
import { FadeInFromTop } from "./components/FadeInFromTop";
import { FadeInFromRight } from "./components/FadeInFromRight";

export default function Home() {
  const displayItems = gallery.filter((item) => {
    return item.id < 7
  })
  return (
    <div className="  max-h-screen overflow-y-scroll scroll-smooth w-screen  text-white">
      <div className=" hero-bg h-screen w-screen flex flex-col pt-[100px] lg:flex-row items-center justify-between px-5 mb-6">
        <div className=" w-full lg:w-[35%] p-4 text-left flex flex-col items-start justify-start h-[85%]">
          <FadeInFromBottom>
            <h1 className=" text-white text-3xl lg:text-5xl font-semibold mb-[30px] lg:mb-[70px]">TEEKAY BEADEN <br /> BAG COLLECTION</h1>

            <h1 className=" font-semibold text-xl lg:text-2xl uppercase mb-4">Where Fashion Meets Elegance</h1>
            <p className=" mb-4 text-sm">
              Elevate your style with our handcrafted, one-of-a-kind beaded bags! Each piece in the Teekay Beaded Bag Collection is a perfect blend of elegance, artistry, and sophistication. Whether you're dressing up for a special occasion or adding flair to your everyday look, our vibrant and meticulously designed bags will make you stand out.
            </p>
            <Link href={"/"} className=" mb-4 block w-fit uppercase bg-white px-4 py-2 rounded-full text-black font-semibold duration-500 hover:bg-transparent hover:text-white hover:border-2 hover:border-white">Shop Now</Link>
            <div className=" flex items-center justify-center w-fit">
              <Link href={"/"} className=" mr-4 bg-white p-2 rounded-full text-black flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white duration-500 hover:text-white"><WhatsAppIcon /></Link>
              <Link href={"/"} className=" mr-4 bg-white p-2 rounded-full text-black flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white duration-500 hover:text-white"><InstagramIcon /></Link>
            </div>
          </FadeInFromBottom>
        </div>
      </div>

      <FadeInFromLeft>
        <div className=" lg:h-[100vh] w-[90%] m-auto mb-10 flex flex-col lg:flex-row items-center justify-between lg:px-6 text-black">
          <div className=" w-[90%] lg:w-[45%] mb-4">
            <h1 className=" text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">About Us</h1>
            <p className=" mb-6">
              At Teekay, we believe in the power of craftsmanship and individuality. Founded with a passion for blending tradition with contemporary fashion, we specialize in creating exquisite, handcrafted beaded bags that reflect timeless beauty and unique style. Each piece in the Teekay Beaded Bag Collection is meticulously designed and crafted by skilled artisans, ensuring top-quality materials and unmatched attention to detail.

              Our mission is to offer more than just accessories – we create wearable art that allows you to express your personality, elevate your wardrobe, and embrace your individuality. Whether you're looking for a bold statement piece or a subtle accent to complete your look, Teekay has the perfect bag for every occasion.

              Join us on this journey of style and craftsmanship, and discover the elegance and creativity that define Teekay Beaded Bags.
            </p>
            <Link
              href={'/about'}
              className=" p-2 text-white bg-black duration-500 hover:border-black hover:border-2 hover:bg-transparent hover:text-black lg:text-2xl"
            >
              Read More
            </Link>
          </div>
          <div
            className=" lg:w-[40%]"
          >
            <Image
              src={image}
              alt=""
              className=" w-full border-black border"
            />
          </div>
        </div>
      </FadeInFromLeft>

      <div className=" block w-[90%] m-auto text-center mb-[70px]">
        <FadeInFromBottom>
          <h1 className=" text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">Our Gallery</h1>
          <p className=" text-black mb-4">Have a nice view of our beautiful bag collection.</p>
        </FadeInFromBottom>
        <FadeInFromTop>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-3">
            {
              displayItems.map((item, index) => (
                <div
                  key={index}
                  className=" group hover:border-4 hover:border-black duration-500 flex flex-col items-center justify-between w-[95%] cursor-pointer m-auto min-h-[400px] border border-slate-300 mb-6"
                >
                  <div className=' group text-center'>
                    <Image
                      src={item.image}
                      alt={""}
                      className=" w-full m-auto"
                    />
                  </div>
                  {/* <Link
                                href={`/product/${item.id}`}
                                className=' w-full transition duration-1000 flex text-center items-center justify-center bg-green-600 hover:bg-green-800 text-white text-s py-4 uppercase'
                            >
                                Buy Now
                            </Link> */}
                </div>
              ))
            }
          </div>
        </FadeInFromTop>
        <Link
          href={'/gallery'}
          className=" p-2 text-white bg-black duration-500 hover:border-black hover:border-2 hover:bg-transparent hover:text-black lg:text-2xl"
        >
          See More
        </Link>
      </div>

      <div id="contact" className=" lg:h-[90vh] flex flex-col lg:flex-row items-center justify-center">
        <div className=" w-full h-full lg:w-[50%] text-center">
          <FadeInFromLeft>
            <div className=" w-full h-full">
              <h1 className="text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">Contact Us</h1>
              <div className=" w-[90%] m-auto lg:w-[80%] flex items-center justify-center">
                <form action="" className=" w-[80%] m-auto h-[50%] lg:h-[90%] text-orange-500">
                  <div className=" flex flex-col lg:flex-row items-center justify-between mt-6">
                    <input type="text"
                      placeholder="Name"
                      required
                      className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 rounded-md"
                    />

                    <input type="email"
                      placeholder="Email"
                      required
                      className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 rounded-md"
                    />
                  </div>

                  <div className=" flex flex-col lg:flex-row items-center justify-between lg:mt-6">
                    <input type="text"
                      placeholder="Phone number"
                      required
                      className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 rounded-md"
                    />

                    <input type="email"
                      placeholder="Subject"
                      required
                      className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 rounded-md"
                    />
                  </div>

                  <textarea name="" id="" cols={30} rows={10}
                    placeholder="Message"
                    required
                    className=" w-full lg:mt-6 border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 rounded-md"
                  ></textarea>

                  <button className=" w-full py-4 text-white bg-orange-500 mt-4 rounded-md mb-5">Send</button>
                </form>
              </div>
            </div>
          </FadeInFromLeft>
        </div>
        <div className=" w-full h-full lg:w-[50%] text-center">
          <FadeInFromRight>
            <div className=" h-full w-full map"></div>
          </FadeInFromRight>
        </div>
      </div>
    </div>
  );
}
