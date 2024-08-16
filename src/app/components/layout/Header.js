'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Navbar from './Navbar';
import { BurgerMenuButton } from '../ui/Buttons';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      {pathname === '/' ? (
        <h1 className="header__title">
          <span className="header__title__name">Caroline Gaillard</span>
          <span className="header__title__job">Kinésiologue</span>
        </h1>
      ) : (
        <div className="header__title">
          <span className="header__title__name">Caroline Gaillard</span>
          <span className="header__title__job">Kinésiologue</span>
        </div>
      )}

      <Navbar open={open} setOpen={setOpen} />
      <BurgerMenuButton open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
