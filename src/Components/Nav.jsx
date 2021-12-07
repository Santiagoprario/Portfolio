import React from 'react'
import style from './Style/Nav.module.css';
import { Link , animateScoll as scroll} from "react-scroll";

function Nav() {
    return (
        <nav className={style.head}>
        <ul className={style.menu}>
            <Link to='home'
            smooth={true}
            >Home</Link>
            <Link to='sobremi'
            smooth={true}
            >Sobre Mi</Link>
            <Link to='misproyectos'
            smooth={true}
            >Mis Proyectos</Link>
            <Link to='contact'
            smooth={true}
            >Contactarme</Link>
        </ul>
        </nav>
    )
}

export default Nav
