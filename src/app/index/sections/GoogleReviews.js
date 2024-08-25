import fetchGoogleReviews from '../../utils/fetchGoogleReviews';

const GoogleReviews = async () => {
  const reviews = await fetchGoogleReviews();
  return (
    <section className="home__googleReviews">
      <h3>Avis Google</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>
              <strong>{review.author_name}</strong>
            </p>
            <p>{review.rating} étoiles</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Ajout de la propriété `revalidate` pour l'ISR
export const revalidate = 86400; // Rebuild la page toutes les 24 heures

export default GoogleReviews;
