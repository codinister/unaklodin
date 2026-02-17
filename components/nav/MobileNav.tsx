'use client';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Menu from './Menu';
import { Title } from '@radix-ui/react-dialog';
import Logo from './Logo';
import Searchbox from './Searchbox';
import BuscketIcon from './Buscket';
import NavLinks from './NavLinks';
import { useState } from 'react';
import {useScroll,useMotionValueEvent} from 'motion/react'

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [getCount,setCount] = useState(0)


  const {scrollYProgress} = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest)=>{
    setCount(latest)
  })

  return (
    <nav className={`${getCount > 0.1 ? 'fixed top-0 left-0 shadow-lg bg-white/75 z-20' : ''} w-full block sm:hidden p-6`}>
      <div className="flex gap-6 container mx-auto">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Title></Title>
            <div className="flex-1">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div>
              <NavLinks closeMenu={setOpen} clss="mob-menus" />
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex-3 flex items-center justify-end">
          <Searchbox />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <BuscketIcon />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
