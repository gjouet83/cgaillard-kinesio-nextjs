/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
const Why = () => {
  return (
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
  );
};
export default Why;
