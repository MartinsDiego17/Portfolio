import './experience.css';
import Job from './lastjob/Job';

const Experience = () => {
    return (
        <div className='experienceContainer'>
            <h1>EXPERIENCIA {/* <i className="fa-solid fa-briefcase"></i> */}</h1>
            <Job
                title={'Fabricante de productos de aromaterapia'}
                name={'Vishuddh'}
                description={'Gestión y producción de una variedad de productos de aromaterapia, asegurando altos estándares de calidad y eficiencia operativa.'}
                habilities={'Control de calidad - Desarrollo de productos - Eficiencia operativa'}
                date={'2018 - 2023'}
            />
            <Job
                title={'Atención al cliente'}
                name={'Vishuddh'}
                description={'Experiencia en atención al cliente como vendedor de productos de aromaterapia en ferias artesanales, proporcionando información detallada y asesoramiento a los clientes.'}
                habilities={'Servicio al cliente - Comunicación efectiva - Venta de productos'}
                date={'2018 - 2023'}
            />
        </div>
    );
}

export default Experience;
