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
        href={'/pricing-contact'}
        text={'Prendre rendez-vous'}
      />
      <Why />
      <Accompaniment />
      <Profits />
      <GoogleReviews />
    </main>
  );
};
export default Home;
