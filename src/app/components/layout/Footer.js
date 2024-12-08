/* eslint-disable react/no-unescaped-entities */
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExportedImage from 'next-image-export-optimizer';
import fkpLogo from '../../../../public/images/FKP_Logotype.webp';
import teteOr from '../../../../public/images/tete-or.svg';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__firstcontainer">
        <div className="footer__firstcontainer__contact">
          <address className="footer__firstcontainer__contact__address">
            <Link
              href="tel:+33762750700"
              className="footer__firstcontainer__contact__address__link"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="footer__firstcontainer__contact__address__link__phoneIco"
                aria-label="Icone qui représente un téléphone"
              />
              0762750700
            </Link>
            <Link
              href="mailto:carolinegaillard.kinesiologue@gmail.com"
              className="footer__firstcontainer__contact__address__link"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="footer__firstcontainer__contact__address__link__mailIco"
                aria-label="Icone qui représente une enveloppe"
              />
              carolinegaillard.kinesiologue@gmail.com
            </Link>
            <Link
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
            </Link>
          </address>
        </div>
        <div className="footer__firstcontainer__socialNetwork">
          <span className="footer__firstcontainer__socialNetwork__header">
            Retrouvez-moi également sur
          </span>
          <div className="footer__firstcontainer__socialNetwork__content">
            <Link
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
            </Link>
            <Link
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
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/kinesiologue_lyon_caroline/"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer__firstcontainer__socialNetwork__content__Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer__firstcontainer__socialNetwork__content__linkedinIco"
                aria-label="Icone Linkedin"
                width={50}
              />
            </Link>
          </div>
        </div>
        <div className="footer__firstcontainer__partner">
          <Link
            href="https://www.federationkinesiologiqueprofessionnelle.fr/"
            target="_blank"
            rel="noreferrer"
            className="footer__firstcontainer__partner__figure__link"
            aria-label="fédération de kinésiologie professionnelle"
          >
            Membre de l' Union de Kinésiologie Professionnelle
          </Link>
          <Link
            href="https://espace-re-source.fr/tete-dor/"
            target="_blank"
            rel="noreferrer"
            className="footer__firstcontainer__partner__figure__link"
            aria-label="Espace Re-Source"
          >
            <figure className="footer__firstcontainer__partner__figure">
              <ExportedImage
                src={teteOr}
                alt="logo de espace Re-Source"
                className="footer__firstcontainer__partner__figure__img"
                width={100}
              />

              <figcaption className="footer__firstcontainer__partner__figcaption">
                UN ESPACE DE CO-WORKING ZEN À LYON
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
      <div className="footer__secondcontainer">
        <Link href="/credits-photos">Crédits photos: Designed by Freepik </Link>
        <Link href="/mentions-legales">
          - Mentions légales et politique de confidentialité{' '}
        </Link>
        <Link href="/CGU">- Conditions générales d'utilisation </Link>
      </div>
    </footer>
  );
};

export default Footer;
