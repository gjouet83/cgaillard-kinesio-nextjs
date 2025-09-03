'use client';
import Link from 'next/link';
export function BurgerMenuButton({ open, setOpen }) {
  return (
    <>
      <button
        className="burgerMenuButton"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      ></button>
      <div className="burgerMenuButton__burgerMenu">
        <div
          className={`burgerMenuButton__burgerMenu__line one ${
            open && 'rotate-right'
          }`}
        ></div>
        <div
          className={`burgerMenuButton__burgerMenu__line two ${
            open && 'vanish'
          }`}
        ></div>
        <div
          className={`burgerMenuButton__burgerMenu__line three ${
            open && 'rotate-left'
          }`}
        ></div>
      </div>
    </>
  );
}

export function LinkPageButton({ className, href, text, target, rel }) {
  return (
    <div className={`${className} linkButton`}>
      <Link
        className={`${className}__link`}
        href={href}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
      >
        {text}
      </Link>
    </div>
  );
}
