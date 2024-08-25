'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import { BurgerMenuButton } from '../ui/Buttons';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__title">
        <span className="header__title__name">Caroline Gaillard</span>
        <span className="header__title__job">Kinésiologue</span>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <BurgerMenuButton open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
