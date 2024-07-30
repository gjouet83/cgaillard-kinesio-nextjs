'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import BurgerMenuButton from './Buttons';

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <BurgerMenuButton open={open} setOpen={setOpen} />
    </>
  );
}
