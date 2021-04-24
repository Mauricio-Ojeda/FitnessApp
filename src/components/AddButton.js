import React from 'react';
import './styles/AddButton.css';
import AddImage from '../images/add.png'

function AddButton(){
    return(
        <a href="/exercise/new">
            <img src={AddImage} class="Fitness-Add" />
        </a>

    )
}

export default AddButton;