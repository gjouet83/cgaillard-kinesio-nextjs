import { BurgerMenuButton } from '../components/Buttons';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__title__name">Caroline Gaillard</span>
        <span className="header__title__job">Kinésiologue</span>
      </h1>
      <BurgerMenuButton />
      <Navbar />
    </header>
  );
};

export default Header;
