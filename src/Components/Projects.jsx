import React from 'react';
import style from './Style/Projects.module.css';


function Projects({name , info, tecno , img , img2}) {
    
    
    return (
        <div className={style.container}>
           <h2 className={style.title}>{name ? name : 'Proyecto: Truco online'}</h2> 
           <hr />
           <p className={style.info}>{info ? info : 'Este proyecto ha sido desarrollado con React + Redux para el Front End. En el back se utilizo Express para el servidor y PostreSQL para la base de datos. Para la interaccion entre los dos usuario se utilizo Socket.IO'}</p>
           <p className={style.tecno}>{tecno ? tecno : 'React , Redux , Express , Sequelize , PostgreSQL , Socket.IO, JWT , Axios'}</p> 
           <div className={style.contImg}>
           <img className={style.img} src={img} alt="/santiagoprario"  />
           <img className={style.img} src={img2} alt="/santiagoprario" />
           </div>
        </div>
    )
}

export default Projects
