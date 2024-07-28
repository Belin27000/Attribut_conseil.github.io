import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadFile.scss'

const DownloadFile = (files) => {
    const fichiers = files.file
    console.log(fichiers[0].picture);
    // console.log(fichiers[0].name);
    const downloadFileURL = (fileIndex) => {
        const PDF_FILE_URL = fichiers[fileIndex].pdfFile
        window.open(PDF_FILE_URL, '_blank')
    }
    const downloadSingleFileURL = (fichiers) => {
        console.log(fichiers);
        const PDF_FILE_URL = fichiers[0].pdfFile
        window.open(PDF_FILE_URL, '_blank')
    }
    if (fichiers.length < 2) {
        return (
            <div className='Single-Link' onClick={() => downloadSingleFileURL(fichiers)}>
                <Link >{fichiers[0].name}</Link>
            </div>
        )
    } else {
        return (
            <ul className='Download-link'>
                {fichiers.map((fichier, fileIndex) => (
                    <li key={fileIndex}>
                        <Link onClick={() => downloadFileURL(fileIndex)} >{fichier.name}</Link>
                    </li>
                ))}
            </ul>
        );
    }
};

export default DownloadFile;