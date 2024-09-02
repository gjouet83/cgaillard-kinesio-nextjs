/* eslint-disable react/no-unescaped-entities */
'use client';
import ExportedImage from 'next-image-export-optimizer';
import Evolution from '../../../../public/images/grow.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ForthSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 50,
      once: true,
      duration: 1000,
    });
  });
  return (
    <section className="approach__evolution">
      <h2 className="approach__evolution__title">
        Évolution de notre travail ensemble
      </h2>
      <div
        data-aos="flip-right"
        className="approach__evolution__imageContainer disable-aos-mobile"
      >
        <ExportedImage
          className="approach__evolution__imageContainer__image--no-resize"
          src={Evolution}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="les différentes étapes de l'évolution d'une plante a partir de la graine"
        />
      </div>
      <div data-aos="fade-left" className="approach__evolution__textContainer">
        <p>
          Plusieurs séances sont nécessaires pour garantir une transformation
          durable. Ici la performance n'a pas sa place. Chacun conscientise,
          assimile ce qui doit l'être et se transforme à son rythme.
          Rappelez-vous ceci, combien de temps faut-il à un enfant pour
          apprendre à marcher, combien de chutes lui faut-il pour apprendre à
          trouver l'équilibre.... Il est important de retenir ceci, il a
          persévéré dans son apprentissage. Il a franchi des étapes pour enfin
          se tenir droit et marcher progressivement de plus en plus facilement.
          Au fil des séances, vous ressentirez progressivement une amélioration
          de votre bien-être. Ce processus peut être plus ou moins long. Même si
          parfois la kinésiologie surprend, elle n’est pas magique ! Je suis là
          pour vous accompagner dans votre processus de libération personnelle,
          et si je sème les graines d’un mieux être, vous demeurez le jardinier
          de votre propre jardin intérieur.
        </p>
      </div>
    </section>
  );
};

export default ForthSection;
