export function BurgerMenuButton({ open, setOpen }) {
  return (
    <>
      <button
        className="burgerMenuButton"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >
        <div className="burgerMenuButton__burgerMenu">
          <div
            className={`burgerMenuButton__burgerMenu__line one ${
              open && 'rotate-right'
            }`}
          ></div>
          <div
            className={`burgerMenuButton__burgerMenu__line two ${
              open && 'vanish'
            }`}
          ></div>
          <div
            className={`burgerMenuButton__burgerMenu__line three ${
              open && 'rotate-left'
            }`}
          ></div>
        </div>
      </button>
    </>
  );
}

export function LinkPageButton() {
  return (
    <div class="home__hero__contact linkButton">
      <a class="home__hero__contact__link" href="./tarifs-contact.html">
        Prendre Contact
      </a>
    </div>
  );
}
