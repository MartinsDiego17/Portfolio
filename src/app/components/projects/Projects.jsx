'use client';
import Project from './project/Project';
import './projects.css';
import vorttex from './vorttex.jpg';
import pokedex from './pokedex.jpeg';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Projects = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const proyectos = currentLenguaje === "es" ? "Proyectos" : "Projects";

    const descripcion = currentLenguaje === "es"
        ? "Vorttex Gaming es un E-Commerce que desarrollamos con mi equipo de estudio, en el cual tuve algunos retos que al superarlos me hicieron mejorar como desarrollador"
        : "Vorttex Gaming is an E-Commerce site developed with my study team. Overcoming challenges during its creation significantly improved my skills as a developer.";

    const descripcion2 = currentLenguaje === "es"
        ? "Pokedex elaborada con la Poke-Api, con formularios de registro, inicio de sesión y creación de pokemones. También cuenta con ordenamientos, filtros y búsqueda de pokemones."
        : "A Pokédex developed with the Poke-Api, offering user-friendly features like registration, login forms, and Pokémon creation. Enhanced with sorting, filtering, and search options, it provides a comprehensive and engaging experience.";

    return (
        <div className='fatherProjects' >
            <div className={'projectsContainer ' + theme}>
                <h1> {proyectos} </h1>
                <Project
                    title={'Vorttex Gaming'}
                    imagen={vorttex}
                    description={descripcion}
                    stack={['Javascript', 'Next14', 'React']}
                    github={'https://github.com/zuoki/VorttexGaming'}
                    deploy={'https://vorttex-gaming-topabli2-topablis-projects.vercel.app/'}
                />
                <Project
                    title={'Pokedex'}
                    imagen={pokedex}
                    description={descripcion2}
                    stack={['Javascript', 'Vite', 'React']}
                    github={'https://github.com/MartinsDiego17/PI-Pokemon-main'}
                />
            </div>
        </div>
    )
}

export default Projects
