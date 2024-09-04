/* ----------- Template pour ajouter un avis -----------
--------------Copier et coller avant "// Ajouter d'autres avis ici" en bas de page et remplir les informations entre les guillemets -----------------

{
author: '',
text: "",
rating: '',
},

------------- Fin du template -------------*/

const reviewsData = [
  {
    author: 'Romane Hamzeh',
    text: "Bienveillante et à l'écoute, Caroline nous met en confiance tout au long de sa pratique, c'est un plaisir de la consulter.",
    rating: '5',
  },
  {
    author: 'Marie Godard',
    text: 'Incroyable expérience avec Madame Gaillard, merci pour cette libération ! Je compte bien continuer le travail commencé. N’hésitez pas à la consulter, vous serez entre de bonnes mains :).',
    rating: '5',
  },
  {
    author: 'Marine Bourdin',
    text: 'Séances très enrichissantes qui a pu faire conscientiser certaines choses. Caroline est une personne très douce et à l écoute. Merci pour ce partage !',
    rating: '5',
  },
  {
    author: 'Laura Kruczek',
    text: 'Caroline est plus que bienveillante… J’ai passé deux séances merveilleuses à ses côtés… Un grand merci Caroline pour votre douceur.',
    rating: '5',
  },
  {
    author: 'Martine Saint-André',
    text: "Bonjour à tous, Lors de ma séance de kinésiologie avec Caroline, j'ai été agréablement surprise par son approche holistique et personnalisée. Dès le début, j'ai été accueillie chaleureusement et j'ai senti que j'étais entre de bonnes mains. Je me suis sentie tellement en confiance, que j’ai réussi à lâcher prise assez rapidement. Caroline a pris le temps de m'écouter attentivement et de comprendre mes préoccupations et mes objectifs de santé. Grâce à ses compétences et à son expertise, il a pu cibler les zones de tension et de déséquilibre dans mon corps. Elle a également pris le temps d'expliquer chaque étape du processus. Après la séance, je me suis sentie plus détendue, plus alignée, et plus apaisée sur le plan physique, mais aussi et surtout sur le plan mental et émotionnel. Merci pour votre bienveillance et toutes les bonnes énergies que vous dégagez. Et merci d’avoir identifier la cause des blocages interne, on voit plus clairement ensuite, il faut accueillir tout ce qui se passe durant la séance. Je recommande +++ Caroline croyez moi ! N’hésitez pas !",
    rating: '5',
  },
  {
    author: 'Rachel Cipriani',
    text: "Première séance très agréable de kinésiologie. Caroline Gaillard prend le temps de l'écoute. On sent beaucoup de douceur et de patience dans les manipulations, ce qui permet de s'abandonner sereinement entre ses mains. Ses remarques et ses questions m'ont ouvert des perspectives d'évolution sur mes blocages.",
    rating: '5',
  },
  {
    author: 'Marion C',
    text: "Je recommande les séances de kinésiologie avec Caroline Gaillard, pour son expertise, sa grande écoute, sa précieuse bienveillance et son professionnalisme (jusque dans le suivi de l'après-séance). Cette première séance est une véritable réussite.",
    rating: '5',
  },
  {
    author: 'Regis Cazes',
    text: "Première séance de kinésiologie pour moi. Au delà de l'approche très professionnelle, j'ai énormément apprécié son contact chaleureux et bienveillant.",
    rating: '5',
  },
  {
    author: 'robert GIGLIO',
    text: "Une magnifique séance remplie d'émotions et qui m'a permis de faire un point sur moi-même.. Thérapeute à l'écoute et très attentionnée.. Je recommande vivement",
    rating: '5',
  },
  {
    author: 'Sophie',
    text: 'J’ai été très satisfaite de cette séance de kinésiologie avec Caroline. Après un temps d’écoute et de questionnement qui m’a permis de me sentir comprise et respectée, j’ai pu cerner un objectif plus important que les autres, en l’occurrence avoir une plus grande confiance en soi. Plusieurs tests musculaires ont été mis en place parallèlement à une série de questions. Je me sentais en pleine confiance et me suis laissé guider pas à pas. J’étais complètement focus pour être la plus sincère possible, et je sentais quelque chose de nouveau qui était une réponse conjointe de mes muscles, de mon mental et de mon inconscient qui travaillaient ensemble, parfois en se corrigeant, mais toujours en se complétant. Très rapidement, un point névralgique de la problématique a été identifié. Parfois, on peut avoir l’impression de retarder ou d’esquiver des questions qui piquent, là, pas du tout. J’étais partie prenante et sentais que chaque étape me donnait une pièce d’un puzzle. Tout au long de la séance, j’ai senti un grand respect, et si une de mes réponses ne semblait pas corroborer une hypothèse, je sentais une pleine acceptation de ce que je disais. Cette séance m’a apporté beaucoup de bienfaits immédiats, une plus grande légèreté et une envie d’aller de l’avant mais en prenant mon temps. J’ai également des bouts de phrase, des images qui me sont restées en tête et qui m‘accompagnent encore. Un grand merci !',
    rating: '5',
  },
  {
    author: 'Vanessa Biancalani',
    text: "J ai rencontré Caroline 2 fois et à chaque fois la bienveillance et l écoute était au rendez-vous. La première fois pour mon fils de 3 ans. Caroline a su mettre à jour la problématique rencontré et le résultat a été sans appel. En 2 jours ses problèmes d'énuresie ont disparu. Mon fils a retrouvé sa sérénité et son assurance. Et une seconde fois pour moi-même..le résultat a été également flagrant. Je me suis senti accueilli, écouté et sans aucun jugement. Je la recommande vivement.",
    rating: '5',
  },
  {
    author: 'Paul 2p2p',
    text: 'J ai testé la kinésio et le Reiki. Depuis ces deux séances, je m affirme davantage, je dis non sans ressentir de la culpabilité.',
    rating: '5',
  },
  {
    author: 'pervilhac pervilhac',
    text: 'J’ai testé la kinesiologie pour la première fois, pour 2 problèmes différents que Caroline a réglé en seulement 2 séances. j ai surmonté mon deuil ! à l’écoute et bienveillante, je me suis laissée guider, sans être jugée.Les résultats ont été immédiats le soir même j’ai retrouvé le sommeil, le lendemain je reprenais le goût à la vie…Merci Caroline Grâce à vous la vie est belle. Je recommande à toute personne ayant un mal être d’aller consulter et vous serez bluffés ! Merci encore du fond du cœur Caroline pour votre aide précieuse. Belle continuation et plein de belles choses ! 🙏🙏🙏',
    rating: '5',
  },
  {
    author: 'Catherine Chiron',
    text: 'Caroline est vraiment à l écoute de nos besoins, et très bienveillante. Grand merci',
    rating: '5',
  },
  {
    author: 'Claire Desvignes',
    text: "Caroline est professionnelle et très attentionnée. Grâce à sa pratique de la kinésiologie, elle a cerné mes problématiques puis m'a aidée à trouver un meilleur équilibre, grand merci !",
    rating: '5',
  },

  // Ajouter d'autres avis ici
];

export default reviewsData;
