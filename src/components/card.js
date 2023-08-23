import React from "react";

function Card(props){
    return (
        
        <div>
        <h1>{props.heading}</h1>
        <p>{props.note}</p>
        
        </div>
    );
}

export default Card;