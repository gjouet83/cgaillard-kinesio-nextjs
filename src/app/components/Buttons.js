'use client';
import Script from 'next/script';

export const BurgerMenuButton = () => {
  return (
    <>
      <button
        className="burgerMenuButton"
        aria-label="menu"
        onClick={() => handleClickOpen()}
      >
        <div className="burgerMenuButton__burgerMenu">
          <div
            className="burgerMenuButton__burgerMenu__line one"
            id="one"
          ></div>
          <div
            className="burgerMenuButton__burgerMenu__line two "
            id="two"
          ></div>
          <div
            className="burgerMenuButton__burgerMenu__line three"
            id="three"
          ></div>
        </div>
      </button>
      <Script src="./js/handleClickOpen.js" strategy="lazyOnload" />
    </>
  );
};

export const LinkPageButton = () => {
  return (
    <div className="home__hero__contact linkButton">
      <a className="home__hero__contact__link" href="./tarifs-contact.html">
        Prendre rendez-vous
      </a>
    </div>
  );
};
