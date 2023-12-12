import Prog from '../Assets/FileToDownload/BilanDeComp/PROG.pdf'
import Price from '../Assets/FileToDownload/BilanDeComp/Price.pdf'
import Ethique from '../Assets/FileToDownload/BilanDeComp/Ethique.pdf'
import Stats from '../Assets/FileToDownload/BilanDeComp/Stats.pdf'

const bilanDeCompFiles = [
    {
        name: 'Programme',
        pdfFile: Prog,
    },
    {
        name: 'Tarifs et conditions générales de vente',
        pdfFile: Price,
    },
    {
        name: 'Déontologie et étique',
        pdfFile: Ethique,
    },
    {
        name: 'Statistiques',
        pdfFile: Stats,
    },
]

let fileList = () => {
    return bilanDeCompFiles
}

export const allFiles = {
    fileList
}
export default allFiles