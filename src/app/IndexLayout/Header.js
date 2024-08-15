'use client';
import Menu from '../components/Menu';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
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

      <Menu />
    </header>
  );
};

export default Header;
