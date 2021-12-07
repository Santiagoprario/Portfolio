import React from 'react'
import Nav from './Nav'
import style from './Style/Home.module.css';
import { Link , animateScoll as scroll} from "react-scroll";
import mail from "../img/mail.png";
import whats from "../img/whats.png";
import linkedin from "../img/linkedin.png";
import git from "../img/git.png"

function Home() {
    



    
    
    
    
    
    return (
        <div className={style.container}>
          <Nav /> 
         <section
         id='home'>
            home
         </section>
         <section
         id='sobremi'
         className={style.sobremi}>
             sobre mi
         </section>
         <section
         id='misproyectos'>
         mis proyetcos
         </section>
         <section
         id='contact'
         className={style.contact}>
         <h1>Contactarme</h1>
         <div className={style.iconsContact}>
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
