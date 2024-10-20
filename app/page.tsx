import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {
  return (
    <div className=" hero-bg h-screen w-screen pt-[100px] text-white">
      <div className=" h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-5">
        <div className=" w-full lg:w-[35%] p-4 text-left flex flex-col items-start justify-start h-[85%]">
          <h1 className=" text-white text-3xl lg:text-5xl font-semibold mb-[30px] lg:mb-[70px]">TEEKAY BEADEN <br /> BAG COLLECTION</h1>

          <h1 className=" font-semibold text-xl lg:text-2xl uppercase mb-4">Where Fashion Meets Elegance</h1>
          <p className=" mb-4 text-sm">
            Elevate your style with our handcrafted, one-of-a-kind beaded bags! Each piece in the Teekay Beaded Bag Collection is a perfect blend of elegance, artistry, and sophistication. Whether you're dressing up for a special occasion or adding flair to your everyday look, our vibrant and meticulously designed bags will make you stand out.
          </p>
          <Link href={"/"} className=" mb-4 uppercase bg-white px-4 py-2 rounded-full text-black font-semibold duration-500 hover:bg-transparent hover:text-white hover:border-2 hover:border-white">Shop Now</Link>
          <div className=" flex items-center justify-center"> 
            <Link href={"/"} className=" mr-4 bg-white p-2 rounded-full text-black flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white duration-500 hover:text-white"><WhatsAppIcon/></Link>
            <Link href={"/"} className=" mr-4 bg-white p-2 rounded-full text-black flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-white duration-500 hover:text-white"><InstagramIcon/></Link>
          </div>
        </div>
        {/* <div className=" w-[30%] p-4 text-left flex flex-col items-start justify-start h-screen">
          <h1 className=" text-white text-4xl font-semibold">TEEKAY BEADEN <br /> BAG COLLECTION</h1>
        </div> */}
      </div>
    </div>
  );
}
