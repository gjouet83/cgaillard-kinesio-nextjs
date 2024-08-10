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
          <Link href="/mon-approche">Mon Approche</Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/aboutMe">À propos de moi</Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/pricing-contact">Tarifs &amp; Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
