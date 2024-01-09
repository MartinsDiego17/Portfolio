'use client';
import { useState } from 'react';
import './header.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import es from './es.svg';
import en from './en.svg';
import Image from 'next/image';

const Header = () => {

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

    console.log(acerca)

    return (
        <nav id={'header-nav-' + theme} className={'headerContainer ' + theme} >
            <h1 onClick={() => scroll(0, 'home')} className={theme} >MARTINS</h1>
            <ul className='' >

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

            </ul>
        </nav>
    )
}

export default Header
