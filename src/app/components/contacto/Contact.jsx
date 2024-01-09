'use client';
import Link from 'next/link';
import './contact.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';


const Contact = () => {

  const { theme } = useStoreTheme();
  const { currentLenguaje } = useStoreLenguaje();

  const text1 = currentLenguaje === "es" ? "VAMOS A " : "LET'S GO ";
  const text2 = currentLenguaje === "es" ? "TRABAJAR." : "TO WORK.";
  const frase = currentLenguaje === "es"
    ? "Convirtiendo ideas en éxitos con soluciones efectivas."
    : "Turning ideas into successes with effective solutions.";
  const ph1 = currentLenguaje === "es" ? "Nombre" : "Name";
  const ph3 = currentLenguaje === "es" ? "Mensaje" : "Message";
  const boton = currentLenguaje === "es" ? "Enviar" : "Send";

  return (
    <div className='fatherContact' >
      <div className={'contactChildren ' + theme}>

        <section>

          <article className='questions' >
            <h2>{text1} <br />{text2} </h2>
            <h4>{frase} </h4>
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
              <input type="text" placeholder={ph1} />
              <input type="email" placeholder='Email' />
              <input type="text" placeholder={ph3} />
              <button>{boton}</button>
            </form>
          </article>

        </section>

      </div>
    </div>

  )
}

export default Contact;
