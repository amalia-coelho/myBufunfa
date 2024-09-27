import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faGear, faDollarSign, faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='background-navbar'>
            <div className="nav-header">
                <FontAwesomeIcon icon={faDollarSign} />
                <span className="navbar-title">MyBufunfa</span>
            </div>
            <div className="nav-options">
                <NavItem icon={faBars} title="Teste" />
                <NavItem icon={faHouse} title="Teste" />
                <NavItem icon={faSquareCheck} title="Teste" />
                <NavItem icon={faBullseye} title="Teste" />
                <NavItem icon={faBars} title="Teste" />
            </div>
            <div className="nav-footer">
                {/* <img src=".../assets/user/default-avatar.jpg"   onError={(e) => { e.target.src = "../assets/user/default-avatar.jpg";}} /> */}
                <FontAwesomeIcon icon={faUserNinja} className="nav-footer-item img-user-sm"/>
                <span>Amália Coelho</span>
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
    );
}

const NavItem = (props) => {
    return (
        <div className='nav-item'>
            <FontAwesomeIcon icon={props.icon} />
            <span className='nav-item-title'>{props.title}</span>
        </div>
    );
}

export default Navbar;