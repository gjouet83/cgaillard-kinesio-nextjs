/* eslint-disable react/no-unescaped-entities */
import ExportedImage from 'next-image-export-optimizer';
import Phone from '../../../public/images/phone.jpg';
import Firstsession from '../../../public/images/firstsession.jpg';
import Evolution from '../../../public/images/grow.jpg';
import Renew from '../../../public/images/renew.jpg';
import { LinkPageButton } from '../components/ui/Buttons';

export const metadata = {
  title: 'A propos de moi - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard vous accueille dans son cabinet de kinésiologie à Lyon Croix Rousse',
};
const MonApproche = () => {
  return (
    <main className="approach">
      <h1 className="approach__title">Déroulement des séances</h1>
      <section className="approach__call">
        <h2 className="approach__call__title">
          L'appel téléphonique : Non obligatoire pour les adultes mais pas
          inutile !
        </h2>
        <div className="approach__call__imageContainer">
          <ExportedImage
            className="approach__call__imageContainer__image"
            src={Phone}
            sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
            alt="un combiné de téléphone"
            priority
          />
        </div>
        <div className="approach__call__textContainer">
          <p>
            Cet appel permet : à vous d'exposer rapidement votre problématique
            et à moi de vous expliquer brièvement mon approche. Cet échange peut
            être l'occasion pour vous de ressentir si vous souhaitez entamer ce
            travail avec moi ou non. Ne vous en privez pas ! Pour les enfants de
            moins de 12 ans, la programmation d’une séance devra
            systématiquement être précédée par ce temps d’échange. Il est très
            important que le feeling passe entre le thérapeute et son client, il
            serait contre-productif de venir en séance à reculons.
          </p>
        </div>
      </section>
      <section className="approach__session">
        <h2 className="approach__session__title">La première séance</h2>
        <div className="approach__session__imageContainer">
          <ExportedImage
            className="approach__session__imageContainer__image"
            src={Firstsession}
            sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
            alt="deux personne assises en taiileur et se touchant la main"
          />
        </div>
        <div className="approach__session__textContainer">
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
              les protocoles de kinésiologie.
            </li>
            <li className="approach__session__textContainer__list__item">
              Un temps d’échange sur la séance et explication d’un éventuel
              ancrage afin d’optimiser l’intégration de ces rééquilibrations
              dans le temps.
            </li>
          </ul>
          <p className="approach__session__textContainer__text">
            Si le déroulement d’une séance est le même, son contenu et les
            équilibrations sont personnalisées. C’est un travail sur mesure
            adapté à vos besoins du moment. Mon objectif est de vous aider à
            vous sentir mieux rapidement. Le choix de prendre un nouveau
            rendez-vous vous appartient, vous êtes acteur.trice de votre
            changement. "Je vous aide à monter sur votre vélo, c'est bien vous
            qui pédalez". Vous êtes donc libre soit de mettre en pause votre
            accompagnement, soit de le prolonger soit de l’arrêter.
          </p>
        </div>
      </section>
      <section className="approach__regularity">
        <h2 className="approach__regularity__title">
          La régularité au cœur de l'accompagnement
        </h2>
        <div className="approach__regularity__imageContainer">
          <ExportedImage
            className="approach__regularity__imageContainer__image"
            src={Renew}
            sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
            alt="une personne qui tient un papier sur lequel est inscrit renew au dessus d'un agenda"
          />
        </div>
        <div className="approach__regularity__textContainer">
          <p>
            Chaque séance est une invitation à être plus conscient de votre
            conscience, plus conscient de votre subconscient, plus conscient de
            votre corps. C'est aussi un moment pour vous de poser une action
            concrète dans votre quotidien pour vous approprier ce changement :
            un nouveau choix, une nouvelle direction, un nouveau comportement.
            Quel que soit le projet mené dans la vie, la régularité est au cœur
            de la réussite. Il est donc essentiel pour obtenir des résultats
            profonds et durables de vous observer dans les jours qui suivent la
            séance, d'écouter, de voir, de ressentir ce qui se passe à
            l'extérieur et ce qui se passe à l'intérieur de vous. Si c'est Ok,
            c'est que vous êtes au bon endroit. Sinon, le travail est à
            approfondir et à consolider. Chaque séance doit être espacée de 3
            semaines pour laisser le temps nécessaire au corps d'intégrer ce qui
            a été apporté par la séance.
          </p>
        </div>
      </section>
      <section className="approach__evolution">
        <h2 className="approach__evolution__title">
          Évolution de notre travail ensemble
        </h2>
        <div className="approach__evolution__imageContainer">
          <ExportedImage
            className="approach__evolution__imageContainer__image"
            src={Evolution}
            sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
            alt="les différentes étapes de l'évolution d'une plante a partir de la graine"
          />
        </div>
        <div className="approach__evolution__textContainer">
          <p>
            Plusieurs séances sont nécessaires pour garantir une transformation
            durable. Ici la performance n'a pas sa place. Chacun conscientise,
            assimile ce qui doit l'être et se transforme à son rythme.
            Rappelez-vous ceci, combien de temps faut-il à un enfant pour
            apprendre à marcher, combien de chutes lui faut-il pour apprendre à
            trouver l'équilibre.... Il est important de retenir ceci, il a
            persévéré dans son apprentissage. Il a franchi des étapes pour enfin
            se tenir droit et marcher progressivement de plus en plus
            facilement. Au fil des séances, vous ressentirez progressivement une
            amélioration de votre bien-être. Ce processus peut être plus ou
            moins long. Même si parfois la kinésiologie surprend, elle n’est pas
            magique ! Je suis là pour vous accompagner dans votre processus de
            libération personnelle, et si je sème les graines d’un mieux être,
            vous demeurez le jardinier de votre propre jardin intérieur.
          </p>
        </div>
      </section>

      <LinkPageButton
        className={'approach'}
        href={'/a-propos-de-moi'}
        text={'A propos de moi'}
      />
      <LinkPageButton
        className={'approach__contact'}
        href={'/tarif-et-contact'}
        text={'Prendre rendez-vous'}
      />
    </main>
  );
};

export default MonApproche;
