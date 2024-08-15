/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { LinkPageButton } from './components/Buttons';
import fetchGoogleReviews from './utils/googleReviews';
export const metadata = {
  title: 'Accueil - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard, kinésiologue à Lyon, propose des séances pour améliorer votre bien-être physique et émotionnel. Prenez rendez-vous aujourd’hui.',
};
const Home = async () => {
  const reviews = await fetchGoogleReviews();
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero__container">
          <Image
            className="home__hero__container__image"
            src="/hero.jpg"
            fill
            sizes="(max-width: 321px) 320px, (max-width: 481px) 480px, (max-width: 641px) 640px, 800px"
            alt="cerisiers en fleurs"
            priority
          />
        </div>
        <h2 className="home__hero__herotitle">
          Retrouvez l'équilibre dans votre vie grâce a la kinésiologie
        </h2>
        <h3 className="home__hero__herosubtitle">
          Permettez à votre corps de se libérer afin d’amorcer les bases d’un
          nouvel horizon et de reconquérir votre force intérieure.
        </h3>
      </section>
      <LinkPageButton />
      <section className="home__why">
        <div className="home__why__container">
          <Image
            className="home__why__container__image"
            src="/beach.jpg"
            width={330}
            height={496}
            sizes="(max-width: 321px) 320px, (max-width: 481px) 480px, (max-width: 641px) 640px, 800px"
            alt="plage en contre-jour avec une silhouette au loin"
          />
        </div>
        <h2 className="home__why__title">
          Pour quelles raisons consulter une kinésiologue ?
        </h2>
        <ul className="home__why__list">
          <li className="home__why__list__element">
            <strong>Plein.e de doutes</strong>, vous trouvez difficile de{' '}
            <strong>faire des choix</strong> et de{' '}
            <strong>prendre des décisions</strong>.
          </li>
          <li className="home__why__list__element">
            <strong>Perdu.e</strong>, vous ne savez pas comment vous en sortir.
          </li>
          <li className="home__why__list__element">
            Vous vous sentez <strong>vidé.e</strong> et sans envie, et vous êtes{' '}
            <strong>angoissé.e</strong> sans comprendre pourquoi.
          </li>
          <li className="home__why__list__element">
            Le <strong>stress</strong> se manifeste dans votre corps : une boule
            au ventre, la poitrine serrée, une impression d'étouffer et des
            tensions musculaires.
          </li>
          <li className="home__why__list__element">
            Vous souffrez d'<strong>addictions</strong> et avez du mal à dormir,
            ce qui vous laisse épuisé.e mentalement et physiquement.
          </li>
          <li className="home__why__list__element">
            Gérer vos <strong>émotions</strong> est un défi quotidien, et vous
            êtes à fleur de peau.
          </li>
          <li className="home__why__list__element">
            Un événement <strong>traumatisant</strong> du passé, comme un deuil,
            une séparation ou un harcèlement, vous pèse encore lourdement.
          </li>
          <li className="home__why__list__element">
            Vous avez des difficultés à vous <strong>concentrer</strong>, ce qui
            entrave vos apprentissages.
          </li>
        </ul>
      </section>
      <section className="home__accompaniment">
        <div className="home__accompaniment__container">
          <Image
            className="home__accompaniment__container__image"
            src="/fingerTouch.jpg"
            width={330}
            height={496}
            sizes="(max-width: 321px) 320px, (max-width: 481px) 480px, (max-width: 641px) 640px, 800px"
            alt="plage en contre-jour avec une silhouette au loin"
          />
        </div>
        <h2 className="home__accompaniment__title">
          L'accompagnement en kinésiologie : la clé du changement.
        </h2>
        <div className="home__accompaniment__textContainer">
          <ul className="home__accompaniment__textContainer__list">
            <li className="home__accompaniment__textContainer__list__element">
              <strong>Chaque</strong> <strong>difficulté</strong> rencontrée
              dans la vie est <strong>une invitation au changement</strong>.
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              Chaque problème a <strong>une solution</strong>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              Tout changement profond et durable est <strong>possible</strong>.
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              Il est fréquent d'<strong>hésiter </strong>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"Mon problème n'est pas important..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"J'embête tout le monde avec mes soucis..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"Je ne saurais pas quoi dire..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"Je n'ai pas le temps..."; "Ce n'est pas si grave..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"Je n'y arriverai pas..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <em>"J'ai honte..."; "J'ai peur..."</em>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <strong>Attendre </strong>trop longtemps avant de demander de
              l'aide peut prolonger<strong>la souffrance inutilement</strong>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              <strong>Clarifier </strong>ce qui est <strong>vécu </strong>et
              <strong>ressenti </strong>permet de mettre en place de
              <strong>nouvelles choses</strong>, d'amorcer un
              <strong>changement </strong>plus juste et
              <strong>essentiel</strong>, de se remettre en
              <strong>mouvement.</strong>
            </li>
            <li className="home__accompaniment__textContainer__list__element">
              N'oubliez pas que<strong>demander de l'aide</strong>n'est pas un
              signe de faiblesse, mais plutôt une
              <strong>démonstration de force</strong>et de
              <strong>volonté d'amélioration personnelle</strong>
            </li>
          </ul>
        </div>
      </section>
      <section className="home__profits">
        <div className="home__profits__container">
          <Image
            className="home__profits__container__image"
            src="/seatOnBeach.jpg"
            alt="plage"
            width={330}
            height={496}
          />
        </div>
        <h2 className="home__profits__title">
          L'accompagnement en kinésiologie : la clé du changement.
        </h2>
        <div className="home__profits__textContainer">
          <ul className="home__profits__textContainer__list">
            <li className="home__profits__textContainer__list__element">
              <strong>Chaque</strong> <strong>difficulté</strong> rencontrée
              dans la vie est <strong>une invitation au changement</strong>.
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
              <strong>Attendre </strong>trop longtemps avant de demander de
              l'aide peut prolonger<strong>la souffrance inutilement</strong>
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
      <section className="home__googleReviews">
        <h2>Avis Google</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>
                <strong>{review.author_name}</strong>
              </p>
              <p>{review.rating} étoiles</p>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
// Ajout de la propriété `revalidate` pour l'ISR
export const revalidate = 86400; // Rebuild la page toutes les 24 heures

export default Home;
