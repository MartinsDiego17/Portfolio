'use client';
import { useState, useEffect } from 'react';
import './presentation.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';
import photoPerfil from './photoPerfil.jpg';
import Image from 'next/image';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Presentation = () => {

    const [text, setText] = useState('');

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

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

    const saludo = currentLenguaje === "es" ? "Hola, mi nombre es" : "Hello, my name is";
    const parrafo = currentLenguaje === "es"
        ? '"Apasionado de UX/UI, me dedico a crear soluciones innovadoras y diseñar experiencias de usuario cautivadoras. Comprometido con la excelencia, busco constantemente formas de incorporar creatividad e innovación en cada proyecto."'

        : '"Passionate about UX/UI, I am devoted to creating innovative solutions and designing exceptionally captivating user experiences. Committed to excellence, constantly looking for ways to incorporate creativity and innovation in each project"';
    const descarga = currentLenguaje === "es" ? "Descargar" : "Download";

    async function downloadCv() {
        try {
            const response = await fetch('/CV_DIEGO_MARTINS.pdf'); // Ruta relativa al archivo PDF en la carpeta "public"
            const fileData = await response.blob();

            const link = document.createElement('a');
            const fileUrl = URL.createObjectURL(fileData);
            link.href = fileUrl;
            link.download = 'CV_DIEGO_MARTINS.pdf';
            link.click();
            URL.revokeObjectURL(fileUrl);
        } catch (error) {
            console.error('Error al descargar el archivo PDF:', error);
        }
    }

    return (
        <div className='patherPresentation' >
            <section className={'presentationContainer ' + theme} >
                <article className='namePresentation' >
                    <h1>{saludo}<br />Diego Martins</h1>
                    <h2>{text}</h2>
                    <p>{parrafo}</p>
                    <div className='detailsPresentation' >

                        <button onClick={downloadCv}  >
                            {descarga} CV
                            <i className="fa-solid fa-download"></i>
                        </button>

                        <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' ><i className="fa-brands fa-linkedin links "></i></Link>
                        <Link href='https://github.com/MartinsDiego17' target='_BLANK'><i className="fa-brands fa-github links"></i></Link>
                        <Link href={'mailto:martinsdiego0513@outlook.es'}><i class="fa-solid fa-envelope links"></i></Link>
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
