import Project from './project/Project';
import './projects.css';
import vorttex from './vorttex.jpg';
import pokedex from './pokedex.jpeg';

const Projects = () => {
    return (
        <div className='projectsContainer' >
            <h1>PROYECTOS</h1>
            <Project
                title={'Vorttex Gaming'}
                imagen={vorttex}
                description={'Vorttex Gaming es un E-Commerce que desarrollamos con mi equipo de estudio, en el cual tuve algunos retos que al superarlos me hicieron mejorar como desarrollador.'}
                stack={['Javascript', 'Next14', 'React']}
                github={'https://github.com/zuoki/VorttexGaming'}
                deploy={'https://vorttex-gaming-topabli2-topablis-projects.vercel.app/'}
            />
            <Project
                title={'Pokedex'}
                imagen={pokedex}
                description={'Vorttex Gaming es un E-Commerce que desarrollamos con mi equipo de estudio, en el cual tuve algunos retos que al superarlos me hicieron mejorar como desarrollador.'}
                stack={['Javascript', 'Vite', 'React']}
                github={'https://github.com/MartinsDiego17/PI-Pokemon-main'}
            />
        </div>
    )
}

export default Projects
