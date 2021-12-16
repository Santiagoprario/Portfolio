import React from 'react'
import Nav from './Nav'
import style from './Style/Home.module.css';
import { Link , animateScoll as scroll} from "react-scroll";
import mail from "../img/mail.png";
import whats from "../img/whats.png";
import linkedin from "../img/linkedin.png";
import git from "../img/git.png";
import Projects from './Projects';
import hola from "../img/hola.PNG";
import sobremi from '../img/mi.PNG';
import contact from '../img/contact.png'

function Home() {
    
    const aboutOne = 'Soy una persona curiosa e inventiva a la que le gusta mucho experimentar y aprender en base a la practica.. Me gusta mucho desafiarme a mi mismo e incorporar conocimiento todo el tiempo. Soy una persona creativa, con liderazgo y trabajo en equipo.'
    const aboutTwo = 'Me gusta el diseno minimalista y estar en los detalles. Siempre estuve relacionado a las computadoras, desde los 12 anos que hago servicio tecnico de pc y mantenimiento de redes'
    const aboutThree = 'Hoy en dia, me encuentro en la busqueda de mi primer oportunidad en el sector, la cual voy a devolver con mucho trabajo y compromiso'
    
    
    
    
    
    return (
        <div className={style.container}>
          <Nav className={style.nav} /> 
         <section
         id='home'
         className={style.home}>
          <div>
              <h1 className={style.titleProject}>Hola!</h1>
              <p> Hola! Bienvenid@ a mi Portfolio! Mi nombre es Santiago Prario y soy Full Stack Developer. Me forme en el bootcamp de Henry, el cual requiere mas de 800 horas de codigo para aprobarlo. Aqui estan expuestos algunos de mis proyectos del curso o de proyectos propios que he realizado para adquirir mas experiencia.
              </p>
          </div>
          <img src={hola} alt="hola"  /> 
         </section>
         <section
         id='sobremi'
         className={style.about}>
             <img src={sobremi} alt="hola"  /> 
             <div className={style.sobremi}>
             <h2>Sobre Mi</h2>
             <p>{aboutOne} </p>
             <p>{aboutTwo} </p>
             <p>{aboutThree} </p>
             </div>
         </section>
         <section
         id='misproyectos'> 
          <h2 className={style.titleProject}>Mis Proyectos</h2>
         <Projects />
         </section>
         <section
         id='contact'
         className={style.contact}>
         <h1>Contactarme</h1>
         <div className={style.iconsContact}>
         <img  className={style.contactImg} src={contact} alt="/santiagoprario" height='150px' width='150px'  />

             <img src={linkedin} alt="/santiagoprario" height='70px' width='70px'  />
             <img src={mail} alt="santiagoprario@gmail.com" height='70px' width='70px' />
             <img src={whats} alt="+5492236846451" height='70px' width='70px' />
             <img src={git} alt="github.com/santiagoprario" height='70px' width='70px' />
         </div>
         </section>
        </div>
    )
}

export default Home
