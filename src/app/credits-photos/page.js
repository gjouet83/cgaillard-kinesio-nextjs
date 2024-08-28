import ExportedImage from 'next-image-export-optimizer';

import Phone from '../../../public/images/phone.jpg';
import Firstsession from '../../../public/images/firstsession.jpg';
import Evolution from '../../../public/images/grow.jpg';
import Renew from '../../../public/images/renew.jpg';
const creditsPhotos = () => {
  return (
    <main className="creditsPhotos">
      <h1 className="creditsPhotos__title">Credits photos</h1>
      <div className="creditsPhotos__container">
        <ExportedImage
          className="creditsPhotos__container__image"
          src={Phone}
          width={300}
          alt="un combiné de téléphone"
        />
        <a
          href="https://fr.freepik.com/photos-gratuite/mise-plat-bulles-discussion-recepteur-telephonique_11684279.htm#fromView=search&page=1&position=9&uuid=55e77b94-c5ec-4c72-8bdb-8cd0986b1416"
          className="creditsPhotos__container__link"
        >
          Image de freepik telephone
        </a>
      </div>

      <div className="creditsPhotos__container">
        <ExportedImage
          className="creditsPhotos__container__image"
          src={Firstsession}
          width={300}
          alt="deux personne assises en taiileur et se touchant la main"
        />
        <a
          href="https://fr.freepik.com/photos-gratuite/personnes-beneficiant-retraite-yoga_26313421.htm#fromView=search&page=1&position=2&uuid=e3b83f56-fadf-4a7a-a784-776f88a2e27e"
          className="creditsPhotos__container__link"
        >
          Image de freepik firstseance
        </a>
      </div>

      <div className="creditsPhotos__container">
        <ExportedImage
          className="creditsPhotos__container__image"
          src={Evolution}
          width={300}
          alt="une image d'une plante"
        />
        <a
          href="https://fr.freepik.com/vecteurs-libre/phases-croissance-plantes-infographique_11571808.htm#fromView=search&page=1&position=3&uuid=3450dafa-5763-4db2-9669-eac9bcca59dc"
          className="creditsPhotos__container__link"
        >
          Image de svstudioart sur Freepik evolution
        </a>
      </div>

      <div className="creditsPhotos__container">
        <ExportedImage
          className="creditsPhotos__container__image"
          src={Renew}
          width={300}
          alt="une image d'une plante"
        />
        <a
          href="https://fr.freepik.com/photos-gratuite/temps-agir-concept-changement_17057217.htm#fromView=search&page=2&position=31&uuid=7d8c8bd0-3ab4-4442-9abc-5083d7c066d3"
          className="creditsPhotos__container__link"
        >
          Image de rawpixel.com sur Freepik renew
        </a>
      </div>
    </main>
  );
};
export default creditsPhotos;
