import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faGear, faXmark, faUserGroup, faDollarSign, faSquareCheck, faCalendarDays, faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='background-navbar'>
            <div className="nav-header">
                <div className="app-logo">
                    <FontAwesomeIcon icon={faDollarSign} className="navbar-icon"/>
                    <span className="navbar-title">MyBufunfa</span>
                </div>
                <button className="btn-action btn-close-modal">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            <div className="nav-options">
                <NavItem icon={faBars} title="Página inicial" />
                <NavItem icon={faSquareCheck} title="Planejamento" />
                <NavItem icon={faBullseye} title="Relatórios" />
                <NavItem icon={faUserGroup} title="Amigos" />
            </div>
            <div className="nav-footer">
                {/* <img src=".../assets/user/default-avatar.jpg"   onError={(e) => { e.target.src = "../assets/user/default-avatar.jpg";}} /> */}
                <FontAwesomeIcon icon={faUserNinja} className="nav-footer-item img-user-sm"/>
                <span>Amália Coelho</span>
            </div>
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