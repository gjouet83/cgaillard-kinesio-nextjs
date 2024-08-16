/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
