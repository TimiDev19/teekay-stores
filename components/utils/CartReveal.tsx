"use client";

import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks/hooks";

interface Props {
  children: JSX.Element;
}

export const CartReveal = ({ children }: Props) => {
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  return (
    <div className={`w-screen fixed z-[60]`}>
      <motion.div
        initial={{ y: -800 }}
        animate={{ y: cartIsShowing ? 0 : -800 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const BgReveal = ({ children }: Props) => {
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);

  return (
    <div className={`fixed z-[50]`}>
      {cartIsShowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: cartIsShowing ? 1 : 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
