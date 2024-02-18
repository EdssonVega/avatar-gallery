import React from "react";
import "./CharacterCard.css"

function Personaje ({image,nombre,logoNacion}){
    return(
        <div className="contenedor-carta">
            <div className="nombre-personaje">{nombre}</div>
            <img src={image} className="foto-personaje" alt={nombre}/>
            <div className="contenedor-logo">
                <img src={logoNacion} className="logo-nacion"/> 
            </div>
        </div>
    )
}

export default Personaje