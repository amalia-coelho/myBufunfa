import { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faGear, faXmark, faUserGroup, faDollarSign, faSquareCheck, faCalendarDays, faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMinimized, setIsMinimized] = useState(true);
    // Função para alternar o estado de minimização
    const toggleMenu = () => {
        setIsMinimized(!isMinimized);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'b') {
                event.preventDefault();
                toggleMenu();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div className={`background-navbar ${isMinimized ? 'minimized' : ''}`}>
            <div className="nav-header">
                <div className="app-logo">
                    <FontAwesomeIcon icon={faDollarSign} className="navbar-icon"/>
                    <span className="navbar-title">MyBufunfa</span>
                </div>
                <button className="btn-action" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMinimized ? faBars : faXmark} />
                </button>
            </div>
            {!isMinimized && (
                <>
                    <div className="nav-options">
                        <a href="#"><NavItem icon={faBars} title="Página inicial" /></a>
                        <a href="#"><NavItem icon={faSquareCheck} title="Planejamento" /></a>
                        <a href="#"><NavItem icon={faBullseye} title="Relatórios" /></a>
                        <a href="#"><NavItem icon={faUserGroup} title="Amigos" /></a>
                    </div>
                    <div className="nav-footer">
                        {/* <img src=".../assets/user/default-avatar.jpg"   onError={(e) => { e.target.src = "../assets/user/default-avatar.jpg";}} /> */}
                        <button className="btn-user-profile">
                            <FontAwesomeIcon icon={faUserNinja} className="nav-footer-item img-user-sm"/>
                        </button>
                        <span>Amália Coelho</span>
                    </div>
                </>
            )}
        </div>
    );
}

const NavItem = (props) => {
    return (
        <div className='nav-item'>
            <FontAwesomeIcon icon={props.icon} className="nav-item-icon"/>
            <span className='nav-item-title'>{props.title}</span>
        </div>
    );
}

export default Navbar;