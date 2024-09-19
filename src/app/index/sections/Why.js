/* eslint-disable react/no-unescaped-entities */
import ExportedImage from 'next-image-export-optimizer';
import beach from '../../../../public/images/beach.jpg';

const Why = () => {
  return (
    <section className="home__why">
      <h2 className="home__why__title">
        Pour quelles raisons consulter une kinésiologue ?
      </h2>
      <ExportedImage
        data-aos="flip-right"
        data-aos-offset="500"
        className="home__why__image disable-aos-mobile"
        src={beach}
        sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
        alt="plage en contre-jour avec une silhouette au loin"
        loading="lazy"
      />
      <div className="home__why__textContainer">
        <ul className="home__why__list">
          <li data-aos="fade-up" className="home__why__list__element">
            Plein(e) de doutes, faire des choix, prendre des décisions est
            difficile.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            <strong>Perdu(e)</strong>, vous ne savez pas comment vous en sortir.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Vous vous sentez <strong>vidé(e)</strong> et sans envie, et vous
            êtes <strong>angoissé(e)</strong> sans comprendre pourquoi.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Le <strong>stress</strong> se manifeste dans votre corps : une boule
            au ventre, la poitrine serrée, une impression d'étouffer et des
            tensions musculaires.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Vous avez du mal à dormir, ce qui vous laisse{' '}
            <strong>épuisé(e)</strong> mentalement et physiquement.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Gérer vos émotions est un défi quotidien, et vous êtes à fleur de
            peau.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Un événement <strong>traumatisant</strong> du passé, comme un deuil,
            une séparation ou un harcèlement, vous pèse encore lourdement.
          </li>
          <li data-aos="fade-up" className="home__why__list__element">
            Vous avez des difficultés à vous concentrer, ce qui entrave vos
            apprentissages.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Why;
