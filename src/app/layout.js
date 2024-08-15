import '../styles/main.scss';
import Header from './IndexLayout/Header';

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <footer className="footer"></footer>
      </body>
    </html>
  );
};

export default RootLayout;
