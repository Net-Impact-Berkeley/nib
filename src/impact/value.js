import React from 'react';

export default function Value(props) {
    return (
        <div className="value">
            <img src={props.image} height = "100" alt={props.alt} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}