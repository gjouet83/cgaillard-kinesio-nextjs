/* eslint-disable react/no-unescaped-entities */
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__firstcontainer">
        <address className="footer__firstcontainer__contact__address">
          <span className="footer__firstcontainer__contact__address__header">
            Contact :
          </span>
          <a
            href="tel:+33762750700"
            className="footer__firstcontainer__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="footer__firstcontainer__contact__address__link__phoneIco"
              aria-label="Icone qui représente un téléphone"
            />
            0762750700
          </a>
          <a
            href="mailto:carolinegaillard.kinesiologue@gmail.com"
            className="footer__firstcontainer__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footer__firstcontainer__contact__address__link__mailIco"
              aria-label="Icone qui représente une enveloppe"
            />
            carolinegaillard.kinesiologue@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/Jrcamz2KokEtqyyu6"
            target="_blank"
            rel="noreferrer"
            className="footer__firstcontainer__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="footer__firstcontainer__contact__address__link__locationIco"
              aria-label="Icone qui sélectionne une carte"
            />
            13 Cr d'Herbouville, 69004 Lyon
          </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
