/* eslint-disable react/no-unescaped-entities */
import '../styles/main.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
