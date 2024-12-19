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
  title: 'Tarif et Contact - Caroline Gaillard - Kinésiologue à Lyon',
  description:
    'Consultez les tarifs pour les services dispensés par Caroline Gaillard et trouvez les informations de contact pour prendre rendez-vous ou poser des questions.',
  alternates: {
    canonical: `${process.env.PRODUCTION_WEBSITE_URL}/tarif-et-contact/`,
  },
};

const pricingContact = () => {
  return (
    <main className="pricing-contact">
      <h1 className="pricing-contact__title">Tarif et Contact</h1>
      <section className="pricing-contact__contact">
        <h2 className="pricing-contact__contact__title">Passez à l'action !</h2>
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
            <li>vendredi : 8h - 20h</li>
            <li>samedi : fermé</li>
            <li>dimanche : fermé</li>
          </ul>
        </div>
        <div className="pricing-contact__contact__pricing">
          <h3 className="pricing-contact__contact__pricing__title">Tarif</h3>
          <ul className="pricing-contact__contact__pricing__content">
            <li>
              Tarif unique tout public (enfants, ado, adultes) : 70 € pour 1h15
              (1h30 environ pour la 1ère séance).
            </li>
            <li>
              Vous ne pouvez prendre rendez-vous que pour vous-même et un mineur
              dont vous avez la charge.
            </li>
            <li> Règlement par chèque ou espèces ou paylib/Wero.</li>
          </ul>
          <span>
            Une facture peut être fournie sur demande. Pour le respect de notre
            collaboration et de ma disponibilité, réservez un créneau que si
            vous êtes certain.e de pouvoir l'honorer.
          </span>
          <span>
            Toute annulation devra être faite 48h avant la séance. En cas de
            désistement/report répété, je me réserve le droit de ne pas donner
            suite à la nouvelle demande de séance.
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
          Programmez un rendez-vous
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
