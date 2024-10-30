'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { smoothScrollToSection } from './helpers/helpers';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks/hooks';
import {
  toggleCart,
  toggleMobileMenu,
  toggleAuthModal,
} from '@/store/audophileSlice';
import Cart from './cart/Cart';
import cartimg from '@/assets/cart.svg';

// import Menu from './Menu';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [fixedBg, setFixedBg] = useState(false);

  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
    dispatch(toggleAuthModal(false));
    console.log(cartIsShowing);
  };
  const totalItems = useAppSelector((state) => state.appState.cart.length);

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
        className={`fixed top-0 w-full z-40 flex justify-between items-center text-white pxpx text-[13px] duration-300 bg-black/50 backdrop-blur-lg webkit-header-blur py-3`}
      >
        <Link href={'/'}>
          <div className="text-3xl tracking-widest tangerine invert-0">
            TEEKAY
          </div>
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

          <div
            onClick={toogleCartHandler}
            className="relative inline-flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={cartimg}
              alt="cart-svg"
              className="h-6 w-6 text-white invert"
            />
            <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-[#ffc675] text-black text-xs pl-1.5 pr-1 pt-[2px] pb-[1.5px] font-semibold rounded-full">
              {totalItems}
            </div>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="translate-x-[0.5rem] lg:hidden flex items-center justify-center"
        >
          <Hamburger toggled={menuIsOpen} size={22} />
          <div
            onClick={toogleCartHandler}
            className="relative inline-flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={cartimg}
              alt="cart-svg"
              className="h-6 w-6 text-white invert"
            />
            <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-[#ffc675] text-black text-xs pl-1.5 pr-1 pt-[2px] pb-[1.5px] font-semibold rounded-full">
              {totalItems}
            </div>
          </div>
        </button>
      </header>
      <Cart />
    </>
  );
};

export default NavBar;
