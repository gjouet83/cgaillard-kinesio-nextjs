/* eslint-disable react/no-unescaped-entities */
import { LinkPageButton } from '../components/ui/Buttons';
const MonApproche = () => {
  return (
    <main className="approach">
      <h1 className="approach__title">Mon Approche</h1>
      <h2 className="approach__subtitle">Quelques mots sur mon approche</h2>
      <p>
        Chaque personne est unique, avec son propre parcours et son vécu
        singulier. Parmi celles que j'accompagne, certaines traversent des
        périodes de grands doutes, de dépression, se sentent dépourvues d'envie,
        épuisées, au bout du rouleau. D'autres se trouvent à la croisée des
        chemins, incertaines du trajet à prendre, tandis que certaines aspirent
        au changement sans parvenir à le concrétiser... Les motifs sont variés.
        Vous entrez dans ce processus de transformation tel que vous êtes, et je
        m'ajuste à votre réalité, à l'endroit où vous vous trouvez actuellement
        en toute bienveillance. Mon approche consiste à vous écouter
        attentivement, à vous proposer un accompagnement sur mesure, et à
        progresser ensemble à votre propre rythme. L'accompagnement en
        kinésiologie que je propose est toujours individuel et personnalisé. Au
        fil du parcours, nous adaptons notre démarche en fonction de vos besoins
        et des découvertes que vous faites. Cet accompagnement se concentre sur
        vous, favorise la progression, stimule l'action, et vous permet
        d'atteindre vos objectifs à votre rythme.
      </p>
      <LinkPageButton
        className={'approach'}
        href={'/tarif-et-contact'}
        text={'Prendre rendez-vous'}
      />
    </main>
  );
};

export default MonApproche;
