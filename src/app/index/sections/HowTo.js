/* eslint-disable react/no-unescaped-entities */
'use client';
import { LinkPageButton } from '../../components/ui/Buttons';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowTo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      once: true,
    });
  }, []);
  return (
    <section className="home__howTo">
      <h2 className="home__howTo__title">
        Bonjour, je m'appelle Caroline Gaillard et je suis kinésiologue
        certifiée à <strong> Lyon dans le quartier de la croix rousse .</strong>
      </h2>
      <p className="home__howTo__text">
        Je vous accueille dans mon cabinet, dans un espace propice à l’écoute et
        à la <strong>bienveillance</strong>. Au cours de la séance, nous
        explorons à votre rythme les aspects de votre vie qui nécessitent une
        attention particulière. Je vous invite à accueillir pleinement toutes
        les parties de vous pour vous permettre de clarifier ce que vous vivez.
        Je vous accompagne dans ce que vous souhaitez mettre en place pour vous,
        qui vous semble juste et essentiel.
      </p>
      <aside data-aos="fade-right" className="home__howTo__aside">
        <p>
          <strong>La kinésiologie</strong> (qui signifie étymologiquement « la
          science du mouvement ») est une technique de rééquilibrage
          psycho-corporelle.
          <br />
          - Elle s’attache au bien être global de la personne, tant au niveau
          physique, émotionnel, mental et énergétique.
          <br />
          - Elle est basée sur l’utilisation du test musculaire qui permet un
          dialogue avec le corps afin d’identifier des causes de conflits et
          blocages internes, conscients ou non, qui provoquent des tensions des
          comportements inadaptés.
          <br />- Le but est de libérer le stress rencontré.
        </p>
      </aside>
      <LinkPageButton
        className={'home__howTo__toAboutMe'}
        href={'/a-propos-de-moi'}
        text={'A propos de moi'}
      />
    </section>
  );
};
export default HowTo;
