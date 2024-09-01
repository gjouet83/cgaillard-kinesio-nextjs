/* eslint-disable react/no-unescaped-entities */
'use client';
import ExportedImage from 'next-image-export-optimizer';
import seatOnTheBeach from '../../../../public/images/seatOnBeach.jpg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Profits = () => {
  useEffect(() => {
    Aos.init({
      offset: 50,
      once: true,
    });
  }, []);
  return (
    <section className="home__profits">
      <div
        data-aos="flip-right"
        data-aos-offset="500"
        className="home__profits__container disable-aos-mobile"
      >
        <ExportedImage
          className="home__profits__container__image"
          src={seatOnTheBeach}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="siège suspendu a une branche d'arbre sur une plage"
          loading="lazy"
        />
      </div>
      <h2 className="home__profits__title">
        Quels sont les bienfaits de la kinésiologie ?
      </h2>
      <div className="home__profits__textContainer">
        <ul className="home__profits__textContainer__list">
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Tout est plus clair pour vous, vous savez désormais où aller et
            comment faire.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Plus <strong>confiant.e</strong>, vous avancez avec{' '}
            <strong>assurance</strong>.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            <strong>Reboosté.e</strong>, vous êtes à nouveau{' '}
            <strong>plein.e d'énergie</strong> et d'allant.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Libéré.e de vos <strong>angoisses</strong>, vous êtes plus{' '}
            <strong>détendu.e</strong>.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            <strong>Libéré.e</strong> de votre <strong>stress</strong>, vous
            êtes bien dans votre tête et dans votre corps.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Vos émotions prennent moins de place dans votre vie, vous vous
            sentez plus <strong>apaisé.e</strong>.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Libéré.e du poids du passé, vous vous sentez enfin en paix.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Comprendre, apprendre devient plus fluide et motivant. Vos
            apprentissages et l'aboutissement de vos projets sont facilités.
          </li>
          <li
            data-aos="fade-right"
            className="home__profits__textContainer__list__element"
          >
            Vous retrouvez l'<strong>équilibre dans votre vie</strong>. Le{' '}
            <strong>bien-être</strong> s'installe.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Profits;
