import blogDatas from '@/_Services/blog.service.js'
import verticalDots from '../../Assets/Images/verticalDots.png'
import React, { useState } from 'react';
import './blog.scss'
import { Link } from 'react-router-dom';
// import SocialNetwork from '../../Components/SocialNetwork/SocialNetwork.js';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
const Blog = () => {

    const insta = 'https://www.instagram.com/attribut_conseils/'
    const Fb = 'https://www.facebook.com/AttributConseils/'
    const Twitter = 'https://twitter.com/AttributConseil'
    const Linkedin = 'https://www.linkedin.com/company/attribut-conseils/?viewAsMember=true'

    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const metaTitle = `Attribut Conseils | Blog - Expert en Relation Homme/Travail`
    const metaDescription = `Conseils sur l'évolution professionnelle, la recherche d'emploi et les droits à la formation par Attribut Conseils. Découvrez nos articles pratiques.`

    console.log(blogDatas);

    return (
        <div className='Blog'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <div className='Blog-header'>
                <div className='Blog-title'>
                    <h1>BLOG</h1>
                </div>
                <div className='Blog-catList'>
                    <img src={verticalDots} alt="ronds bleu et jaune superposés" />
                    <ul>
                        <li onClick={() => handleCategoryClick(null)}>CATÉGORIE</li>
                        <li onClick={() => handleCategoryClick('évolution professionnelle')}>Évolution professionnelle</li>
                        <li onClick={() => handleCategoryClick('Conseils recherche d\'emploi')}>Conseils recherche d'emploi</li>
                        <li onClick={() => handleCategoryClick('Droit à la formation')}>Droit à la formation</li>
                    </ul>
                </div>
            </div>
            <div className="Blog-content">
                {blogDatas.filter(article => (selectedCategory ? article.categorie.includes(selectedCategory) : true) && article.PageLink)
                    .map((article, index) => (
                        <div key={index} className="Blog-article">
                            <div className='pic-container'>
                                <img src={article.picture} alt={article.pictureAlt} />
                            </div>
                            <div className="text-container">
                                <h2 >{article.title}</h2>
                                <p>{article.description}</p>
                                <Link to={article.PageLink}>Lire l'article...</Link>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="Blog-end">
                <div className="text-container">
                    <h2 className="title-end">Echangeons</h2>
                    <ul>
                        <Link to="/contact"><li>Nous Contacter</li></Link>
                        <Link to="/formation_metier_consultant_en_gestion_de_carrieres"><li>Devenir consultant</li></Link>
                        <li>Nous Suivre
                            <ul className='Blog-SocialNetwork'>
                                <Link to={insta} target="_blank">
                                    <li>
                                        <FaInstagram />
                                    </li>
                                </Link>
                                <Link to={Fb} target="_blank">
                                    <li><FaFacebookSquare /></li>
                                </Link>
                                <Link to={Twitter} target="_blank">
                                    <li><FaXTwitter /></li>
                                </Link>
                                <Link to={Linkedin} target="_blank">
                                    <li><FaLinkedin /></li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img src={verticalDots} alt="ronds bleu et jaune superposés" />
            </div>
        </div>
    );
};

export default Blog;