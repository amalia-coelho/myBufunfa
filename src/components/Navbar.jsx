import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'; // Importando ícones específicos
import '../styles/Navbar.css';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };


    return (
            <nav className={`navbar ${isExpanded ? 'expanded' : 'collapseds'}`}>
                <div className="nav-header">
                    <div className="nav-toggle">
                        <button className="nav-toggle-button" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={isExpanded ? faXmark : faBars} />
                        </button>    
                    </div>
                    <div className="nav-routes">
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faHouse} />
                            {isExpanded && <span>Inicial</span>}
                        </a>
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faSquareCheck} />
                            {isExpanded && <span>Tarefas</span>}
                        </a>    
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            {isExpanded && <span>Hábitos</span>}
                        </a>
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faBullseye} />
                            {isExpanded && <span>Metas</span>}
                        </a>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;