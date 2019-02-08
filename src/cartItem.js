import React from 'react';

export const CartItem = ({product}) => { 
    const {product:{name, priceInCents, id}, quantity} = product;

    return (
      <div className="list-group-item" index={id}>
        <div className="row">
            <div className="col-md-8">{name}</div>
            <div className="col-md-2">{priceInCents}</div>
            <div className="col-md-2">{quantity}</div>
        </div>
      </div>   
    );
}