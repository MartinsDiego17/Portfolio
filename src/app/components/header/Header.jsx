'use client';
import { useState } from 'react';
import './header.css';
import { useStoreTheme } from '@/app/zustand';

const Header = () => {

    const { changeTheme, theme } = useStoreTheme();

    const [border, setBorder] = useState({
        home: '',
        about: '',
        projects: '',
        contact: '',
        theme: '',
        lenguaje: ''
    });

    const [borderLight, setBorderLight] = useState({
        home: '',
        about: '',
        projects: '',
        contact: '',
        theme: '',
        lenguaje: ''
    });

    const scroll = (n, li) => {

        if (theme === 'dark') {
            setBorder({
                [li]: 'border'
            })
        } else if (theme === 'light') {
            setBorderLight({
                [li]: 'borderLight'
            })
        }

        if (n === null) return;

        window.scrollTo({
            top: n,
            behavior: 'smooth'
        });
    };

    const fnChangeTheme = (li) => {
        changeTheme();
        scroll(null, li);
        const body = document.getElementsByTagName('body')[0];
        if (body.classList[1]) {
            body.classList.remove('bodyLight');
            return;
        }
        body.classList.add('bodyLight')

    }

    return (
        <nav id={'header-nav-' + theme} className={'headerContainer ' + theme} >
            <h1 onClick={() => scroll(0, 'home')} className={theme} >MARTINS</h1>
            <ul className='' >

                <li className={border.home + ' ' + theme + ' ' + borderLight.home} onClick={() => scroll(0, 'home')} >Inicio</li>

                <li className={border.about + ' ' + theme + ' ' + borderLight.about} onClick={() => scroll(600, 'about')} >Acerca de mí</li>

                <li className={border.projects + ' ' + theme + ' ' + borderLight.projects} onClick={() => scroll(2000, 'projects')} >Proyectos</li>

                <li className={border.contact + ' ' + theme + ' ' + borderLight.contact} onClick={() => scroll(4000, 'contact')} >Contacto</li>

                {theme === "dark" ? (
                    <li onClick={() => fnChangeTheme(theme)}>
                        <i className={"fa-solid fa-moon " + theme + ' ' + borderLight.theme}></i>
                    </li>
                ) : (
                    <li onClick={() => fnChangeTheme(theme)}>
                        <i className={"fa-solid fa-sun " + theme + ' ' + borderLight.theme}></i>
                    </li>
                )}


                <li><i className={"fa-solid fa-earth-americas " + theme + ' ' + borderLight.lenguaje}></i></li>
            </ul>
        </nav>
    )
}

export default Header
