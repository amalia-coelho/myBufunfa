import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    // Função para lidar com o scroll
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const icons = [faHouse, faSquareCheck, faCalendarDays, faBullseye, faBars];
    const titles = ['Inicial', 'Tarefas', 'Calendário', 'Objetivos', 'Menu'];
    const totalItems = icons.length; // Defina o número total de itens

    const calculateOffset = () => {
        const scrollOffset = Math.floor(scrollY / 100) % totalItems; // Ajuste o divisor para controlar a sensibilidade
        return scrollOffset;
    };
      
    const offset = calculateOffset();

    const rotatedIcons = [...icons.slice(offset), ...icons.slice(0, offset)];
    const rotatedTitles = [...titles.slice(offset), ...titles.slice(0, offset)];

    const NavOption = ({ icon, label, index }) => {
        const angle = 360 / totalItems * index;
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