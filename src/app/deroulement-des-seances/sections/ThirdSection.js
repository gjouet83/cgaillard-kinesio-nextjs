/* eslint-disable react/no-unescaped-entities */
'use client';
import ExportedImage from 'next-image-export-optimizer';
import Renew from '../../../../public/images/renew.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ThirdSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 50,
      once: true,
      duration: 1000,
    });
  });
  return (
    <section className="approach__regularity">
      <h2 className="approach__regularity__title">
        La régularité au cœur de l'accompagnement
      </h2>
      <div
        data-aos="flip-right"
        className="approach__regularity__imageContainer disable-aos-mobile"
      >
        <ExportedImage
          className="approach__regularity__imageContainer__image"
          src={Renew}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="une personne qui tient un papier sur lequel est inscrit renew au dessus d'un agenda"
        />
      </div>
      <div data-aos="fade-left" className="approach__regularity__textContainer">
        <p>
          Chaque séance est une invitation à être plus conscient de votre
          conscience, plus conscient de votre subconscient, plus conscient de
          votre corps. C'est aussi un moment pour vous de poser une action
          concrète dans votre quotidien pour vous approprier ce changement : un
          nouveau choix, une nouvelle direction, un nouveau comportement. Quel
          que soit le projet mené dans la vie, la régularité est au cœur de la
          réussite. Il est donc essentiel pour obtenir des résultats profonds et
          durables de vous observer dans les jours qui suivent la séance,
          d'écouter, de voir, de ressentir ce qui se passe à l'extérieur et ce
          qui se passe à l'intérieur de vous. Si c'est Ok, c'est que vous êtes
          au bon endroit. Sinon, le travail est à approfondir et à consolider.
          Chaque séance doit être espacée de 3 semaines pour laisser le temps
          nécessaire au corps d'intégrer ce qui a été apporté par la séance.
        </p>
      </div>
    </section>
  );
};

export default ThirdSection;
