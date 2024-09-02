'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import { BurgerMenuButton } from '../ui/Buttons';
import ExportedImage from 'next-image-export-optimizer';
import logo from '../../../../public/images/logo.webp';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__title">
        <ExportedImage
          src={logo}
          width={150}
          height={150}
          alt="logo"
          className="header__logo"
        />
        <div className="header__title__text">
          <span className="header__title__text__name">Caroline Gaillard</span>
          <span className="header__title__text__job">Kinésiologue</span>
        </div>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <BurgerMenuButton open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
