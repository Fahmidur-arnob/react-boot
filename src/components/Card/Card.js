import React from 'react';

const Card = ({product}) => {
    return (
        <div className="card">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
            </div>
        </div>
    );
};

export default Card;