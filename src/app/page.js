/* eslint-disable react/no-unescaped-entities */
import { LinkPageButton } from './components/ui/Buttons';
import GoogleReviews from './index/sections/GoogleReviews';
import Hero from './index/sections/Hero';
import Why from './index/sections/Why';
import Accompaniment from './index/sections/Accompaniment';
import Profits from './index/sections/Profits';

export const metadata = {
  title: 'Accueil - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard, kinésiologue à Lyon, propose des séances pour améliorer votre bien-être physique et émotionnel. Prenez rendez-vous aujourd’hui.',
};
const Home = () => {
  return (
    <main className="home">
      <Hero />
      <LinkPageButton
        className={'home__hero__contact'}
        href={'/tarif-et-contact'}
        text={'Prendre rendez-vous'}
      />
      <Why />
      <Accompaniment />
      <LinkPageButton
        className={'home'}
        href={'/deroulement-des-seances'}
        text={'Déroulement des séances'}
      />
      <Profits />
      <LinkPageButton
        className={'home'}
        href={'/a-propos-de-moi'}
        text={'A propos de moi'}
      />
      <GoogleReviews />
    </main>
  );
};
export default Home;
