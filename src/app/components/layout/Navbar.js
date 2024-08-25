/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Navbar({ open, setOpen }) {
  return (
    <nav className={`navbar ${open && 'open'}`}>
      <ul className={`navbar__list ${open && 'textOpacity'}`}>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/deroulement-des-seances" onClick={() => setOpen(false)}>
            Déroulement des séances
          </Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/a-propos-de-moi" onClick={() => setOpen(false)}>
            À propos de moi
          </Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/tarif-et-contact" onClick={() => setOpen(false)}>
            Tarif &amp; Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
