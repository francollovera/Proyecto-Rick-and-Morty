import React from "react";
import style from './About.module.css'
import caricatura from './imagen/caricatura.png';
import { useNavigate, useParams } from "react-router-dom";

const About = () =>{
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/home');
    }
    return( 
        <>
        <div className={style.containerBtnBack}>
            <button onClick={handleClick} className={style.backHome}>Back </button>
        </div>
    <div className={style.contenedor}>
        <p className={style.parrafo} >Hola! mi nombre es Franco Llovera, tengo 29 años y soy de San<br/> Miguel de Tucumán. Diseñé esta App de Rick and Morty trabajando<br/> con Api,  usando React,agregando Hooks, Links, Routes, Formularios,<br/> Redux y estilos de todo tipo y de diversas maneras.
        Seguramente<br/>  este es elcomienzo de muchos otros proyectos en donde podemos<br/> poner en marcha nuestros conocimientos, habilidades y sobre <br/>todo mi creatividad. </p>
        <img className={style.imagen} src={caricatura}/>


    </div>
    </>
    )
}

export default About;