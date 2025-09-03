/* eslint-disable react/no-unescaped-entities */

import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import ForthSection from './sections/ForthSection';
import { LinkPageButton } from '../components/ui/Buttons';

export const metadata = {
  title: 'Déroulement des séances - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    "Explorez le contenu d'une séance dispensée par Caroline Gaillard. Découvrez les sujets abordés, les techniques utilisées et les bénéfices pour votre bien-être.",
  alternates: {
    canonical: `${process.env.PRODUCTION_WEBSITE_URL}/deroulement-des-seances/`,
  },
};
const MonApproche = () => {
  return (
    <main className="approach">
      <h1 className="approach__title">Déroulement des séances</h1>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />

      <section className="approach__links">
        <LinkPageButton
          className={'approach'}
          href={'/a-propos-de-moi'}
          text={'A propos de moi'}
        />
        <LinkPageButton
          className={'approach__contact'}
          href={'https://www.crenolibre.fr/prendre-rdv/146411_gaillard'}
          text={'Prendre rendez-vous'}
          target={'_blank'}
        />
      </section>
    </main>
  );
};

export default MonApproche;
