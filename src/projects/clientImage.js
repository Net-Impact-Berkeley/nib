import React from 'react';


function ClientImage(props) {

    return (
        <a href={props.link} target = "_blank" rel="noopener noreferrer"> 
            <img src={props.img} alt="" />
        </a>
    );
}

export default ClientImage;
