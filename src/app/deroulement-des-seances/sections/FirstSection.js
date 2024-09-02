/* eslint-disable react/no-unescaped-entities */
'use client';
import ExportedImage from 'next-image-export-optimizer';
import Phone from '../../../../public/images/phone.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FirstSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 50,
      once: true,
      duration: 1000,
    });
  });
  return (
    <section className="approach__call">
      <h2 className="approach__call__title">
        L'appel téléphonique : Non obligatoire pour les adultes mais pas inutile
        !
      </h2>
      <div
        data-aos="flip-right"
        className="approach__call__imageContainer disable-aos-mobile"
      >
        <ExportedImage
          className="approach__call__imageContainer__image"
          src={Phone}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="un combiné de téléphone"
          priority
        />
      </div>
      <div data-aos="fade-left" className="approach__call__textContainer">
        <p>
          Cet appel permet : à vous d'exposer rapidement votre problématique et
          à moi de vous expliquer brièvement mon approche. Cet échange peut être
          l'occasion pour vous de ressentir si vous souhaitez entamer ce travail
          avec moi ou non. Ne vous en privez pas ! Pour les enfants de moins de
          12 ans, la programmation d’une séance devra systématiquement être
          précédée par ce temps d’échange. Il est très important que le feeling
          passe entre le thérapeute et son client, il serait contre-productif de
          venir en séance à reculons.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
