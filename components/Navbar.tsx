'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { smoothScrollToSection } from './helpers/helpers';

// import Menu from './Menu';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [fixedBg, setFixedBg] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const changeBg = () => {
    if (window.scrollY >= 10) {
      setFixedBg(true);
    } else {
      setFixedBg(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBg);
  }
  return (
    <>
      <div className=""></div>
      {/* <AnimatePresence mode="wait">
        {menuIsOpen && (
          <Menu
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            toggleMenu={toggleMenu}
          />
        )}
      </AnimatePresence> */}
      {/* <AnimatePresence mode="wait">
        {menuIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuIsOpen(false)}
            className="fixed bg-black z-[70] w-full h-full cursor-pointer lg:hidden"
          ></motion.div>
        )}
      </AnimatePresence> */}
      <header
        className={`fixed top-0 w-full z-40 flex justify-between items-center text-white pxpx text-[13px] duration-300 ${
          fixedBg
            ? 'bg-black/50 backdrop-blur-lg webkit-header-blur py-3'
            : 'py-7'
        }`}
      >
        <Link href={'/'}>
          <div className="text-3xl tracking-widest tangerine">TEEKAY</div>
        </Link>

        <div className="lg:flex items-center gap-8 tracking-[0.15rem] hidden uppercase font-bold">
          <div
            onClick={(e) => smoothScrollToSection(e, 'about')}
            className="relative cursor-pointer group"
          >
            <p>About</p>
            <div className="absolute bottom-0 h-px w-full bg-white scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </div>
          <div
            onClick={(e) => smoothScrollToSection(e, 'products')}
            className="relative cursor-pointer group"
          >
            <p>Bags</p>
            <div className="absolute bottom-0 h-px w-full bg-white scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </div>
          <div
            onClick={(e) => smoothScrollToSection(e, 'contact')}
            className="relative cursor-pointer group"
          >
            <p> Contact Us</p>
            <div className="absolute bottom-0 h-px w-full bg-white scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </div>
        </div>

        <button onClick={toggleMenu} className="translate-x-[0.5rem] lg:hidden">
          <Hamburger toggled={menuIsOpen} size={22} />
        </button>
      </header>
    </>
  );
};

export default NavBar;
