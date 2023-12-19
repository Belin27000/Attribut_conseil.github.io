import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadFile.scss'

const DownloadFile = (files) => {
    const fichiers = files.file
    const downloadFileURL = (fileIndex) => {
        const PDF_FILE_URL = fichiers[fileIndex].pdfFile
        window.open(PDF_FILE_URL, '_blank')
    }

    return (
        <ul className='Download-link'>
            {fichiers.map((fichier, fileIndex) => (
                <li>
                    <Link key={fileIndex} onClick={() => downloadFileURL(fileIndex)} >{fichier.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DownloadFile;