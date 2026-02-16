'use client';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Menu from './Menu';
import { Title } from '@radix-ui/react-dialog';
import Logo from './Logo';
import Searchbox from './Searchbox';
import BuscketIcon from './Buscket';
import NavLinks from './NavLinks';
import { useState } from 'react';

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" w-full block sm:hidden">
      <div className="flex gap-6 container mx-auto">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Title></Title>
            <div className="flex-1">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="relative">
              <NavLinks closeMenu={setOpen} />
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex-5 flex justify-end items-center">
          <Logo height={190} width={200} />
        </div>
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
