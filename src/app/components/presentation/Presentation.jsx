'use client';
import { useState, useEffect } from 'react';
import './presentation.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';
import photoPerfil from './photoPerfil.jpg';
import Image from 'next/image';
import { useStoreTheme } from '@/app/zustand';

const Presentation = () => {

    const [text, setText] = useState('');

    const { theme } = useStoreTheme();

    useEffect(() => {
        const textH2 = 'FUULL STACK DEVELOPER';
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < textH2.length - 1) {
                setText((prevText) => prevText + textH2[index]);
                index += 1;
            } else {
                clearInterval(intervalId);
            }
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='patherPresentation' >
            <section className={'presentationContainer '+theme} >

                <article className='namePresentation' >
                    <h1>Hola, mi nombre es<br />Diego Martins</h1>
                    <h2>{text}</h2>
                    <p>"Apasionado de UX/UI, me dedico a crear soluciones innovadoras y diseñar experiencias de usuario cautivadoras. Comprometido con la excelencia, busco constantemente formas de incorporar creatividad e innovación en cada proyecto."</p>
                    <div className='detailsPresentation' >

                        <button>Descargar CV <i className="fa-solid fa-download"></i> </button>

                        <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' ><i className="fa-brands fa-linkedin links "></i></Link>

                        <Link href='https://github.com/MartinsDiego17' target='_BLANK'><i className="fa-brands fa-github links"></i></Link>
                    </div>
                </article>

                <article className='imagePresentation' >
                    <Image src={photoPerfil} alt='Foto de perfil' />
                </article>

            </section>
        </div>
    )
}

export default Presentation
