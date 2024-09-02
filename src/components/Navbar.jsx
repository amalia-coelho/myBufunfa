import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'; // Importando ícones específicos
import '../styles/Navbar.css';

const Navbar = () => {
    const NavOption = ({ icon, label, angle }) => {
        const elementStyle = {
          transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`,
        };
    
        return (
          <div className="nav-option" style={elementStyle}>
            <a className="nav-item" href="#">
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </a>
          </div>
        );
    };

    const icons = [faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars];
    const titles = ['Inicial', 'Tarefas', 'Calendário', 'Objetivos', 'Menu'];
    const angles = [70, 30, 0, 320, 280];

    return (
        <div className="nav-container">
            <nav>
                {icons.map((icon, index) => (
                    <NavOption
                        key={index}
                        icon={icon}
                        label={titles[index]}
                        angle={angles[index]}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Navbar;