/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <figure className="home__hero__figure">
          <Image
            className="home__hero__figure__image"
            src="/hero.jpg"
            width="500"
            height="500"
            alt="cerisiers en fleurs"
          />
        </figure>
        <h2 class="home__hero__herotitle">
          Retrouvez l'équilibre dans votre vie grâce a la kinésiologie
        </h2>
        <h3 class="home__hero__herosubtitle">
          Permettez à votre corps de se libérer afin d’amorcer les bases d’un
          nouvel horizon et de reconquérir votre force intérieure.
        </h3>
      </section>
    </main>
  );
}
