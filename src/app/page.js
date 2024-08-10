/* eslint-disable react/no-unescaped-entities */
import { MainHome } from './layout/Main';
import { fetchGoogleReviews } from './utils/googleReviews';
export const metadata = {
  title: 'Accueil - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard, kinésiologue à Lyon, propose des séances pour améliorer votre bien-être physique et émotionnel. Prenez rendez-vous aujourd’hui.',
};
const Home = async () => {
  const reviews = await fetchGoogleReviews();
  return (
    <>
      <MainHome reviews={reviews} />
    </>
  );
};

export default Home;
