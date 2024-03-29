'use client';
import Link from 'next/link';
import './contact.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const msj1 = currentLenguaje === "es" ? "Nombre inválido." : "Invalid name.";
    const msj2 = currentLenguaje === "es" ? "Email inválido." : "Invalid email.";
    const msj3 = currentLenguaje === "es" ? "Mensaje inválido." : "Invalid message.";

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 1) {
      Swal.fire({
        icon:"error",
        title: msj1,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }

    if(!regexEmail.test(email)) {
      Swal.fire({
        icon:"error",
        title: msj2,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }

    if(mensaje.length < 1) {
      Swal.fire({
        icon:"error",
        title: msj3,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }


    setName('');
    setEmail('');
    setMensaje('');

    emailjs.sendForm('service_kwqupbl', 'template_9hrldjg', form.current, 'dAbYhg4Q92G393ame')
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado con éxito!",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
    
      }, (error) => {
        console.log(error)
      });
  }

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
              <Link href={'mailto:martinsdiego0513@outlook.es'}><i className  ="fa-solid fa-envelope"></i></Link>
            </h5>
            <p></p>
          </article>

          <article className='form' >
            <form ref={form} onSubmit={sendEmail} >
              <input value={name} type="text" placeholder={ph1} name='user_name' onChange={(e) => setName(e.target.value)} />
              <input value={email} type="email" placeholder='Email' name="user_email" onChange={(e) => setEmail(e.target.value)} />
              <textarea value={mensaje} type="text" placeholder={ph3} name="message" onChange={(e) => setMensaje(e.target.value)} />
              <button>{boton}</button>
            </form>
          </article>

        </section>

      </div>
    </div>

  )
}

export default Contact;
