import CreaEnt from '@/Assets/CarouselPictures/accompagnement_creation_entreprise.webp'
import Bilan from '@/Assets/CarouselPictures/Bilan_de_comp.webp'
import Formation from '@/Assets/CarouselPictures/formation.webp'
import Inge from '@/Assets/CarouselPictures/ingenirie_et_admin.webp'
import Orient from '@/Assets/CarouselPictures/Orientation_jeune.webp'
import OutPlacement from '@/Assets/CarouselPictures/outplacement.webp'

const pictures = [
    {
        image: CreaEnt,
        title: 'Accompagnement à la création d\'entreprise'
    },
    {
        image: Bilan,
        title: 'Bilan de compétences'
    },
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
]

let allPictures = () => {
    return pictures
}

export const carouselService = {
    allPictures
}

export default carouselService