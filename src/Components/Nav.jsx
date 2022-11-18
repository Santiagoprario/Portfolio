import React from 'react'
import style from './Style/Nav.module.css';
//import Link from '@mui/material/Link';
import { Link , animateScoll as scroll} from "react-scroll";

function Nav() {
    
    
    
    
    return (
        <div className={style.head}>
          <ul className={style.menu}>
            <Link to='home' smooth={true}>
                <li>Home</li>
            </Link>
            <Link to='sobremi' smooth={true}>
                <li>Sobre Mi</li>
            </Link>
            <Link to='tech' smooth={true}>
                <li>Stack Tecnológico</li>
            </Link>
            <Link to='misproyectos' smooth={true}>
                <li>Mis Proyectos</li>
            </Link>
            <Link to='contact' smooth={true}>
                <li>Contactame!</li>
            </Link>
          </ul>
        </div>
    )
}

export default Nav
