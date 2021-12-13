import React from 'react'
import style from './Style/Nav.module.css';
import { Link , animateScoll as scroll} from "react-scroll";

function Nav() {
    return (
        <nav className={style.head}>
        <ul className={style.menu}>
           <li><Link to='home'
            smooth={true}
            >Home</Link></li>
            <li><Link to='sobremi'
            smooth={true}
            >Sobre Mi</Link></li>
            <li><Link  to='misproyectos'
            smooth={true}
            >Mis Proyectos</Link></li>
           <li><Link  to='contact'
            smooth={true}
            >Contactarme</Link></li>
        </ul>
        </nav>
    )
}

export default Nav
