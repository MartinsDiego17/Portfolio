'use client';
import { useState } from 'react';
import './header.css';

const Header = () => {

    const [border, setBorder] = useState({
        home: '',
        about: '',
        projects: '',
        contact: '',
    });

    const scroll = (n, li) => {
        window.scrollTo({
            top: n,
            behavior: 'smooth'
        });

        setBorder({
            [li]: 'border'
        })

    };

    return (
        <nav id='header-nav' className='headerContainer' >
            <h1 onClick={() => scroll(0, 'home')} >MARTINS</h1>
            <ul>
                <li className={border.home} onClick={() => scroll(0, 'home')} >Inicio</li>
                <li className={border.about} onClick={() => scroll(600, 'about')} >Acerca de mí</li>
                <li className={border.projects} onClick={() => scroll(2000, 'projects')} >Proyectos</li>
                <li className={border.contact} onClick={() => scroll(4000, 'contact')} >Contacto</li>
                <li><i className="fa-solid fa-moon"></i></li>
                <li><i className="fa-solid fa-earth-americas"></i></li>
            </ul>
        </nav>
    )
}

export default Header
