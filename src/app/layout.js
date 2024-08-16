/* eslint-disable react/no-unescaped-entities */
import '../styles/main.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
