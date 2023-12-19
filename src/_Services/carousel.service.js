// import data from '../Assets/CarouselPictures/data.json'
import CreaEnt from '@/Assets/CarouselPictures/accompagnement_creation_entreprise.jpg'
// import Search from '@/Assets/CarouselPictures/accompagnement_et_recherche.jpg'
import Bilan from '@/Assets/CarouselPictures/Bilan_de_comp.jpg'
// import Coaching from '@/Assets/CarouselPictures/coaching.jpg'
import Formation from '@/Assets/CarouselPictures/formation.jpg'
import Inge from '@/Assets/CarouselPictures/ingenirie_et_admin.png'
import Orient from '@/Assets/CarouselPictures/Orientation_jeune.jpg'
import OutPlacement from '@/Assets/CarouselPictures/outplacement.jpg'
// import Psycho from '@/Assets/CarouselPictures/psychologie_du_travail.jpg'
// import Vae from '@/Assets/CarouselPictures/VAE.jpg'

const pictures = [
    {
        image: CreaEnt,
        title: 'Accompagnement à la création d\'entreprise'
    },
    // {
    //     image: Search,
    //     title: 'Accompagnement à la recherche d\'emploi'
    // },
    {
        image: Bilan,
        title: 'Bilan de compétences'
    },
    // {
    //     image: Coaching,
    //     title: 'Coaching'
    // },
    {
        image: Formation,
        title: 'Formation'
    },
    {
        image: Inge,
        title: 'Ingenierie et administration de la formation'
    },
    {
        image: Orient,
        title: 'Orientation jeune'
    },
    {
        image: OutPlacement,
        title: 'Outplacement'
    },
    // {
    //     image: Psycho,
    //     title: 'Psychologie du travail'
    // },
    // {
    //     image: Vae,
    //     title: 'Validation des acquis de l\'expérience'
    // },
]

let allPictures = () => {
    return pictures
}

export const carouselService = {
    allPictures
}

export default carouselService