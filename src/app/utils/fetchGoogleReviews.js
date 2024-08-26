import axios from 'axios';

const fetchGoogleReviews = async () => {
  const placeId = process.env.PLACE_ID; // Remplacez par votre place ID
  const apiKey = process.env.API_KEY; // Remplacez par votre clé API Google Places
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const { data } = await axios.get(url);
    return data.result.reviews || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des avis :', error);
    return [];
  }
};

export default fetchGoogleReviews;
