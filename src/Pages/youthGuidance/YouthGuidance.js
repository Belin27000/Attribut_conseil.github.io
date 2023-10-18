import React from 'react';
import './youthGuidance.scss'

const YouthGuidance = () => {
    return (
        <section className='YouthGuidance'>
            <h2 className="YouthGuidance-title">ORIENTATION JEUNES</h2>
            <article className="YouthGuidance-article">
                <h3 className="YouthGuidance-article-title">L’ORIENTATION: ÇA S’ÉDUQUE!</h3>
                <p>
                    Quel parent ne se retrouve pas démunis face aux méandres de l'orientation scolaire et face à la difficulté qu'ont nos enfants à savoir répondre à ces grandes questions :
                </p>
                <p>&laquo; Quel est ton projet ? &raquo;</p>
                <p>&laquo;Que veux-tu faire comme métier ? &raquo;</p>
                <ul><strong>Parents :</strong>
                    <li>L'orientation de votre enfant vous préoccupe ?</li>
                    <li>Vous vous interrogez sur son projet ? Sur ses débouchés possibles ?</li>
                    <li>Vous ne savez pas où trouver l'information ?</li>
                </ul>
                <ul><strong>Élèves :</strong>
                    <li>Vous vous interrogez sur votre avenir ?</li>
                    <li>Vos projets d'orientation restent flous ?</li>
                    <li>Vous doutez de vos capacités, de vos motivations ?</li>
                    <li>Vous voulez faire le point sur vos résultats scolaires ?</li>
                </ul>

            </article>
        </section>
    );
};

export default YouthGuidance;