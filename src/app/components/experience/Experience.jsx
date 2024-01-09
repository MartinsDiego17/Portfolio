'use client';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import './experience.css';
import Job from './lastjob/Job';

const Experience = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const experiencia = currentLenguaje === "es" ? "EXPERIENCIA" : "EXPERIENCE";

    const title1 = currentLenguaje === "es" ? "Fabricante de productos de aromaterapia" : "Aromatherapy product manufacturer.";

    const description1 = currentLenguaje === "es" 
    ? "Gestión y producción de una variedad de productos de aromaterapia, asegurando altos estándares de calidad y eficiencia operativa." 
    : "Management and production of a variety of aromatherapy products, ensuring high standards of quality and operational efficiency.";

    const habilities1 = currentLenguaje === "es" 
    ? "Control de calidad - Desarrollo de productos - Eficiencia operativa" 
    : "Quality control - Product development - Operational efficiency";

    const title2 = currentLenguaje === "es" ? "Atención al cliente" : "Customer service";

    const description2 = currentLenguaje === "es" 
    ? "Experiencia en atención al cliente como vendedor de productos de aromaterapia en ferias artesanales, proporcionando información detallada y asesoramiento a los clientes." 
    : "Extensive customer service experience as a seller of aromatherapy products at craft fairs, providing comprehensive information and personalized guidance to customers.";

    const habilities2 = currentLenguaje === "es" 
    ? "Servicio al cliente - Comunicación efectiva - Venta de productos" 
    : "Customer service - Effective communication - Product sales";

    return (
        <div className='fatherExperience' >
            <div className={'experienceContainer '+theme}>
                <h1>{experiencia}</h1>
                <Job
                    title={title1}
                    name={'Vishuddh'}
                    description={description1}
                    habilities={habilities1}
                    date={'2018 - 2023'}
                />
                <Job
                    title={title2}
                    name={'Vishuddh'}
                    description={description2}
                    habilities={habilities2 }
                    date={'2018 - 2023'}
                />
            </div>
        </div>
    );
}

export default Experience;
