import React from 'react'// siempre se importa react
import exerciseImg from '../images/exercise.png' // exportamos la imagen para ser usada en el componente

/* Los componentes permiten separar la interfaz de usuario en piezas independientes, 
reutilizables y pensar en cada pieza de forma aislada.
Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.
Se usan componentes para los elementos que se repiten. Existen componentes de clase (class) y funcionales (function).
Se usa como buena practica crear los componenetes dentro de su propio archivo. para eso creamos la carpeta components y 
dentro colocamos los componentes con la extension js */

//componente de clase 
/* se utiliza la palabra reservada class + Nombre de la clase y se hace una extencion (extends) de React.component
 dentro de la clase si o si debemos definir una funcion que es  RENDER que va a retornar nuestro elemento del componente*/
class Card extends React.Component {
    render(){
        return (
            <div>
               <div>
                   <img src={exerciseImg} alt="exercise"/>
                </div> 
                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card //asi exportamos nuestro componente al index.js