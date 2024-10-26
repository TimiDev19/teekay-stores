import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '@/app/assets/newimg1.jpg'
import { FadeInFromBottom } from '../components/FadeInFromBottom'

const page = () => {
    return (
        <div className=' pt-[100px]'>
            <FadeInFromBottom>
                <div className=" h-[100vh] w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between lg:px-6 text-black">
                    <div className=" w-[90%] lg:w-[45%] mb-4">
                        <h1 className=" text-orange-500 uppercase font-extrabold text-4xl lg:text-6xl mb-4">About Us</h1>
                        <p className=" mb-6">
                            Welcome to the Teekay Beaded Bag Collection, where art, craftsmanship, and fashion converge to create a unique line of handbags that are both timeless and trendy. Our collection is a celebration of culture, elegance, and meticulous design, offering you not just an accessory, but a statement piece that elevates your style with unparalleled sophistication.
                            Handcrafted Excellence
                            Each bag in the Teekay Beaded Bag Collection is carefully handcrafted by skilled artisans, who bring their years of expertise to every bead, stitch, and detail. Our artisans are not just creators; they are storytellers who use traditional techniques passed down through generations, blending them with modern design elements to produce bags that are as functional as they are beautiful.
                            The beading process is intricate, requiring precision and patience. Thousands of beads are individually hand-sewn to form elaborate patterns, resulting in bags that are true works of art. From bold geometric designs to delicate floral motifs, every Teekay bag showcases the perfect balance of structure and fluidity, making it a versatile accessory for any occasion.
                            Rich Color Palettes and Premium Materials
                            The Teekay Beaded Bag Collection is distinguished by its rich color palettes and luxurious materials. Inspired by nature, art, and global cultures, our bags feature a diverse array of vibrant colors—ranging from deep jewel tones to soft pastels—that complement both casual and formal attire. The beads are carefully sourced for their quality and shine, ensuring each bag has a luminous finish that catches the eye.
                            We believe that luxury is found in the details, which is why we only use premium materials like high-quality fabrics, leather, and metal accents. Each bag is designed not just for aesthetics, but also for durability, ensuring that it stands the test of time, becoming a cherished part of your wardrobe.
                        </p>
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
            </FadeInFromBottom>
        </div>
    )
}

export default page
