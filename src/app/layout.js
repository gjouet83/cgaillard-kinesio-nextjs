import '../styles/main.scss';

import Menu from './components/Menu';

export const metadata = {
  title: 'Accueil - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    "Caroline Gaillard, kinésiologue à Lyon, propose des séances pour améliorer votre bien-être physique et émotionnel. Prenez rendez-vous dès aujourd'hui.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <h1 className="header__title">
            <span className="header__title__name">Caroline Gaillard</span>
            <span className="header__title__job">Kinésiologue</span>
          </h1>
          <Menu />
        </header>
        {children}
        <footer className="footer"></footer>
      </body>
    </html>
  );
}
