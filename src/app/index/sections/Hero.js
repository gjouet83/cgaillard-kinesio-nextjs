/* eslint-disable react/no-unescaped-entities */
import ExportedImage from 'next-image-export-optimizer';
import hero from '../../../../public/images/hero.jpg';

const HeroSection = () => {
  return (
    <section className="home__hero">
      <div className="home__hero__container">
        <ExportedImage
          className="home__hero__container__image"
          src={hero}
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
  );
};

export default HeroSection;
