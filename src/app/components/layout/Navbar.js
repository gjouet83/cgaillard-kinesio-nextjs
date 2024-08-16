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
          <Link href="/mon-approche" onClick={() => setOpen(false)}>
            Mon Approche
          </Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/aboutMe" onClick={() => setOpen(false)}>
            À propos de moi
          </Link>
        </li>
        <li className={`navbar__list__element ${open && 'textOpacity'}`}>
          <Link href="/pricing-contact" onClick={() => setOpen(false)}>
            Tarifs &amp; Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
