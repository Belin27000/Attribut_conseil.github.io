import React, { useEffect, useState } from 'react';
import '@/Components/navBar.scss'
import { FaBars, FaTimes, FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import IngeSubMenu from './NavBar/IngeSubMenu.js';
import EntrpriseSubMenu from './NavBar/EntrpriseSubMenu.js';

const NavBarTest = () => {

    const [toggleMenu, setToogleMenu] = useState(false)
    const [toggleCarrer, setToggleCarrer] = useState(false)
    const [toggleTraining, setToggleTraining] = useState(false)
    const [toggleInge, setToggleInge] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [showEntrepriseSubMenu, setShowEntrepriseSubMenu] = useState(false);
    const [showOrganismeSubMenu, setShowOrganismeSubMenu] = useState(false);

    const toggleEntrepriseSubMenu = () => {
        setShowOrganismeSubMenu(false);
        setToggleInge(true);
        setShowEntrepriseSubMenu(!showEntrepriseSubMenu);
    };

    const toggleOrganismeSubMenu = () => {
        setShowEntrepriseSubMenu(false);
        setShowOrganismeSubMenu(!showOrganismeSubMenu);
    };


    const toggleNav = () => {
        setToogleMenu(!toggleMenu);
        setToggleCarrer(false);
        setToggleTraining(false);
        setToggleInge(false);
        setShowEntrepriseSubMenu(false);
        setShowOrganismeSubMenu(false);
    };

    const toggleCarrerNav = () => {
        setToggleCarrer(!toggleCarrer);
        setToggleInge(false);
        setToggleTraining(false);
        setShowEntrepriseSubMenu(false);
        setShowOrganismeSubMenu(false);
    };

    const toggleTrainingNav = () => {
        setToggleCarrer(false);
        setToggleInge(false);
        setToggleTraining(!toggleTraining);
        setShowEntrepriseSubMenu(false);
        setShowOrganismeSubMenu(false);
    };

    const toggleIngeNav = () => {
        setToggleCarrer(false)
        setToggleTraining(false)
        setToggleInge(!toggleInge)

    }



    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [])
    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="list">
                    <li><Link to="/home" className="items" onClick={toggleNav}><div>Accueil</div></Link></li>
                    <li><Link to="/about" className="items" onClick={toggleNav}><div>Qui sommes nous</div></Link></li>
                    <li className="items" onMouseEnter={toggleCarrerNav} onMouseLeave={toggleCarrerNav}>Gestion emploi et carrière
                        {toggleCarrer && (
                            <ul className='sub-list' >
                                <li><Link to="/bilan-de-competence" onClick={toggleNav}><div>Bilan de compétences</div></Link></li>
                                <li><Link to="/vae" onClick={toggleNav}><div>VAE</div></Link></li>
                                <li><Link to="/orientation_des_jeunes" onClick={toggleNav}><div>Orientation jeunes</div></Link></li>
                                <li><Link to="/outplacement" onClick={toggleNav}><div>Outplacement</div></Link></li>
                                <li><Link to="/accompagnement_a_la_recherche_d'emploi" onClick={toggleNav}><div>Accompagnement à la recherche d’emploi</div></Link></li>
                                <li><Link to="/coaching" onClick={toggleNav}><div>Coaching</div></Link></li>
                                <li><Link to="/psychologie_du_travail" onClick={toggleNav}><div>Psychologie du travail</div></Link></li>                            </ul>
                        )}
                    </li>
                    <li className="items" onMouseEnter={toggleTrainingNav} onMouseLeave={toggleTrainingNav} >Formation
                        {toggleTraining && (
                            <ul className='sub-list'>
                                <li><Link to="/formation_creation_entreprise " onClick={toggleNav}><div>Accompagnement à la création d’entreprise</div></Link></li>
                                <li><Link to="/formation_metier_formateur_adultes" onClick={toggleNav}><div>Formation de formateur</div></Link></li>
                                <li><Link to="/formation_metier_consultant_en_gestion_de_carrieres" onClick={toggleNav}><div>Formation consultant en bilan/conseiller emploi</div></Link></li>
                                <li><Link to="/ComingSoon" onClick={toggleNav}><div>Groupe analyse de pratiques</div></Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="items" onMouseEnter={toggleIngeNav} onMouseLeave={toggleIngeNav}>
                        Ingenierie et administration de la formation
                        {/* toggleInge */}
                        {toggleInge && (
                            <ul className='sub-list'>
                                {/* <li onMouseEnter={toggleEntrepriseSubMenu} onMouseLeave={toggleEntrepriseSubMenu}> */}
                                <li onMouseEnter={toggleEntrepriseSubMenu} onMouseLeave={toggleEntrepriseSubMenu}>
                                    <FaAngleLeft />
                                    Entreprise
                                    {showEntrepriseSubMenu && (
                                        <EntrpriseSubMenu />
                                    )}
                                    {/* {true && (
                                        <EntrpriseSubMenu />
                                    )} */}
                                </li>
                                <li><Link to="/ingenierie_formation" className="items" onClick={toggleNav}><div>Ingénierie de la formation</div></Link></li>
                                <li onMouseEnter={toggleOrganismeSubMenu} onMouseLeave={toggleOrganismeSubMenu} >
                                    <FaAngleLeft />
                                    Organisme de formation
                                    {showOrganismeSubMenu && (
                                        <IngeSubMenu />
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                </ul>
            )}
            <button onClick={toggleNav} className="btn" >
                <FaBars className={!toggleMenu ? 'iconMenu isActive' : 'iconMenu'} />
                <FaTimes className={toggleMenu ? 'closeIconMenu isActive' : 'iconMenu'} />
            </button>

        </nav >
    );
};


export default NavBarTest;