/* eslint-disable react/no-unescaped-entities */
import ExportedImage from 'next-image-export-optimizer';
import aboutMe from '../../../public/images/aboutMe.jpg';
import { LinkPageButton } from '../components/ui/Buttons';

export const metadata = {
  title: 'A propos de moi - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Découvrez le parcours de Caroline Gaillard, kinésiologue certifiée à Lyon. Caroline vous accompagne avec bienveillance dans votre chemin vers le mieux-être grâce à la kinésiologie.',
};

const AboutMe = () => {
  return (
    <main className="aboutMe">
      <h1 className="aboutMe__title">À propos de moi</h1>
      <section className="aboutMe__describ">
        <h2 className="aboutMe__describ__title">
          Quelques mots sur mon parcours
        </h2>
        <figure className="aboutMe__describ__figure">
          <ExportedImage
            className="aboutMe__describ__figure__image"
            src={aboutMe}
            alt="portrait de caroline gaillard sourillante"
          />
          <figcaption className="aboutMe__describ__figure__figcaption">
            Caroline Gaillard
          </figcaption>
        </figure>
        <p className="aboutMe__describ__text">
          De formation scientifique, j'ai travaillé pendant plus de 20 ans dans
          la fonction publique territoriale dans le domaine{' '}
          <strong>médico-social</strong> puis dans le domaine des{' '}
          <strong>ressources humaines</strong>. J'ai découvert la{' '}
          <strong>kinésiologie</strong> lors d'une situation professionnelle
          difficile. Cette méthode m'a permis de clarifier mes questionnements
          sur ce que je voulais et sur ce que je ne voulais plus, de faire des
          choix et de prendre des décisions <strong>salutaires</strong> pour
          moi. J'ai été impressionnée par ses effets{' '}
          <strong>libérateurs</strong> et porteurs de{' '}
          <strong>changements positifs</strong> dans mon quotidien. À la suite
          de quoi tout s'est enchaîné très vite. <strong>Convaincue</strong> par
          la pratique pleine de sens pour moi, que tout est possible et d'avoir
          enfin trouvé ma voie, j'ai entamé une{' '}
          <strong>reconversion professionnelle</strong>. Après plus de{' '}
          <strong>620 heures de formation</strong>, je suis aujourd'hui{' '}
          <strong>kinésiologue certifiée</strong> et j'ai ouvert mon{' '}
          <strong>cabinet à Lyon</strong>. Je suis <strong>comblée</strong> et{' '}
          <strong>passionnée</strong> par mon travail porteur de changements{' '}
          <strong>profonds</strong> et <strong>durables</strong>. Je suis
          heureuse de vous accompagner grâce à la kinésiologie dans votre
          processus de <strong>libération personnelle</strong> pour vous
          permettre de vous <strong>épanouir</strong> et de{' '}
          <strong>vivre pleinement</strong>.
        </p>
      </section>
      <section className="aboutMe__approach">
        <h2 className="aboutMe__approach__title">
          Quelques mots sur mon approche
        </h2>
        <p className="aboutMe__approach__text">
          Chaque personne est unique, avec son propre parcours et son vécu
          singulier. Parmi celles que j'accompagne, certaines traversent des
          périodes de grands doutes, de dépression, se sentent dépourvues
          d'envie, épuisées, au bout du rouleau. D'autres se trouvent à la
          croisée des chemins, incertaines du trajet à prendre, tandis que
          certaines aspirent au changement sans parvenir à le concrétiser... Les
          motifs sont variés. Vous entrez dans ce processus de transformation
          tel que vous êtes, et je m'ajuste à votre réalité, à l'endroit où vous
          vous trouvez actuellement en toute bienveillance. Mon approche
          consiste à vous écouter attentivement, à vous proposer un
          accompagnement sur mesure, et à progresser ensemble à votre propre
          rythme. L'accompagnement en kinésiologie que je propose est toujours
          individuel et personnalisé. Au fil du parcours, nous adaptons notre
          démarche en fonction de vos besoins et des découvertes que vous
          faites. Cet accompagnement se concentre sur vous, favorise la
          progression, stimule l'action, et vous permet d'atteindre vos
          objectifs à votre rythme.
        </p>
      </section>
      <LinkPageButton
        className={'aboutMe__contact'}
        href={'/deroulement-des-seances'}
        text={'Déroulement des séances'}
      />
      <LinkPageButton
        className={'aboutMe__contact'}
        href={'/tarif-et-contact'}
        text={'Prendre rendez-vous'}
      />
    </main>
  );
};

export default AboutMe;
