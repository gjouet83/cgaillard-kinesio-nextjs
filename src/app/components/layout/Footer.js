/* eslint-disable react/no-unescaped-entities */
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExportedImage from 'next-image-export-optimizer';
import fkpLogo from '../../../../public/images/FKP_Logotype.webp';
import teteOr from '../../../../public/images/tete-or.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__firstcontainer">
        <div className="footer__firstcontainer__contact">
          <address className="footer__firstcontainer__contact__address">
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
        <div className="footer__firstcontainer__socialNetwork">
          <span className="footer__firstcontainer__socialNetwork__header">
            Retrouvez-moi également sur
          </span>
          <div className="footer__firstcontainer__socialNetwork__content">
            <a
              target="_blank"
              href="https://www.facebook.com/caroline.gaillard.kinesiologue/"
              rel="noreferrer"
              aria-label="facebook"
              className="footer__firstcontainer__socialNetwork__content__facebook"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="footer__firstcontainer__socialNetwork__content__facebookIco"
                aria-label="Icone facebook"
                width={50}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/caroline-gaillard-a1a782287/"
              rel="noreferrer"
              aria-label="Linkedin"
              className="footer__firstcontainer__socialNetwork__content__linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer__firstcontainer__socialNetwork__content__linkedinIco"
                aria-label="Icone Linkedin"
                width={50}
              />
            </a>
          </div>
          <div className="footer__firstcontainer__partner">
            <a
              href="https://www.federationkinesiologiqueprofessionnelle.fr/"
              target="_blank"
              rel="noreferrer"
              className="footer__firstcontainer__partner__figure__link"
              aria-label="fédération de kinésiologie professionnelle"
            >
              <figure className="footer__firstcontainer__partner__figure">
                <ExportedImage
                  src={fkpLogo}
                  alt="logo de la fédération de kinésiologie professionnelle"
                  className="footer__firstcontainer__partner__figure__img"
                  width={200}
                />

                <figcaption className="footer__firstcontainer__partner__figcaption">
                  Membre de la Fédération de Kinésiologie Professionnelle
                </figcaption>
              </figure>
            </a>
            <a
              href="https://www.federationkinesiologiqueprofessionnelle.fr/"
              target="_blank"
              rel="noreferrer"
              className="footer__firstcontainer__partner__figure__link"
              aria-label="fédération de kinésiologie professionnelle"
            >
              <figure className="footer__firstcontainer__partner__figure">
                <ExportedImage
                  src={teteOr}
                  alt="logo de la fédération de kinésiologie professionnelle"
                  className="footer__firstcontainer__partner__figure__img"
                  width={100}
                />

                <figcaption className="footer__firstcontainer__partner__figcaption">
                  UN ESPACE DE CO-WORKING ZEN À LYON
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
