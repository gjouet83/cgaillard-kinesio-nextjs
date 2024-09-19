/* eslint-disable react/no-unescaped-entities */

import ExportedImage from 'next-image-export-optimizer';
import fingerTouch from '../../../../public/images/fingerTouch.jpg';

const Accompaniment = () => {
  return (
    <section className="home__accompaniment">
      <div
        data-aos="flip-right"
        data-aos-offset="500"
        data-aos-disable="mobile"
        className="home__accompaniment__container disable-aos-mobile"
      >
        <ExportedImage
          className="home__accompaniment__container__image"
          src={fingerTouch}
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          alt="deux mains qui se rapproche et qui se touchent l'index"
          loading="lazy"
        />
      </div>
      <h2 className="home__accompaniment__title">
        L'accompagnement en kinésiologie : la clé du changement.
      </h2>
      <div className="home__accompaniment__textContainer">
        <ul className="home__accompaniment__textContainer__list">
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Chaque difficulté rencontrée dans la vie est{' '}
            <strong>une invitation au changement</strong>.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Chaque problème a une solution.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Tout changement profond et durable est possible.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Il est fréquent d'hésiter.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"Mon problème n'est pas important..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"J'embête tout le monde avec mes soucis..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"Je ne saurais pas quoi dire..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"Je n'ai pas le temps..."; "Ce n'est pas si grave..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"Je n'y arriverai pas..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            <em>"J'ai honte..."; "J'ai peur..."</em>
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Attendre trop longtemps avant de demander de l'aide peut prolonger
            la
            <strong> souffrance </strong>inutilement.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            Clarifier ce qui est vécu et ressenti permet de mettre en place de
            nouvelles choses, d'amorcer un <strong>changement </strong>plus
            juste et essentiel , de se remettre en mouvement.
          </li>
          <li
            data-aos="fade-left"
            className="home__accompaniment__textContainer__list__element"
          >
            N'oubliez pas que <strong>demander de l'aide </strong>n'est pas un{' '}
            signe de faiblesse, mais plutôt une démonstration de force et de{' '}
            <strong>volonté d'amélioration personnelle.</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Accompaniment;
