import '../styles/main.scss';
import Header from './layout/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <footer className="footer"></footer>
      </body>
    </html>
  );
}
