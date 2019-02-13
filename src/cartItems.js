import React from 'react';
import {CartItem} from './cartItem';

export const CartItems = ({products, total}) => {
  const eachProduct = products.map((product) => {
    return <CartItem product={product}/>
  })


    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {eachProduct}
          <div>Total Price: {total}</div>
        </div>
      </div>
    
    );
}