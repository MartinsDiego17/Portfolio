import './job.css';

const Job = ({ title, name, description, habilities, date }) => {
    return (
        <div className='jobContainer' >
            <h2><span>.</span>{title} -<strong> {name}</strong></h2>
            <div className='detailsJob' >
                {description && <p>{description}</p>}
                {habilities && <p>{habilities}</p>}
                <small>{date}</small>
            </div>
        </div>
    )
}

export default Job
