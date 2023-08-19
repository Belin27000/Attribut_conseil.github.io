// import data from '../Assets/CarouselPictures/data.json'
import CreaEnt from '@/Assets/CarouselPictures/accompagnement_creation_entreprise.jpg'
import Search from '@/Assets/CarouselPictures/accompagnement_et_recherche.jpg'
import Bilan from '@/Assets/CarouselPictures/Bilan_de_compétence.jpg'
import Coaching from '@/Assets/CarouselPictures/coaching.jpg'
import Formation from '@/Assets/CarouselPictures/formation.jpg'
import Inge from '@/Assets/CarouselPictures/ingenirie_et_admin.png'
import Orient from '@/Assets/CarouselPictures/Orientation_jeune.jpg'
import OutPlacement from '@/Assets/CarouselPictures/outplacement.jpg'
import Psycho from '@/Assets/CarouselPictures/psychologie_du_travail.jpg'
import Vae from '@/Assets/CarouselPictures/VAE.jpg'

let pictures = [CreaEnt, Search, Bilan, Coaching, Formation, Inge, Orient, OutPlacement, Psycho, Vae]

let allPictures = () => {

    return pictures

}

export const carouselService = {
    allPictures
}

export default carouselService