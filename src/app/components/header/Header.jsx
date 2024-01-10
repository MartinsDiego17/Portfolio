'use client';
import { useState } from 'react';
import './header.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import es from './es.svg';
import en from './en.svg';
import Image from 'next/image';
import Burguer from './burguer/Burguer';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState('false');

    const { changeTheme, theme } = useStoreTheme();
    const { changeCurrentLenguaje, currentLenguaje } = useStoreLenguaje();

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

    const fnChangeCurrentLenguaje = () => {
        changeCurrentLenguaje()
    }

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

    const inicio = currentLenguaje === 'es' ? 'Inicio' : 'Home';
    const acerca = currentLenguaje === 'es' ? 'Acerca de mí' : 'About me';
    const proyectos = currentLenguaje === 'es' ? 'Proyectos' : 'Projects';
    const contacto = currentLenguaje === 'es' ? 'Contacto' : 'Contact';

    const inicioLi = {
        clase: border.home + ' ' + theme + ' ' + borderLight.home,
        fn: () => scroll(0, 'home'),
        texto: inicio
    }

    const acercaLi = {
        clase: border.about + ' ' + theme + ' ' + borderLight.about,
        fn: () => scroll(600, 'home'),
        texto: acerca
    }

    const proyectosLi = {
        clase: border.projects + ' ' + theme + ' ' + borderLight.projects,
        fn: () => scroll(2000, 'home'),
        texto: proyectos
    }

    const contactoLi = {
        clase: border.contact + ' ' + theme + ' ' + borderLight.contact,
        fn: () => scroll(20000, 'home'),
        texto: contacto
    }

    const temaLi = {
        claseIcon: theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun',
        fn: () => fnChangeTheme(theme),
        clase: ' ' + borderLight.theme,
    }

    const idiomaLi = {
        claseIcon: currentLenguaje === 'es' ? es : en,
        clase: border.about + ' ' + theme + ' ' + borderLight.about,
        texto: currentLenguaje,
        fn: fnChangeCurrentLenguaje
    }

    return (
        <nav id={'header-nav-' + theme} className={'headerContainer ' + theme} >
            {/* <h1 onClick={() => scroll(0, 'home')} className={theme} >MARTINS</h1> */}

            <h1 onClick={() => scroll(0, 'home')} className={theme} >MARTINS</h1>

            <ul className='ulNormal' >

                <li className={border.home + ' ' + theme + ' ' + borderLight.home} onClick={() => scroll(0, 'home')} >{inicio}</li>

                <li className={border.about + ' ' + theme + ' ' + borderLight.about} onClick={() => scroll(600, 'about')} >{acerca}</li>

                <li className={border.projects + ' ' + theme + ' ' + borderLight.projects} onClick={() => scroll(2000, 'projects')} >{proyectos}</li>

                <li className={border.contact + ' ' + theme + ' ' + borderLight.contact} onClick={() => scroll(4000, 'contact')} >{contacto}</li>

                {theme === "dark" ? (
                    <li onClick={() => fnChangeTheme(theme)}>
                        <i className={"fa-solid fa-moon " + theme + ' ' + borderLight.theme}></i>
                    </li>
                ) : (
                    <li onClick={() => fnChangeTheme(theme)}>
                        <i className={"fa-solid fa-sun " + theme + ' ' + borderLight.theme}></i>
                    </li>
                )}

                <li className='currentLenguaje' >
                    {currentLenguaje === "es" ? (
                        <div className='currentLenguajeDiv'>
                            <span className='currentLenguajeSpan' >ES</span>
                            <Image onClick={fnChangeCurrentLenguaje} src={es} width={20} height={20} alt={currentLenguaje} />
                        </div>
                    ) : (
                        <div className='currentLenguajeDiv' >
                            <span className='currentLenguajeSpan' >EN</span>
                            <Image onClick={fnChangeCurrentLenguaje} src={en} width={20} height={20} alt={currentLenguaje} />
                        </div>
                    )}
                </li>

            </ul>

            <h3 className={'burgerMenu ' + theme}>
                <i className="fa-solid fa-bars" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Burguer
                        isOpen={isMenuOpen}
                        closeMenu={setIsMenuOpen}
                        inicio={inicioLi}
                        acerca={acercaLi}
                        proyectos={proyectosLi}
                        contacto={contactoLi}
                        tema={temaLi}
                        idioma={idiomaLi}
                    />
                </i>
            </h3>


        </nav>
    )
}

export default Header
