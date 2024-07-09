'use client';
import './projects.css';
import vorttex from './vorttex.jpeg';
import pokedex from './pokedex.jpeg';
import labarra from './labarra.jpeg';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Project from './project/Project';

const Projects = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();
    const projects = [
        {
            title: "La Barra Boulevard",
            quantity: 1,
            image: labarra,
            description: currentLenguaje === "es"
                ? "La barra boulevard es hasta ahora mi proyecto más importante. Se trata de un e-commerce full-stack desarrollado para un restaurante de Chile, que cuenta con una navegación muy intuitiva y una gestión de base de datos sólida."
                : "A Pokédex developed with the Poke-Api, offering user-friendly features like registration, login forms, and Pokémon creation. Enhanced with sorting, filtering, and search options, it provides a comprehensive and engaging experience.",
            stack: ['Javascript', 'Next', 'React'],
            github: "https://github.com/MartinsDiego17/La-Barra-Sport-Bar",
            deploy: "https://la-barra-boulevard.vercel.app/"
        },
        {
            title: "Vorttex Gaming",
            quantity: 8,
            image: vorttex,
            description: currentLenguaje === "es"
                ? "Vorttex Gaming es un E-Commerce que desarrollamos con mi equipo de estudio, en el cual tuve algunos retos que al superarlos me hicieron mejorar como desarrollador"
                : "Vorttex Gaming is an E-Commerce site developed with my study team. Overcoming challenges during its creation significantly improved my skills as a developer.",
            stack: ['Javascript', 'Next', 'React'],
            github: "https://github.com/zuoki/VorttexGaming",
            deploy: "https://pf-final-damian-projects.vercel.app/"
        },
        {
            title: "Pokedex",
            quantity: 1,
            image: pokedex,
            description: currentLenguaje === "es"
                ? "Pokedex elaborada con la Poke-Api, con formularios de registro, inicio de sesión y creación de pokemones. También cuenta con ordenamientos, filtros y búsqueda de pokemones."
                : "A Pokédex developed with the Poke-Api, offering user-friendly features like registration, login forms, and Pokémon creation. Enhanced with sorting, filtering, and search options, it provides a comprehensive and engaging experience.",
            stack: ['Javascript', 'Vite', 'React'],
            github: "https://github.com/MartinsDiego17/PI-Pokemon-main"
        }
    ];
    const [localProjects, setLocalProjects] = useState(projects);
    useEffect(() => {
        setLocalProjects(projects);
    }, []);
    const arrows = ["<", ">"];

    const [selected, setSelected] = useState(projects[0]);
    const [indice, setIndice] = useState(0);

    const text = currentLenguaje === "es" ? "Proyecto" : "Project";
    const handleProject = (op) => {
        let index;
        if (op === 0 && indice > 0) {
            setIndice(indice - 1);
            index = indice - 1;
            setSelected(projects[index]);
        } else if (op === 1 && indice + 1 !== projects.length) {
            setIndice(indice + 1);
            index = indice + 1;
            setSelected(projects[index]);
        }
    };

    let projectsRender = localProjects;

    return (
        <div className='patherProjects' >

            <div
                className={'projectsContainer ' + theme}
                style={{ backgroundImage: `url(${selected.image.src && selected.image.src})` }}
            >
                <section>
                    <article className='detailsArrows' >
                        <div>
                            <p className='text' >{text.toUpperCase()}</p>
                            <h1>{selected.title.toUpperCase()}
                                <div className='quantity' >
                                    {selected.quantity} <i class="fa-solid fa-user"></i>
                                </div>
                            </h1>
                            <p className='description' >{selected.description}</p>
                            {
                                selected.deploy && <a href={selected.deploy} target='_blank'>
                                    <button className='links' >Demo <i class="fa-solid fa-link"></i></button>
                                </a>
                            }
                            <a href={selected.github} target='_blank' >
                                <button className='links' >Code <i class="fa-brands fa-github"></i></button>
                            </a>
                            {selected?.stack &&
                                selected.stack.map((hab, index) => (
                                    <span className='habilitie' >{hab}</span>
                                ))
                            }
                        </div>
                        <div className='buttonsChange' >
                            <button onClick={() => handleProject(0)} className='change' >{arrows[0]}</button>
                            <button onClick={() => handleProject(1)} className='change' >{arrows[1]}</button>
                        </div>
                    </article>

                    <article className='projectsOp' >
                        {
                            projectsRender.length &&
                            projectsRender.map((proyecto, index) => (
                                (
                                    <div key={index} className='divProject'>
                                        <Project
                                            projects={projects}
                                            title={proyecto.title}
                                            imagen={proyecto.image}
                                            id={index}
                                            isSelected={proyecto.title === selected.title}
                                            setSelected={setSelected}
                                            setIndice={setIndice}
                                        />
                                    </div>
                                )
                            ))
                        }
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Projects;
