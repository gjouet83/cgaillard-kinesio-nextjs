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
          sizes="(max-width: 321px) 320px, (max-width: 385px) 384px, (max-width: 641px) 640px,(max-width: 751px) 750px,(max-width: 829px) 828px,(max-width: 1081px) 1080px,(max-width: 1201px) 1200px,(max-width: 1921px) 1920px,(max-width: 2049px) 2048px, 3840px"
          priority
        />
      </div>
      <h1 className="home__hero__herotitle">
        Retrouvez l'équilibre dans votre vie grâce à la kinésiologie
      </h1>
      <h2 className="home__hero__herosubtitle">
        Libérez votre corps et retrouvez l'harmonie : un mouvement vers
        l'équilibre et le bien-être intérieur
      </h2>
    </section>
  );
};

export default HeroSection;
