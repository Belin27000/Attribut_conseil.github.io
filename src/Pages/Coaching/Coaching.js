import React from 'react';
import './coaching.scss'

const Coaching = () => {
    return (
        <section className='Coaching'>
            <h2 className="Coaching-title">COACHING</h2>
            <article className="Coaching-article">
                <p>Notre service d'accompagnement en coaching axé sur la systémie est conçu pour vous aider à comprendre les relations et les dynamiques qui vous entourent, et à les utiliser de manière constructive pour atteindre vos objectifs.
                </p>
                <p>L'accompagnement en coaching professionnel s'adresse tant aux <strong>particuliers qu'aux entreprises</strong>. Vous bénéficierez d'un soutien assuré par un coach certifié et diplômé en intervention systémique et stratégique .
                </p>
                <h3 className="Coaching-article-title">LES RESULTATS ATTENDUS DU COACHING
                </h3>
                <ul>
                    <li>Le client atteint un niveau élevé de performance (par rapport à une norme objective) dans le long terme
                    </li>
                    <li>Le client s’améliore constamment, il est dans une dynamique de changement. Les changements sont génératifs: ils en appellent d’autres.
                    </li>
                    <li>Le client résout une problématique professionnelle
                    </li>
                    <li>Le client oriente ses actions vers l'atteinte des résultats attendus
                    </li>
                </ul>
                <p className='Coaching-article_center'><strong>Performance excellente dans le long terme
                </strong></p>
                <p className='Coaching-article_center'><strong>Auto - correction
                </strong></p>
                <p><strong className='Coaching-article_center'>Auto - génération
                </strong></p>
            </article>
        </section>
    );
};

export default Coaching;