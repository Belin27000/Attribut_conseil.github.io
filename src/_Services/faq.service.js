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
    },
    {
        title: 'Quelles sont les démarches à suivre pour utiliser son CPF pour un bilan de compétences ?',
        answer: 'Pour utiliser votre Compte Personnel de Formation (CPF) pour financer un bilan de compétences, vous devez d\'abord vous assurer que l\'organisme proposant cette prestation est QUALIOPI. Ensuite, connectez-vous sur le site officiel Mon Compte Formation pour vérifier le solde de votre CPF et démarrer la démarche de financement. Nous pouvons vous guider. Une fois votre demande approuvée, vous pourrez entamer votre bilan de compétences en toute sérénité.',
        tag: ['CPF']
    },
    {
        title: 'Est-ce que le bilan de compétences est obligatoire dans le cadre d\'une reconversion professionnelle ?',
        answer: 'Le bilan de compétences n\'est pas obligatoire dans le cadre d\'une reconversion professionnelle, mais il peut s\'avérer très utile. Cette démarche vous permet de faire le point sur vos compétences, vos motivations et vos aspirations professionnelles, ce qui peut vous aider à prendre des décisions éclairées pour votre avenir et se sentir rassuré (e) quand à toutes les démarches de reconversion à mettre en place.',
        tag: ['CPF']
    },
    {
        title: 'Quels sont les avantages de financer un bilan de compétences avec son CPF ?',
        answer: 'Financer un bilan de compétences avec son CPF présente plusieurs avantages. Tout d\'abord, cela permet de bénéficier d\'une prise en charge intégrale des frais liés à cette prestation. Ensuite, le bilan de compétences vous offre l\'opportunité de faire le point sur votre parcours professionnel et de définir des objectifs clairs pour votre avenir. Il peut se faire en dehors du temps de travail, en toute confidentialité.',
        tag: ['CPF']
    },
    {
        title: 'Est-ce que le bilan de compétences est confidentiel ?',
        answer: 'Oui, le bilan de compétences est strictement confidentiel. Les informations échangées lors des entretiens et des tests restent entre vous et le consultant qui vous accompagne. Aucune donnée ne sera divulguée sans votre accord préalable.',
        tag: ['CPF']
    },
    {
        title: 'Pourquoi passer par Attribut Conseils pour réaliser un bilan de compétences financé par le CPF ? ',
        answer: 'En choisissant Attribut Conseils pour votre bilan de compétences via le CPF, vous optez pour un accompagnement sur mesure et de qualité. Notre équipe de consultants expérimentés est là pour vous guider tout au long du processus, depuis la vérification de vos droits jusqu\'à la mise en place d\'un programme adapté à vos besoins. Nous vous offrons un service personnalisé, confidentiel et professionnel, pour vous permettre de tirer le meilleur parti de cette démarche et de prendre des décisions éclairées pour votre avenir professionnel. Avec Attribut Conseils, vous bénéficiez d\'une expertise reconnue dans le domaine de l\'orientation professionnelle et de la reconversion, ainsi que d\'un accompagnement de qualité pour vous aider à atteindre vos objectifs. N\'hésitez pas à nous contacter pour plus d\'informations ou pour démarrer votre bilan de compétences dès aujourd\'hui. Votre réussite professionnelle commence ici.',
        tag: ['CPF']
    },
    {
        title: 'À qui s\'adresse le bilan de compétences reconversion ?',
        answer: 'Le bilan de compétences reconversion s\'adresse à toute personne qui envisage un changement de carrière, qu\'elle soit en poste, en recherche d\'emploi ou en période de transition professionnelle. C\'est un outil précieux pour ceux qui souhaitent faire le point sur leurs compétences, leurs intérêts et leurs aspirations, afin de prendre des décisions éclairées concernant leur avenir professionnel.',
        tag: ['reconversion']
    },
    {
        title: 'Comment se déroule un bilan de compétences chez Attribut Conseils ?',
        answer: 'Chez Attribut Conseils, le bilan de compétences se déroule en plusieurs étapes. Tout d\'abord, vous rencontrez un consultant expérimenté qui vous guide à travers le processus et recueille des informations sur votre parcours professionnel, vos compétences et vos objectifs. Ensuite, vous passez des tests et des évaluations pour analyser vos aptitudes et vos intérêts. Enfin, vous travaillez en collaboration avec votre consultant pour élaborer un plan d\'action personnalisé en vue de votre reconversion professionnelle.',
        tag: ['reconversion']
    },
    {
        title: 'Combien de temps dure un bilan de compétences reconversion ?',
        answer: 'La durée d\'un bilan de compétences reconversion peut varier en fonction des besoins et des objectifs de chaque individu. En général, un bilan de compétences complet peut s\'étaler sur plusieurs semaines à quelques mois, mais la durée légale est de 24h. Il comprend généralement des séances individuelles avec un consultant, des évaluations et des tests, ainsi que du travail personnel pour approfondir la réflexion sur ses compétences, ses intérêts et ses aspirations professionnelles. Chez Attribut Conseils, la durée d\'un bilan de compétences est adaptée à chaque personne et à chaque situation, afin de garantir un accompagnement personnalisé et efficace dans le processus de reconversion professionnelle.',
        tag: ['reconversion']
    },
    {
        title: 'Quelle est la différence entre le bilan de compétences et le coaching professionnel ?',
        answer: 'Le bilan de compétences se concentre principalement sur l\'analyse des compétences, des intérêts et des aspirations professionnelles d\'une personne, dans un objectif de gestion de carrière(supposant une expertise marché de l’emploi et méthodologie de projet).A ne pas confondre avec  le coaching professionnel qui vise à accompagner individuellement une personne dans l\'atteinte de ses objectifs professionnels ou résoudre une problématique professionnelle. Le bilan de compétences est souvent une première étape dans un processus de reconversion ou de développement professionnel, tandis que le coaching peut intervenir à différents stades de la carrière d\'une personne pour l\'aider à surmonter des obstacles spécifiques ou à atteindre des objectifs précis.',
        tag: ['reconversion']
    },
    {
        title: 'Comment utiliser les résultats d\'un bilan de compétences pour trouver un nouvel emploi ou se reconvertir ?',
        answer: 'Les résultats d\'un bilan de compétences peuvent être utilisés de différentes manières pour trouver un nouvel emploi ou se reconvertir. Vous pouvez les utiliser pour identifier les domaines dans lesquels vous êtes le plus compétent et les secteurs qui correspondent le mieux à vos intérêts et à vos valeurs. Ces informations peuvent ensuite être utilisées pour cibler vos recherches d\'emploi, rédiger un CV et une lettre de motivation percutants, et vous préparer aux entretiens d\'embauche. De plus, les recommandations fournies dans le cadre du bilan de compétences peuvent vous aider à élaborer un plan d\'action réaliste et efficace pour atteindre vos objectifs de reconversion professionnelle.',
        tag: ['reconversion']
    },
    {
        title: 'Quelles sont les erreurs à éviter lors d\'une reconversion professionnelle ?',
        answer: 'Lors d\'une reconversion professionnelle, il est important d\'éviter certaines erreurs courantes qui pourraient compromettre votre succès.Parmi celles - ci, on peut citer le manque de planification et de recherche préalable, le choix d\'une nouvelle carrière uniquement pour des raisons financières sans tenir compte de vos intérêts et passions, ou encore le fait de négliger de développer de nouvelles compétences ou de réseauter dans votre nouveau domaine d\'activité.',
        tag: ['reconversion']
    },
    {
        title: 'Doit - on obligatoirement réaliser un bilan de compétences en vue d\'une reconversion ?',
        answer: 'Bien que le bilan de compétences soit un outil précieux pour ceux qui envisagent une reconversion professionnelle, il n\'est pas obligatoire. Cependant, il peut grandement faciliter le processus en vous fournissant une vision claire et approfondie de vos compétences, de vos intérêts et de vos aspirations professionnelles, ce qui peut vous aider à prendre des décisions éclairées et à élaborer un plan d\'action concret pour réaliser votre projet de reconversion.Il vous permet d’élaborer une vraie stratégie.',
        tag: ['reconversion']
    },
    {
        title: 'Quelle est la durée d\'un bilan de compétences chez Attribut Conseils ? ',
        answer: ' Chez Attribut Conseils, un bilan de compétences se déroule généralement sur une période de 2 à 3 mois.Ce cadre temporel permet d\'assurer un suivi approfondi et une réflexion mûrie, tout en s\'adaptant à votre rythme et à vos disponibilités.',
        tag: ['APEC']
    },
    {
        title: 'Comment Attribut Conseils assure-t-il la confidentialité de mon bilan de compétences ?',
        answer: 'La confidentialité est une priorité absolue pour nous. Tout au long de votre bilan de compétences, les informations partagées restent strictement entre vous et votre consultant. Attribut Conseils s\'engage à respecter le secret professionnel et à protéger vos données personnelles.',
        tag: ['APEC']
    },
    {
        title: 'Est-il possible de financer mon bilan de compétences via le CPF ?',
        answer: 'Oui, Attribut Conseils vous accompagne dans les démarches pour utiliser votre Compte Personnel de Formation (CPF) pour financer votre bilan de compétences. Nous vous guidons à chaque étape pour faciliter l\'accès à cette prestation essentielle à votre développement professionnel.',
        tag: ['APEC']
    },
    {
        title: 'Quel suivi est proposé après la réalisation du bilan de compétences ?',
        answer: 'Une fois votre bilan de compétences achevé, Attribut Conseils reste à vos côtés pour vous aider à mettre en œuvre votre projet professionnel. Nous proposons des séances de suivi et vous offrons des conseils pratiques pour assurer une transition en douceur vers votre nouvelle orientation professionnelle.',
        tag: ['APEC']
    },

]
let allFaq = () => {
    return faq
}
export const faqService = {
    allFaq
}
export default faqService