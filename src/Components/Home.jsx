import React from 'react'
import Nav from './Nav'
import style from './Style/Home.module.css';
import { animateScoll as scroll} from "react-scroll";
import mail from "../img/mail.png";
import whats from "../img/whats.png";
import linkedin from "../img/linkedin.png";
import git from "../img/git.png";
import Projects from './Projects';
import hola from "../img/hola.PNG";
import tech from "../img/tech.png";
import sobremi from '../img/mi.PNG';
import contact from '../img/contact.png';
import truco1 from '../img/truco1.png';
import truco2 from '../img/truco2.png';
import truco3 from '../img/truco3.png';
import { Typography } from '@mui/material';
import Section from './Section';
import { Link } from '@mui/material'
import { greetingText, greetingTitle, aboutOne, projects, techs } from '../constants';

function Home() {
         
    
    
    return (
        <div className={style.container}>
          <Nav /> 
         <section
         id='home'>
          <Section title={greetingTitle} text={greetingText} img={hola} itemAlign='center' background={'transparent'}/>
         </section>
         <section
         id='sobremi'>
            <Section title={'Sobre mi'} text={aboutOne} img={sobremi} textAlign='left' itemAlign='flex-start' reverse={true}/>
         </section>
         <section
         id='tech'>
          <Section title={'Stack Tecnológico'} text={techs} img={tech} itemAlign='flex-end' background={'rgba(128,128,128, 0.50)'}/>
         </section>
         <section
         id='misproyectos'
         className={style.misproyectos}> 
          <div className={style.titleProject}>
            <Typography  variant='h2'>Mis Proyectos</Typography>
          </div>
         {projects.map(p => <Projects name={p.name} info={p.info} tecno={p.tecno} img={p.img} img2={p.img2}/>)}
         </section>
         <section
         id='contact'
         className={style.contact}>
         <h1>Contactarme</h1>
         <div className={style.iconsContact}>
         <img  className={style.contactImg} src={contact} alt="/santiagoprario" height='150px' width='150px'  />

            <Link href='https://www.linkedin.com/in/santiagoprario/' target="_blank">
               <img src={linkedin} alt="/santiagoprario" height='70px' width='70px'  />
            </Link>
            <Link href='mailto:santiagoprario@gmail.com' target="_blank">
               <img src={mail} alt="santiagoprario@gmail.com" height='70px' width='70px' />
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=5492236846451' target="_blank">
               <img src={whats} alt="+5492236846451" height='70px' width='70px' />
            </Link>
            <Link href='https://github.com/Santiagoprario' target="_blank">
               <img src={git} alt="github.com/santiagoprario" height='70px' width='70px' />
            </Link>
         </div>
         </section>
        </div>
    )
}

export default Home
