import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {

    const products = [
        {id: 1, name: "Macbook Pro", price: 155000},
        {id: 2, name: "iPhone 14 Pro max", price: 245000},
        {id: 3, name: "iPad mini", price: 12000},
        {id: 4, name: "Apple Watch", price: 75000},
    ]

    return (
        <div>
            <div className="card-group">
                {
                    products.map(product => <Card 
                        key={product.id}
                        product = {product}
                        ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;