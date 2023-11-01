import React, { useEffect, useState } from 'react';
import '@/Components/navBar.scss'
import { FaBars, FaTimes, FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        setShowEntrepriseSubMenu(true);
    };

    const toggleOrganismeSubMenu = () => {
        setShowEntrepriseSubMenu(false);
        setShowOrganismeSubMenu(!showOrganismeSubMenu);
    };


    // const toggleNav = () => {
    //     setToogleMenu(!toggleMenu)
    //     if (toggleTraining) {
    //         setToggleTraining(!toggleTraining)
    //     }
    //     if (toggleCarrer) {
    //         setToggleCarrer(!toggleCarrer)
    //     }
    // }
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


    // const toggleCarrerNav = () => {
    //     setToggleCarrer(!toggleCarrer)
    //     setToggleInge(false)
    //     setToggleTraining(false)
    // }
    // const toggleTrainingNav = () => {
    //     setToggleCarrer(false)
    //     setToggleInge(false)
    //     setToggleTraining(!toggleTraining)
    // }
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
                    <Link to="/home" onClick={toggleNav} className="items"><li >Accueil</li></Link>
                    <Link to="/about" onClick={toggleNav} className="items"><li>Qui sommes nous</li></Link>
                    <li className="items" onClick={toggleCarrerNav}>Gestion emploi et carrière
                        {toggleCarrer && (
                            <ul className='sub-list' >
                                <Link to="/bilan-de-competence" onClick={toggleNav}><li>Bilan de compétences</li></Link>
                                <Link to="/vae" onClick={toggleNav}><li>VAE</li></Link>

                                <Link to="/orientation_des_jeunes" onClick={toggleNav}><li>Orientation jeunes</li></Link>
                                <Link to="/outplacement" onClick={toggleNav}><li>Outplacement</li></Link>
                                <Link to="/accompagnement_a_la_recherche_d'emploi" onClick={toggleNav}><li>Accompagnement à la recherche d’emploi</li></Link>
                                <Link to="/coaching" onClick={toggleNav}><li>Coaching</li></Link>
                                <Link to="/psychologie_du_travail" onClick={toggleNav}><li>Psychologie du travail</li></Link>

                            </ul>
                        )}
                    </li>
                    <li className="items" onClick={toggleTrainingNav}>Formation
                        {toggleTraining && (
                            <ul className='sub-list'>
                                <Link to="/ComingSoon" onClick={toggleNav}><li>Accompagnement à la création d’entreprise</li></Link>
                                <Link to="/formation_metier_formateur_adultes" onClick={toggleNav}><li>Formation de formateur</li></Link>
                                <Link to="/formation_metier_consultant_en_gestion_de_carrieres" onClick={toggleNav}><li>Formation consultant en bilan/conseiller emploi</li></Link>
                                <Link to="/ComingSoon" onClick={toggleNav}><li>Groupe analyse de pratiques</li></Link>
                            </ul>
                        )}
                    </li>
                    <li className="items" onClick={toggleIngeNav}>
                        Ingenierie et administration de la formation

                        {toggleInge && (
                            <ul className='sub-list'>
                                <li onClick={toggleEntrepriseSubMenu}>
                                    Entreprise
                                    {showEntrepriseSubMenu ? <FaAngleDown /> : <FaAngleLeft />}
                                    {showEntrepriseSubMenu && (
                                        <ul>
                                            <Link to="/ComingSoon" onClick={toggleNav}><li>entretiens professionnels</li></Link>
                                            <Link to="/ComingSoon" onClick={toggleNav}><li>gestion RH externalisée</li></Link>
                                        </ul>
                                    )}
                                </li>
                                <Link to="/ComingSoon" onClick={toggleNav}><li>Groupe analyse de pratiques</li></Link>
                                <li onClick={toggleOrganismeSubMenu}>
                                    {showOrganismeSubMenu ? <FaAngleDown /> : <FaAngleLeft />}
                                    {showOrganismeSubMenu && (
                                        <ul>
                                            <Link to="/ComingSoon" onClick={toggleNav}><li>Gestion externalisée de la formation</li></Link>
                                            <Link to="/ComingSoon" onClick={toggleNav}><li>Qualiopi</li></Link>
                                        </ul>
                                    )}
                                    Organisme de formation
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