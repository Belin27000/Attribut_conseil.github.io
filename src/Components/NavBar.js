import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/navBar.css'


const NavBar = () => {

    const [open, setOpen] = useState(false)
    const [openFormation, setOpenFormation] = useState(false)
    const [openInge, setOpenInge] = useState(false)
    const handleMouseEnter = () => {
        setOpen(true);
    };
    const handleMouseLeave = () => {
        setOpen(false);
        setOpenFormation(false)
    }

    const handleMouseEnterFormation = () => {
        setOpenFormation(true)

    }
    const handleMouseLeaveFormation = () => {
        setOpenFormation(false)

    }
    const handleMouseEnterInge = () => {
        setOpenInge(true)

    }
    const handleMouseLeaveInge = () => {
        setOpenInge(false)

    }

    return (
        <nav className='NavBar'>
            <ul className='allNavMainItems'>
                <li className='NavLink'><Link to="/home">Acceuil</Link></li>
                <li className='NavLink'><Link to="/ComingSoon">Qui sommes nous</Link></li>
                <li className='NavLink'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ><div>Gestion emploi et carrière</div>
                    {open && (
                        <ul className='menuDetail' onMouseLeave={() => setOpen(false)}>
                            <li><Link to="/ComingSoon">Bilan de compétences</Link></li>
                            <li><Link to="/ComingSoon">VAE</Link></li>
                            <li><Link to="/ComingSoon">Orientation jeunes</Link></li>
                            <li><Link to="/ComingSoon">Outplacement</Link></li>
                            <li><Link to="/ComingSoon">Accompagnement à la recherche d’emploi</Link></li>
                            <li><Link to="/ComingSoon">Coaching</Link></li>
                            <li><Link to="/ComingSoon">Psychologie du travail</Link></li>
                        </ul>
                    )
                    }
                </li>
                <li className='NavLink'
                    onMouseEnter={handleMouseEnterFormation}
                    onMouseLeave={handleMouseLeaveFormation}
                ><div>Formation</div>
                    {openFormation && (
                        <ul className='menuDetail' onMouseLeave={() => setOpenFormation(false)}>
                            <li><Link to="/ComingSoon">Accompagnement à la création d’entreprise</Link></li>
                            <li><Link to="/ComingSoon">Formation de formateur</Link></li>
                            <li><Link to="/ComingSoon">Formation consultant en bilan/conseiller emploi</Link></li>
                        </ul>
                    )
                    }
                </li>
                <li className='NavLink'
                    onMouseEnter={handleMouseEnterInge}
                    onMouseLeave={handleMouseLeaveInge}
                ><div>Ingenierie et administration de la formation</div>
                    {openInge && (
                        <ul className='menuDetail' onMouseLeave={() => setOpenInge(false)}>
                            <li><Link to="/ComingSoon">Pour l’entreprise</Link></li>
                            <li><Link to="/ComingSoon">Pour l’organisme de formation</Link></li>

                        </ul>

                    )
                    }
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;