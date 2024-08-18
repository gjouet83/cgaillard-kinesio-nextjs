'use client';
import Link from 'next/link';
export function BurgerMenuButton({ open, setOpen }) {
  return (
    <>
      <button
        className="burgerMenuButton"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >
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
      </button>
    </>
  );
}

export function LinkPageButton({ className, href, text }) {
  return (
    <div className={`${className} linkButton`}>
      <Link className={`${className}__link`} href={href}>
        {text}
      </Link>
    </div>
  );
}
