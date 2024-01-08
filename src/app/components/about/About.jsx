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
import { useStoreTheme } from '@/app/zustand';

const About = () => {

    const { theme } = useStoreTheme();

    return (
        <div className='patherAbout' >
            <div className={'aboutContainer ' + theme}>
                <h1>Acerca de mí</h1>

                <p>Apasionado del desarrollo web con incesante interés y curiosidad por este hermoso mundo siempre
                    queriendo adquirir nuevos conocimientos y habilidades que me potencien en carrera.
                </p>

                <p>
                    En mi camino de aprendizaje, pude adquirir conocimientos sólidos en el campo, aportando en equipos de trabajo creando soluciones creativas y consistentes mayormente orientadas al front-end.
                </p>

                <section>

                    <article className='education' >

                    </article>

                    <article className='stackTechs' >

                        <section>

                            <article className='education' >
                                <h3>Educación</h3>
                                <div className='jobContainer' >
                                    <h2><span>.</span>Full stack developer -<strong> Soy Henry</strong></h2>
                                    <div className='detailsJob' >
                                        <small>2023 - 2023</small>
                                    </div>
                                </div>
                            </article>

                            <article className='technologiesStack' >
                                <h3>Tecnologías</h3>
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
