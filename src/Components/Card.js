import React from "react";

import '../style.css'
const Card = (props) =>{

    const {imgSrc, charName, actionListner} = props

    return(
        <div onClick={actionListner} className="card">
            <img src={imgSrc} alt="none"></img>
            <h4>{charName}</h4>
            
        </div>
    )
}

export default Card