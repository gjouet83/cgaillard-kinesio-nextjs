/* eslint-disable react/no-unescaped-entities */
import { LinkPageButton } from '../components/ui/Buttons';
import Link from 'next/link';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CalendlyEmbed from '../utils/CalendlyEmbed';

export const metadata = {
  title: 'A propos de moi - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Caroline Gaillard vous accueille dans son cabinet de kinésiologie à Lyon Croix Rousse',
};

const pricingContact = () => {
  return (
    <main className="pricing-contact">
      <h1 className="pricing-contact__title">Tarif et Contact</h1>
      <section className="pricing-contact__contact">
        <h2 className="pricing-contact__contact__title">Passer à l'action</h2>
        <LinkPageButton
          className={'pricing-contact__contact__link'}
          href={'#schedule'}
          text={'Prendre rendez-vous'}
        />
        <address className="pricing-contact__contact__address">
          <Link
            href="tel:+33762750700"
            className="pricing-contact__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="pricing-contact__contact__address__link__phoneIco"
              aria-label="Icone qui représente un téléphone"
            />
            0762750700
          </Link>
          <Link
            href="mailto:carolinegaillard.kinesiologue@gmail.com"
            className="pricing-contact__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pricing-contact__contact__address__link__mailIco"
              aria-label="Icone qui représente une enveloppe"
            />
            carolinegaillard.kinesiologue@gmail.com
          </Link>
          <Link
            href="https://maps.app.goo.gl/Jrcamz2KokEtqyyu6"
            target="_blank"
            rel="noreferrer"
            className="pricing-contact__contact__address__link"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="pricing-contact__contact__address__link__locationIco"
              aria-label="Icone qui sélectionne une carte"
            />
            13 Cr d'Herbouville, 69004 Lyon
          </Link>
        </address>
        <div className="pricing-contact__contact__schedule">
          <h3 className="pricing-contact__contact__schedule__title">
            <FontAwesomeIcon
              icon={faClock}
              className="pricing-contact__contact__schedule__title__scheduleIco"
              aria-label="Icone qui représente une horloge"
            />
            Horaires d'ouverture du cabinet
          </h3>
          <ul>
            <li>lundi : 8h - 20h</li>
            <li>mardi : 8h - 20h</li>
            <li>mercredi : 8h - 20h</li>
            <li>jeudi : 8h - 20h</li>
            <li>vendredi : fermé</li>
            <li>samedi : fermé</li>
            <li>dimanche : fermé</li>
          </ul>
        </div>
        <div className="pricing-contact__contact__pricing">
          <h3 className="pricing-contact__contact__pricing__title">Tarif</h3>
          <span className="pricing-contact__contact__pricing__content">
            70€
          </span>
          <span className="pricing-contact__contact__pricing__content">
            durée de la séance 1h15
          </span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7856222771125!2d4.83641487482085!3d45.7754864126173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e033d1c427cc493%3A0x81a7b06162ff792b!2sCaroline%20Gaillard%20-%20Kinesiologue%20Lyon!5e0!3m2!1sfr!2sfr!4v1715173703040!5m2!1sfr!2sfr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pricing-contact__contact__map"
          title="emplacement du cabinet"
        ></iframe>
      </section>
      <section className="pricing-contact__schedule" id="schedule">
        <h2 className="pricing-contact__schedule__title">
          Programmer un rendez-vous
        </h2>
        <CalendlyEmbed url="https://calendly.com/carolinegaillard-kinesiologue/seance-de-kinesiologie" />
      </section>
      <LinkPageButton
        className={'pricing-contact'}
        href={'/'}
        text={'Accueil'}
      />
    </main>
  );
};
export default pricingContact;
