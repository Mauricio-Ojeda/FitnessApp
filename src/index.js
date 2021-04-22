// const element = document.createElement('h1')
// element.innerText = 'Hello React..'
// const container = document.getElementById('root')
// container.appendChild(element)
// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Mauricio',
    lastName: 'y Valentina',
    avatar: 'https://spaceplace.nasa.gov/review/sunburn/sunburn1.sp.png'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>Hello {getName(user)} </h1>
    }
    return <h1>Hello Stranger </h1>
}

const name = 'Raul'
//JSX  nos permite usar html en js, para llamar variables o funciones lo ponemos entre {}
const element = (//cuando vamos a escribir mucho jsx lo ponemos entre parentesis
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__) QUE queremos renderizar y DONDE lo queremos renderizar

ReactDOM.render(element, container)