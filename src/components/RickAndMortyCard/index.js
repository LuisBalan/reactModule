import React from "react";
import './RickAndMortyCard.css'

function CharacterCard({Name, Status, Species, Image}){
	return(
		<div className = 'cardContainer' >
        <div>
            <img className = "image" src = {Image} width = '200px'/>
        </div>
        <p className = 'descriptionContainer'>
            <li className = 'field'>Name:</li>
			<li className = 'value'>{Name}</li>
            <br/>
			<li className = 'field'>Status:</li>
            <li className = 'value'>{Status}</li>
            <br />
			<li className = 'field'>Species:</li>
            <li className = 'value'>{Species}</li>			

        </p>
		</div>
	)
}

export default CharacterCard;