import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadFile.scss'
// import allFiles from '../../_Services/fileToDownload.service.js';

const DownloadFile = (files) => {
    const fichiers = files.file
    const downloadFileURL = (fileIndex) => {
        const PDF_FILE_URL = fichiers[fileIndex].pdfFile
        // const PDF_FILE_NAME = fichiers[fileIndex].name
        // const link = document.createElement('a');
        // link.href = PDF_FILE_URL;
        // link.setAttribute('download', PDF_FILE_NAME);
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
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