/* eslint-disable react/no-unescaped-entities */
'use client';
import ExportedImage from 'next-image-export-optimizer';
import Firstsession from '../../../../public/images/first-session.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SecondSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 50,
      once: true,
      duration: 1000,
    });
  });
  return (
    <section className="approach__session">
      <h2 className="approach__session__title">La première séance</h2>
      <div
        data-aos="flip-right"
        className="approach__session__imageContainer disable-aos-mobile"
      >
        <ExportedImage
          className="approach__session__imageContainer__image"
          src={Firstsession}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="une dame alongée les yeux fermé avec les mains d'un homme posées sur son front"
        />
      </div>
      <div data-aos="fade-left" className="approach__session__textContainer">
        La première séance suit 4 temps forts :
        <ul className="approach__session__textContainer__list">
          <li className="approach__session__textContainer__list__item">
            Un temps d’échange sur votre problématique et sa manifestation
            aujourd'hui sur le plan émotionnel, physique et énergétique et sur
            la détermination de votre objectif de séance.
          </li>
          <li className="approach__session__textContainer__list__item">
            Une phase d’identification de la cause des blocages internes.
          </li>
          <li className="approach__session__textContainer__list__item">
            Une phase d’équilibrage énergétique des blocages identifiés parmi
            les protocoles de <strong>kinésiologie.</strong>
          </li>
          <li className="approach__session__textContainer__list__item">
            Un temps d’échange sur la séance et explication d’un éventuel
            ancrage afin d’optimiser l’intégration de ces rééquilibrations dans
            le temps.
          </li>
        </ul>
        <p className="approach__session__textContainer__text">
          Si le déroulement d’une séance est le même, son contenu et les
          équilibrations sont personnalisées. C’est un travail sur mesure adapté
          à vos besoins du moment. Mon objectif est de vous aider à vous sentir
          mieux rapidement. Le choix de prendre un nouveau rendez-vous vous
          appartient, vous êtes acteur.trice de votre changement. "Je vous aide
          à monter sur votre vélo, c'est bien vous qui pédalez". Vous êtes donc
          libre soit de mettre en pause votre accompagnement, soit de le
          prolonger soit de l’arrêter.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
