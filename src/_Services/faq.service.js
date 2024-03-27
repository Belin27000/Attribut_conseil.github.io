const faq = [
    {
        title: 'Combien de temps dure un bilan de compétences à TA_VILLE ?',
        answer: 'La durée totale du bilan de compétences  est généralement de 24 heures répartie sur plusieurs semaines, en fonction de votre disponibilité et de vos besoins. En général, un bilan de compétences s’effectue sur une période de 3 à 4 mois que nous pouvons raccourcir selon l’urgence la situation exposée.',
        tag: ['all', 'bdc']

    },
    {
        title: 'Quel est le coût d\'un bilan de compétences à TA_VILLE avec Attribut Conseils ?',
        answer: 'Le coût du bilan de compétences moyen à TA_VILLE est situé aux alentours de 2000€, chez nous vous avez 3 formules : le bilan flash à 1000 euros, le bilan classique entre 1800 (particuliers) et 2240 (employeurs), et le bilan inscrits à France Travail à 1500 euros.',
        tag: ['all', 'vae']
    },
    {
        title: 'Que peut-on espérer à la suite d’un bilan de compétences ?',
        answer: 'À l\'issue du bilan, vous obtiendrez une meilleure compréhension de vos compétences et aspirations, ainsi qu\'un projet professionnel clairement défini et un plan d\'action pour l\'atteindre.',
        tag: ['all']
    },
    {
        title: 'Attribut Conseils est-il certifiée pour réaliser des bilans de compétences ?',
        answer: 'Oui, Attribut Conseils est certifiée Qualiopi pour les actions de formation et les bilans de compétences, garantissant ainsi un service et un accompagnement de qualité. Nous sommes habilité France Travail ce qui peut vous permettre une demande de financement, et nos formations sont inscrites sur le CPF.',
        tag: ['all']
    },
    {
        title: 'Comment prendre rendez-vous pour un bilan de compétences à TA_VILLE?',
        answer: 'Vous pouvez nous contacter via notre formulaire de contact sur notre site web, par téléphone ou par email pour fixer un rendez-vous et positionner un entretien préliminaire gratuit.',
        tag: ['all', 'bdc']
    }

]
let allFaq = () => {
    return faq
}
export const faqService = {
    allFaq
}
export default faqService