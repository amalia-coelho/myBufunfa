import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const icons = [faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars];
    const titles = ['Inicial', 'Tarefas', 'Calendário', 'Objetivos', 'Menu'];
    const totalItems = icons.length;

    const [offset, setOffset] = useState(0);

    const handleNavigation = (direction) => {
        if (direction === 'down') {
            setOffset((prevOffset) => (prevOffset + 1) % totalItems);
        } else if (direction === 'up') {
            setOffset((prevOffset) => (prevOffset - 1 + totalItems) % totalItems);
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const sensitivityThreshold = 10;
            if (event.deltaY > sensitivityThreshold) {
                handleNavigation('down');
            } else if (event.deltaY < -sensitivityThreshold) {
                handleNavigation('up');
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'w') {
                handleNavigation('up');
            } else if (event.key === 's') {
                handleNavigation('down');
            }
        };

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const rotatedIcons = [...icons.slice(offset), ...icons.slice(0, offset)];
    const rotatedTitles = [...titles.slice(offset), ...titles.slice(0, offset)];

    const NavOption = ({ icon, label, index }) => {
        // Defina os ângulos manualmente para cada item, começando de -70° até +70°
        const angles = [300, 330, 0, 35, 70];
        const angle = angles[index];

        const elementStyle = {
            transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`,
        };

        // Aplica uma classe especial ao item na posição de ângulo 0
        const isSelected = index === 2 ? 'selected' : '';

        return (
            <div className={`nav-option ${isSelected}`} style={elementStyle}>
                <a className="nav-item" href="#">
                    <FontAwesomeIcon icon={icon} />
                    <span>{label}</span>
                </a>
            </div>
        );
    };

    return (
        <div className="nav-container">
            <nav>
                {rotatedIcons.map((icon, index) => (
                    <NavOption
                        key={index}
                        icon={icon}
                        label={rotatedTitles[index]}
                        index={index}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Navbar;
