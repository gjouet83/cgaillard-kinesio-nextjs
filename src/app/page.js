/* eslint-disable react/no-unescaped-entities */
import { LinkPageButton } from './components/ui/Buttons';
import GoogleReviews from './index/sections/Reviews';
import Hero from './index/sections/Hero';
import Why from './index/sections/Why';
import Accompaniment from './index/sections/Accompaniment';
import Profits from './index/sections/Profits';
import HowTo from './index/sections/HowTo';

export const metadata = {
  title: 'Accueil - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard, kinésiologue certifiée à Lyon, propose des séances pour améliorer votre bien-être physique et émotionnel. Prenez rendez-vous aujourd’hui.',
  alternates: {
    canonical: `${process.env.PRODUCTION_WEBSITE_URL}`,
  },
};
const Home = () => {
  return (
    <main className="home">
      <Hero />
      <LinkPageButton
        className={'home__hero__contact'}
        href={'https://www.crenolibre.fr/prendre-rdv/146411_gaillard'}
        text={'Prendre rendez-vous'}
        target={'_blank'}
      />
      <HowTo />
      <Why />
      <Accompaniment />
      <LinkPageButton
        className={'home'}
        href={'/deroulement-des-seances'}
        text={'Déroulement des séances'}
      />
      <Profits />
      <LinkPageButton
        className={'home__hero__pricing-contact'}
        href={'/tarif-et-contact'}
        text={'Tarif & Contact'}
      />
      <GoogleReviews />
    </main>
  );
};
export default Home;
