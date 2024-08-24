/* eslint-disable react/no-unescaped-entities */
import ExportedImage from 'next-image-export-optimizer';
import seatOnTheBeach from '../../../../public/images/seatOnBeach.jpg';
const Profits = () => {
  return (
    <section className="home__profits">
      <div className="home__profits__container">
        <ExportedImage
          className="home__profits__container__image"
          src={seatOnTheBeach}
          alt="siège suspendu a une branche d'arbre sur une plage"
          priority
        />
      </div>
      <h2 className="home__profits__title">
        L'accompagnement en kinésiologie : la clé du changement.
      </h2>
      <div className="home__profits__textContainer">
        <ul className="home__profits__textContainer__list">
          <li className="home__profits__textContainer__list__element">
            <strong>Chaque</strong> <strong>difficulté</strong> rencontrée dans
            la vie est <strong>une invitation au changement</strong>.
          </li>
          <li className="home__profits__textContainer__list__element">
            Chaque problème a <strong>une solution</strong>
          </li>
          <li className="home__profits__textContainer__list__element">
            Tout changement profond et durable est <strong>possible</strong>.
          </li>
          <li className="home__profits__textContainer__list__element">
            Il est fréquent d'<strong>hésiter </strong>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"Mon problème n'est pas important..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"J'embête tout le monde avec mes soucis..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"Je ne saurais pas quoi dire..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"Je n'ai pas le temps..."; "Ce n'est pas si grave..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"Je n'y arriverai pas..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <em>"J'ai honte..."; "J'ai peur..."</em>
          </li>
          <li className="home__profits__textContainer__list__element">
            <strong>Attendre </strong>trop longtemps avant de demander de l'aide
            peut prolonger<strong>la souffrance inutilement</strong>
          </li>
          <li className="home__profits__textContainer__list__element">
            <strong>Clarifier </strong>ce qui est <strong>vécu </strong>et
            <strong>ressenti </strong>permet de mettre en place de
            <strong>nouvelles choses</strong>, d'amorcer un
            <strong>changement </strong>plus juste et
            <strong>essentiel</strong>, de se remettre en
            <strong>mouvement.</strong>
          </li>
          <li className="home__profits__textContainer__list__element">
            N'oubliez pas que<strong>demander de l'aide</strong>n'est pas un
            signe de faiblesse, mais plutôt une
            <strong>démonstration de force</strong>et de
            <strong>volonté d'amélioration personnelle</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Profits;
