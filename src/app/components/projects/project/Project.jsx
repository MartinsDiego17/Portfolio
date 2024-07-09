'use client';
import Image from 'next/image';
import './project.css';

const Project = ({ projects, title, imagen, id, isSelected, setSelected, setIndice }) => {

    const handleSelect = () => {
        const newSelect = projects.find(proyecto => proyecto.title === title);
        setSelected(newSelect);
        setIndice(id);
    };

    return (
        <div
            onClick={handleSelect}
            id={isSelected && "projectSelected"}
            className='projectContainer'
            style={{ backgroundImage: `url(${imagen.src && imagen.src})` }}
        >
            <p>{title.toUpperCase()}</p>
        </div>
    )
}

export default Project; 
