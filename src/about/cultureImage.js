import React from 'react';

const CultureImage = ({imageLink, description, alt}) => {
    return (
        <div className="col">
            <img src={imageLink} className="lifeInNibPics" height= "280" alt={alt} />
            <p>{description}</p>
        </div>
    );
}

export default CultureImage;
