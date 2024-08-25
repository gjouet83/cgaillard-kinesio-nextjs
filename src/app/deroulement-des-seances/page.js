/* eslint-disable react/no-unescaped-entities */
import { LinkPageButton } from '../components/ui/Buttons';
const MonApproche = () => {
  return (
    <main className="approach">
      <h1 className="approach__title">Déroulement des séances</h1>
      <h2 className="approach__subtitle">
        L'appel téléphonique : Non obligatoire pour les adultes mais pas inutile
        !
      </h2>
      <p>
        Cet appel permet : à vous d'exposer rapidement votre problématique et à
        moi de vous expliquer brièvement mon approche. Cet échange peut être
        l'occasion pour vous de ressentir si vous souhaitez entamer ce travail
        avec moi ou non. Ne vous en privez pas ! Pour les enfants de moins de 12
        ans, la programmation d’une séance devra systématiquement être précédée
        par ce temps d’échange. Il est très important que le feeling passe entre
        le thérapeute et son client, il serait contre-productif de venir en
        séance à reculons.
      </p>
      <h2>La première séance</h2>
      <p>
        La première séance suit 4 temps forts : Un temps d’échange sur votre
        problématique et sa manifestation aujourd'hui sur le plan émotionnel,
        physique et énergétique et sur la détermination de votre objectif de
        séance. Une phase d’identification de la cause des blocages internes.
        Une phase d’équilibrage énergétique des blocages identifiés parmi les
        protocoles de kinésiologie. Un temps d’échange sur la séance et
        explication d’un éventuel ancrage afin d’optimiser l’intégration de ces
        rééquilibrations dans le temps. Si le déroulement d’une séance est le
        même, son contenu et les équilibrations sont personnalisées. C’est un
        travail sur mesure adapté à vos besoins du moment. Mon objectif est de
        vous aider à vous sentir mieux rapidement. Le choix de prendre un
        nouveau rendez-vous vous appartient, vous êtes acteur.trice de votre
        changement. "Je vous aide à monter sur votre vélo, c'est bien vous qui
        pédalez". Vous êtes donc libre soit de mettre en pause votre
        accompagnement, soit de le prolonger soit de l’arrêter.
      </p>
      <h2>La régularité au cœur de l'accompagnement</h2>
      <p>
        Chaque séance est une invitation à être plus conscient de votre
        conscience, plus conscient de votre subconscient, plus conscient de
        votre corps. C'est aussi un moment pour vous de poser une action
        concrète dans votre quotidien pour vous approprier ce changement : un
        nouveau choix, une nouvelle direction, un nouveau comportement. Quel que
        soit le projet mené dans la vie, la régularité est au cœur de la
        réussite. Il est donc essentiel pour obtenir des résultats profonds et
        durables de vous observer dans les jours qui suivent la séance,
        d'écouter, de voir, de ressentir ce qui se passe à l'extérieur et ce qui
        se passe à l'intérieur de vous. Si c'est Ok, c'est que vous êtes au bon
        endroit. Sinon, le travail est à approfondir et à consolider. Chaque
        séance doit être espacée de 3 semaines pour laisser le temps nécessaire
        au corps d'intégrer ce qui a été apporté par la séance.
      </p>

      <h2>Évolution de notre travail ensemble </h2>
      <p>
        Plusieurs séances sont nécessaires pour garantir une transformation
        durable. Ici la performance n'a pas sa place. Chacun conscientise,
        assimile ce qui doit l'être et se transforme à son rythme. Rappelez-vous
        ceci, combien de temps faut-il à un enfant pour apprendre à marcher,
        combien de chutes lui faut-il pour apprendre à trouver l'équilibre....
        Il est important de retenir ceci, il a persévéré dans son apprentissage.
        Il a franchi des étapes pour enfin se tenir droit et marcher
        progressivement de plus en plus facilement. Au fil des séances, vous
        ressentirez progressivement une amélioration de votre bien-être. Ce
        processus peut être plus ou moins long. Même si parfois la kinésiologie
        surprend, elle n’est pas magique ! Je suis là pour vous accompagner dans
        votre processus de libération personnelle, et si je sème les graines
        d’un mieux être, vous demeurez le jardinier de votre propre jardin
        intérieur.
      </p>
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
