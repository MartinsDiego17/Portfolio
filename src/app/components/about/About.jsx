'use client';
import Image from 'next/image';
import Job from '../experience/lastjob/Job';
import './about.css';
import js from './js.svg';
import nextjs from './nextjs.svg';
import nextjsdark from './nextjsdark.svg';
import react from './react.svg';
import html from './html.svg';
import css from './css.svg';
import redux from './redux.svg';
import vite from './vite.svg';
import tailwind from './tailwind.svg';
import sequelize from './sequelize.svg';
import node from './node.svg';
import git from './git.svg';
import github from './github.svg';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const About = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const acerca = currentLenguaje === "es" ? "Acerca de mí" : "About me";
    const parrafo1 = currentLenguaje === "es"
        ? "Apasionado del desarrollo web con incesante interés y curiosidad por este hermoso mundo siempre queriendo adquirir nuevos conocimientos y habilidades que me potencien en carrera."
        : "Passionate about web development with an insatiable interest and curiosity for this beautiful world, always eager to acquire new knowledge and skills that empower me in my career.";

    const parrafo2 = currentLenguaje === "es" ? "En mi camino de aprendizaje, pude adquirir conocimientos sólidos en el campo, aportando en equipos de trabajo creando soluciones creativas y consistentes mayormente orientadas al front-end."
        : "In my learning journey, I was able to gain solid knowledge in the field, contributing to teamwork by creating creative and consistent solutions, primarily focused on the front-end.";

    const educacion = currentLenguaje === "es" ? "Educación" : "Education";
    const tecnologias = currentLenguaje === "es" ? "Tecnologías" : "Technologies";



    return (
        <div className='patherAbout' >
            <div className={'aboutContainer ' + theme}>
                <h1>{acerca}</h1>

                <p>
                    {parrafo1}
                </p>

                <p>
                    {parrafo2}
                </p>

                <section>

                    <article className='education' >

                    </article>

                    <article className='stackTechs' >

                        <section>

                            <article className='education' >
                                <h3>{educacion}</h3>
                                <div className='jobContainer' >
                                    <h2><span>.</span>Full stack developer -<strong> Soy Henry</strong></h2>
                                    <div className='detailsJob' >
                                        <small>2023 - 2023</small>
                                    </div>
                                </div>
                            </article>

                            <article className='technologiesStack' >
                                <h3>{tecnologias}</h3>
                                <div>
                                    <h2><Image src={js} alt='Javascript' width={30} height={30} /></h2>
                                    {theme === "dark" ? (
                                        <h2><Image src={nextjs} alt='Next JS' width={30} height={30} /></h2>
                                    ) : (
                                        <h2><Image src={nextjsdark} alt='Next JS' width={30} height={30} /></h2>
                                    )}
                                    <h2><Image src={react} alt='React JS' width={30} height={30} /></h2>
                                    <h2><Image src={html} alt='HTML5' width={30} height={30} /></h2>
                                    <h2><Image src={css} alt='CSS3' width={30} height={30} /></h2>
                                    <h2><Image src={redux} alt='Redux' width={30} height={30} /></h2>
                                    <h2><Image src={vite} alt='Vite' width={30} height={30} /></h2>
                                    <h2><Image src={tailwind} alt='Tailwind CSS' width={30} height={30} /></h2>
                                    <h2><Image src={sequelize} alt='Sequelize' width={30} height={30} /></h2>
                                    <h2><Image src={node} alt='Node JS' width={30} height={30} /></h2>
                                    <h2><Image src={git} alt='Git' width={30} height={30} /></h2>
                                    <h2><Image src={github} alt='Github' width={30} height={30} /></h2>
                                </div>
                            </article>

                        </section>

                    </article>

                </section>

            </div>
        </div>
    )
}

export default About;
