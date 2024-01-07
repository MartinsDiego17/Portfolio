import Link from 'next/link';
import './contact.css';

const Contact = () => {
  return (

    <div className='contactChildren' >

      <section>

        <article className='questions' >
          <h2>VAMOS A <br />TRABAJAR.</h2>
          <h4>Convirtiendo ideas en éxitos con soluciones efectivas.</h4>
          <p className='firstP' ><i className="fa-regular fa-envelope"></i> martinsdiego0513@outlook.es</p>
          <p><i className="fa-solid fa-location-dot"></i> Buenos Aires, Argentina</p>
          <h5>
            <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' ><i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link href='https://github.com/MartinsDiego17' target='_BLANK'><i className="fa-brands fa-github"></i>
            </Link>
          </h5>
          <p></p>
        </article>

        <article className='form' >
          <form>
            <input type="text" placeholder='Nombre' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Mensaje' />
            <button>Enviar</button>
          </form>
        </article>

      </section>

    </div>

  )
}

export default Contact;
