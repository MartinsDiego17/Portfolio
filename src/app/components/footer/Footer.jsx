import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer' >
      <h5>
        <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' ><i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link href='https://github.com/MartinsDiego17' target='_BLANK'><i className="fa-brands fa-github"></i>
        </Link>
        <p>
          Copyright © Diego Martins. Todos los derechos reservados.
        </p>
      </h5>
    </div>
  )
}

export default Footer;
