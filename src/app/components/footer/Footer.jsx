'use client';
import Link from 'next/link';
import './footer.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Footer = () => {

  const { theme } = useStoreTheme();
  const { currentLenguaje } = useStoreLenguaje();

  const parrafo = currentLenguaje === "es" 
  ? "Copyright © Diego Martins. Todos los derechos reservados." 
  : "Copyright © Diego Martins. All rights reserved.";

  return (
    <div className='fatherFooter' >
      <div className={'footer '+theme} >
        <h5>
          <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' ><i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href='https://github.com/MartinsDiego17' target='_BLANK'><i className="fa-brands fa-github"></i>
          </Link>
          <Link href='mailto:martinsdiego0513@outlook.es'><i class="lastIcon  fa-solid fa-envelope"></i></Link>
          <p>
            {parrafo}
          </p>
        </h5>
      </div>
    </div>
  )
}

export default Footer;
