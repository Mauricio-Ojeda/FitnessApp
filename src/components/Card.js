import React from 'react'
import exerciseImg from '../images/exercise.png'
import './styles/Card.css' // dentro de components creamos la carpeta styles y colocamos los estilos de los componentes.

class Card extends React.Component {
    //colocamos las clases de css con el atributo className
    render(){
        return (
            <div className="card mx-auto Fitness-Card"> 
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right" alt="exercise"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card