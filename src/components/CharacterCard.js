import React from "react";
import "./CharacterCard.css"

function Personaje ({image,nombre,logoNacion}){
    return(
        <>
            <div className="contenedor-carta">
                <div className="nombre-personaje">{nombre}</div>
                <a href={`#${nombre}`} className="enlace">
                    <img src={image} className="foto-personaje" alt={nombre}/>
                    <div className="sombreado-hover">
                    </div>      
                </a>
                <div className="contenedor-logo">
                    <img src={logoNacion} className="logo-nacion" alt="logo nacion"/> 
                </div>
            </div>
            <div id={nombre} className="contenedor-imagen-grande" >
                <div className="imagen-grande">
                    <a href="#" className="close">X</a>
                    <img src={image} alt={nombre}/>
                </div>
             </div>
        </>
    )
}
export default Personaje