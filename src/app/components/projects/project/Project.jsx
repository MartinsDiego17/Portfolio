'use client';
import Image from 'next/image';
import './project.css';
import Link from 'next/link';
import { useState } from 'react';

const Project = ({ title, imagen, description, stack, github, deploy }) => {

    const [classSpan, setClassSpan] = useState('last');

    return (
        <section className='projectContainer'>

            <article className='projectImage' >
                <Image src={imagen} alt={title} />
            </article>

            <article className='projectDetails' >
                <h2>{title}</h2>
                <p>{description}</p>
                {
                    stack.map((tech, index) => (
                        index === stack.length - 1 ? (
                            <span key={tech} className={classSpan} >{tech}</span>
                        ) : (
                            <span key={tech}>{tech}</span>
                        )
                    ))
                }<br />

                <Link target='_BLANK' href={github}>
                    <button className='buttonRepository' > Repositorio <i className="fa-brands fa-github"></i></button>
                </Link>

                {deploy &&
                    <Link target='_BLANK' href={deploy}>
                        <button className='buttonDemo' > <i className="fa-solid fa-link"></i></button>
                    </Link>
                }
            </article>

        </section>
    )
}

export default Project;
