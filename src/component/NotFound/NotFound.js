import React from 'react';
import image from '../Images/error.jpg'

const NotFound = () => {
    return (
        <div className="container mt-5"> 
            <img className="img-fluid" src={image} alt=""/>
        </div>
    );
};

export default NotFound;