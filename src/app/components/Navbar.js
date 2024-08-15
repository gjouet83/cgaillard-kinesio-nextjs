import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={`navbar `} id="nav">
      <ul className={`navbar__list `}>
        <li className={`navbar__list__element `}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={`navbar__list__element `}>
          <Link href="/mon-approche">Mon Approche</Link>
        </li>
        <li className={`navbar__list__element `}>
          <Link href="/aboutMe">À propos de moi</Link>
        </li>
        <li className={`navbar__list__element `}>
          <Link href="/pricing-contact">Tarifs &amp; Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
