'use client';
import { motion } from 'motion/react';

import { CiMenuBurger } from 'react-icons/ci';
const Menu = () => {
  return (
    <motion.div
      whileTap={{
        scale: 0.8,
      }}
      className="cursor-pointer flex gap-2 items-center bg-white rounded-xl px-2 py-1"
    >
      <CiMenuBurger className="text-2xl font-bold" /> <span>Menu</span>
    </motion.div>
  );
};

export default Menu;
