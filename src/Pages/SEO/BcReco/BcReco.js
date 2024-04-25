import ScrollToTop from '@/Components/Button/ScrollButton/ScrollToTop.js';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.webp'
import climb from '@/Assets/video/Grimpeur.mp4'
import Movie from '@/Components/Movie/Movie.js';
// import Arc from '@/Assets/video/Tir_Arc.mp4';
import LogoTree from '@/Assets/Images/Tree.png';
import React from 'react';
import '../BcCPF/bcCPF.scss';
// import '../seo.scss';
import Questions from '@/Components/Questions/Questions.js';
import GoogleWidget from '@/Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '@/Components/Meta/MetaTitleDes.js';

import CircleDot from '@/Components/CircleDot/CircleDot.js';
const BcReco = () => {
    const metaTitle = `Attribut Conseils - Bilan de compétences et cpf`
    const metaDescription = `Vous cherchez une reconversion et souhaitez la réaliser en utilisant votre CPF? Contactez-nous !`

    const mainTitleFaq = 'FAQ : Bilan de compétences et reconversion'
    const mainPfaq = 'Vous avez des questions sur le processus de bilan de compétences ou sur la reconversion professionnelle en général ? Consultez notre foire aux questions pour des réponses claires et concises. Nous sommes là pour dissiper vos doutes et vous fournir les informations dont vous avez besoin pour prendre des décisions éclairées sur votre avenir professionnel.'
    return (
        <section className='Seo'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1>BILAN DE COMPÉTENCES RECONVERSION:<br />Faites appel à ATTRIBUT CONSEILS</h1>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>À la croisée des chemins professionnels, envisager une reconversion peut être à la fois excitant et intimidant. C'est une étape majeure qui demande réflexion, analyse et soutien adéquat. Si vous vous trouvez dans cette situation, vous n'êtes pas seul. De nos jours, de plus en plus de personnes osent repenser leur carrière et explorer de nouvelles voies professionnelles. Mais comment s'y prendre efficacement ? Comment trouver le bon cap dans ce monde professionnel en constante évolution ? C'est là qu'intervient le bilan de compétences. Dans cet article, nous explorerons en profondeur le processus de bilan de compétences en vue d'une reconversion professionnelle. Nous examinerons où et comment réaliser un tel bilan, afin de vous fournir les clés nécessaires pour franchir avec succès cette étape cruciale de votre parcours professionnel.
                </p>
                <p>Vous envisagez une reconversion professionnelle ? Chez Attribut Conseils, nous comprenons les défis et les opportunités qui accompagnent ce processus. La reconversion peut être une étape passionnante et gratifiante dans votre carrière, et un bilan de compétences peut jouer un rôle crucial pour vous aider à franchir ce cap en toute confiance. </p>
            </article>
            <article className="timeline firstRight-container right-container withMovie">
                <h2 className='litleWhiteDot' >Pourquoi envisager une reconversion?</h2>
                <div className='TextMovieLogo' >
                    <div className='text-col'>
                        <p>Envisager une reconversion professionnelle peut être une décision significative et transformatrice dans la vie d'un individu. Plusieurs facteurs peuvent motiver cette réflexion et inciter à franchir le pas vers de nouveaux horizons. Tout d'abord, une reconversion peut découler d'une insatisfaction dans le domaine actuel. Cette insatisfaction peut prendre différentes formes : un travail monotone ou dénué de sens, des conditions de travail inadéquates, un manque de perspectives d'évolution ou encore un désalignement entre les valeurs personnelles et les missions professionnelles. Dans de tels cas, la reconversion apparaît comme une réponse naturelle pour retrouver un équilibre et une satisfaction dans sa vie professionnelle.
                        </p>
                    </div>
                    <div className='withMovieAndLogo'>
                        <Movie src={climb} />
                        <div className="articleCertif-pic">
                            < img src={Qualiopi} alt="Logo Qualiopi" />
                            < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                        </div>
                    </div>
                </div>
                {/* </article>
            <article className="timeline right-container articleCertif"> */}
                <div className='articleCertif-container downDot'>
                    <div className='articleCertif-container-text'>
                        <p>D'autre part, l'évolution du marché du travail et des technologies peut également être un moteur de reconversion. Certaines professions peuvent devenir obsolètes ou connaître une diminution de demande, tandis que de nouveaux secteurs émergent avec des opportunités prometteuses. Anticiper ces changements et se préparer à évoluer vers des domaines porteurs peut s'avérer crucial pour maintenir sa employabilité et sa pertinence sur le marché du travail.
                        </p>
                        <p>Par ailleurs, des événements de la vie personnelle peuvent également influencer la décision de se reconvertir. Un changement de situation familiale, tel qu'une naissance ou un déménagement, peut nécessiter une adaptation professionnelle pour concilier vie personnelle et vie professionnelle. De même, des événements imprévus tels qu'une maladie ou une perte d'emploi peuvent être des catalyseurs de réflexion et de remise en question sur son parcours professionnel.
                        </p>
                        <p>Enfin, la reconversion peut être motivée par le désir de réaliser ses aspirations personnelles et de se sentir pleinement épanoui dans sa carrière. Prendre le risque de changer de voie peut permettre de donner un sens nouveau à son travail, de relever de nouveaux défis et de développer ses talents et passions jusqu'alors sous-exploités.</p>
                    </div>
                </div>
            </article>
            <article className="timeline simpleCont-leftPic">
                <div>
                    <h2>Le bilan de compétences chez Attribut Conseils </h2>
                    <p>Notre approche du bilan de compétences se distingue par son caractère personnalisé et approfondi. Nous croyons en une démarche sur mesure, adaptée à vos besoins spécifiques et à vos objectifs de reconversion. Nos consultants expérimentés vous guideront à travers chaque étape du processus, de l'exploration de vos compétences et intérêts à la création d'un plan d'action concret pour votre reconversion.</p>
                </div>
                <CircleDot displayAll={false} />
            </article>
            <article className="timeline right-container withMovie">
                <h3>Les outils et méthodes </h3>
                <p >Dans cette démarche de reconversion professionnelle, le bilan de compétences joue un rôle essentiel en fournissant les outils et méthodes nécessaires pour évaluer ses aptitudes, ses intérêts et ses valeurs. Chez Attribut Conseils, nous mettons à votre disposition une palette d'outils et de méthodes sophistiqués, soigneusement sélectionnés pour vous accompagner dans cette transition significative.</p>
                <p>Nos consultants expérimentés utilisent des outils psychométriques avancés pour évaluer vos compétences techniques, vos aptitudes comportementales ainsi que votre intelligence émotionnelle. Ces évaluations permettent d'obtenir une vision objective de vos forces et de vos axes de développement, afin de mieux orienter votre reconversion professionnelle.</p>
            </article>
            <article className="timeline right-container-downDot">
                <div className='downDot'>
                    <p>En parallèle, nous utilisons des méthodes d'analyse approfondies pour comprendre vos motivations, vos valeurs et vos aspirations professionnelles. Cette exploration en profondeur de votre identité professionnelle vous permettra de mieux cerner les domaines d'activité qui correspondent à vos attentes et à vos objectifs de carrière.</p>
                    <p>Au-delà des outils et des méthodes, notre approche se distingue par son caractère personnalisé et humain. Nous accordons une grande importance à l'écoute active et à la compréhension de vos besoins spécifiques. Notre équipe de consultants qualifiés vous accompagnera tout au long du processus, en vous fournissant un soutien individualisé et des conseils avisés pour concrétiser votre projet de reconversion professionnelle.</p>
                    <p>En résumé, les outils et méthodes utilisés lors du bilan de compétences chez Attribut Conseils sont conçus pour vous offrir une vision claire et approfondie de vos compétences, de vos intérêts et de vos aspirations professionnelles. Grâce à cette analyse rigoureuse, vous serez en mesure de prendre des décisions éclairées et de mettre en œuvre une reconversion professionnelle réussie et épanouissante.</p>
                </div>
            </article>
            <article className="timeline light ">
                <div className='light-text'>
                    <h2>Témoignages de nos clients ayant effectué un bilan de compétences </h2>
                    <p>Nos clients ont rencontré un succès remarquable grâce à notre accompagnement dans leur reconversion professionnelle. Leurs histoires illustrent la valeur ajoutée d'un bilan de compétences bien réalisé et du soutien expert de notre équipe. Leurs témoignages inspirants sont la preuve que le changement est possible et que le bilan de compétences peut être le premier pas vers une carrière épanouissante. </p>
                    <p className='RecoStars'>5/5 étoiles avis google</p>
                </div>
            </article>
            <GoogleWidget />
            <article className="timeline fireworks ">
                {/* <div className='circleInFire'>
                    <img src={fireworks} alt="" />
                    <div className="yellowCircle"></div>
                    <div className="whiteCircle"></div>
                </div> */}
                <div className='text'>
                    <h2 className='text-start'>Conclusion</h2>
                    <p className='text-start'>En conclusion, le bilan de compétences est un outil précieux pour ceux qui envisagent une reconversion professionnelle. En évaluant vos compétences, vos intérêts et vos aspirations, vous pouvez obtenir une vision claire et approfondie de votre parcours professionnel. Chez Attribut Conseils, nous sommes là pour vous accompagner dans cette démarche, en vous fournissant un soutien personnalisé et des conseils avisés. Que vous souhaitiez changer de métier, vous reconvertir dans un nouveau secteur ou explorer de nouvelles opportunités, un bilan de compétences peut vous aider à prendre des décisions éclairées et à élaborer un plan d'action concret pour réaliser vos objectifs professionnels. N'hésitez pas à nous contacter dès aujourd'hui pour en savoir plus sur nos services et commencer votre voyage vers une carrière épanouissante et gratifiante.</p>
                </div>
                <CircleDot displayAll={false} />
            </article>

            {/* <TelButton number="06 98 88 15 55" /> */}
            <Questions tag='reconversion' mainTitleFaq={mainTitleFaq} mainPfaq={mainPfaq} />
            <ScrollToTop />
        </section >
    );
};

export default BcReco;