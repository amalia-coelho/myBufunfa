import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquareCheck, faCalendarDays, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Importando ícones específicos
import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-header">
                    <div className="nav-logo">
                        <span className="nav-title">MyBufunfa</span>
                    </div>
                    <div className="nav-routes">
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Inicial</span>
                        </a>
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faSquareCheck} />
                            <span>Tarefas</span>
                        </a>    
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>Hábitos</span>
                        </a>
                        <a className="nav-item" href="#">
                            <FontAwesomeIcon icon={faBullseye} />
                            <span>Metas</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;