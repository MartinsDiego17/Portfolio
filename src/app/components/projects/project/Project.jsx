'use client';
import Image from 'next/image';
import './project.css';

const Project = ({ title, image, description, quantity, stack, deploy, github }) => {

    return (
        <div className='projectContainer'>
            <section>
                <article className='imageProject' >
                    <Image src={image} />
                </article>

                <article>
                    <h3>{title}</h3>
                    <div className="habilities">
                        {
                            stack.length &&
                            stack.map(hab => (
                                <span>{hab}</span>
                            ))
                        }
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Project; 
